import React from "react";

const PLOT_W = 850;
const PLOT_H = 300;
const GUTTER_L = 50;
const GUTTER_B = 40;
const VB_W = PLOT_W + GUTTER_L + 10;
const VB_H = PLOT_H + GUTTER_B + 10;

/** "Nice" rounded max for an auto-generated axis, e.g. 0.583 → 0.6, 47 → 50. */
function niceMax(value) {
  if (value <= 0) return 1;
  const magnitude = 10 ** Math.floor(Math.log10(value));
  const normalized = value / magnitude;
  const niceNormalized = normalized <= 1 ? 1 : normalized <= 2 ? 2 : normalized <= 5 ? 5 : 10;
  return niceNormalized * magnitude;
}

/**
 * LineChart — trend-over-model-size format ("CS-4 enables sub-1ms latency
 * ... for 10T models and beyond"). Any number of series, each with any
 * number of {x, y} points — ticks and the y-axis max are computed from
 * the data, never hardcoded to one dataset's range.
 *
 * By default the first series (or one flagged `cerebras: true`) paints
 * flat brand orange and the rest use `--graph-line-secondary` (a neutral
 * ramp shade, per-theme — not the muted `--graph-fg-secondary` text color,
 * which doesn't have enough contrast for a stroke). Any series can
 * override its own `color`. Reads only the --graph-* tokens from
 * tokens/charts.css.
 *
 * `variant="area"` fills the band under each series instead of (well, in
 * addition to) just stroking the line — for a "growth/forecast comparison"
 * story where the filled gap between two curves *is* the point. Each
 * series is filled only down to the series before it (not to the axis
 * baseline), so with series given lowest-to-highest the result reads as
 * stacked bands, not overlapping triangles: the lowest series fills to the
 * baseline, and the top one's fill is the sliver of "extra" above it — the
 * same two-tone rule as every other chart (last/`cerebras` series → flat
 * orange, everything else → `--graph-line-secondary`, overridable per
 * series via `areaColor`; note the gradient `--graph-cerebras-fill`/
 * `--graph-competitor-fill` tokens can't be reused here — they're CSS
 * `linear-gradient()` values valid for an HTML element's `background`,
 * not for an SVG `fill` attribute). This only reads correctly when every
 * series shares the same x values and never crosses the one before it in
 * the array — it isn't meant for arbitrary/crossing multi-series data,
 * just this one comparison shape.
 */
export function LineChart({
  theme = "light",
  title,
  titleAccent,
  subtitle,
  xAxisLabel,
  yAxisLabel,
  series = [],
  yTicks,
  variant = "line",
  style,
  ...rest
}) {
  const isArea = variant === "area";
  const [hovered, setHovered] = React.useState(null);
  const [lengths, setLengths] = React.useState([]);
  const pathRefs = React.useRef([]);
  const animationsRef = React.useRef([]);

  // The line's own draw-in is handled below via the Web Animations API;
  // the area fills are plain opacity fades (CSS transitions are reliable
  // for opacity, just not for SVG stroke-dashoffset — see the note below).
  const [areaMounted, setAreaMounted] = React.useState(false);
  React.useEffect(() => {
    setAreaMounted(false);
    const id = requestAnimationFrame(() => setAreaMounted(true));
    return () => cancelAnimationFrame(id);
  }, [series]);

  // Measure each polyline's real length synchronously after it's in the
  // DOM but before paint, so the very first frame already has the correct
  // stroke-dasharray — reading getTotalLength() during render would read
  // a stale/undefined ref from the previous render instead.
  //
  // Re-running this whenever `series` changes — not just on initial mount
  // — matters in Storybook: editing args via Controls re-renders this same
  // mounted component with new data, it doesn't remount it, so a
  // mount-only animation would only ever play once and never again when
  // the data actually changes.
  React.useLayoutEffect(() => {
    setLengths(pathRefs.current.map((el) => el?.getTotalLength?.() ?? 0));
  }, [series]);

  // Driving the draw-in via a CSS transition on inline `strokeDashoffset`
  // turned out to be unreliable here: verified with getAnimations() that
  // the browser never registered a transition at all — the value jumped
  // straight from length to 0 with nothing animating in between, even
  // across a double-rAF gap. The Web Animations API doesn't have that
  // "detect a value change across a painted frame" requirement — it's
  // imperative and starts immediately and deterministically — so animate
  // strokeDashoffset directly instead of toggling a state flag through
  // CSS. The element's own inline style stays pinned at the hidden state
  // (dashoffset === length); `fill: "forwards"` layers the animated 0 on
  // top without React ever needing to touch the style again.
  React.useEffect(() => {
    animationsRef.current.forEach((a) => a?.cancel());
    animationsRef.current = pathRefs.current.map((el, i) => {
      const length = lengths[i];
      if (!el || !length) return null;
      return el.animate(
        [{ strokeDashoffset: length }, { strokeDashoffset: 0 }],
        { duration: 900, delay: i * 150, easing: "cubic-bezier(0.22, 1, 0.36, 1)", fill: "forwards" }
      );
    });
    return () => animationsRef.current.forEach((a) => a?.cancel());
  }, [lengths]);

  const dark = theme !== "light";
  const titleParts = titleAccent && title?.includes(titleAccent)
    ? title.split(titleAccent)
    : null;

  const allPoints = series.flatMap((s) => s.points);
  const xValues = allPoints.map((p) => p.x);
  const xMin = Math.min(...xValues, 0);
  const xMax = Math.max(...xValues, 1);
  const yMax = niceMax(Math.max(...allPoints.map((p) => p.y), 0));
  const ticks = yTicks ?? Array.from({ length: 6 }, (_, i) => (yMax / 5) * i);
  const xTickValues = [...new Set(xValues)].sort((a, b) => a - b);

  const toSvgX = (x) => GUTTER_L + ((x - xMin) / (xMax - xMin || 1)) * PLOT_W;
  const toSvgY = (y) => PLOT_H - (y / (yMax || 1)) * PLOT_H;

  // Each series' fill is the band between its own curve and the series
  // before it (or the baseline, for the first one) — not a full
  // baseline-to-curve fill for every series, which would just bury each
  // earlier band under the next.
  const areaBandPaths = isArea
    ? series.map((s, i) => {
        const topPts = s.points
          .slice()
          .sort((a, b) => a.x - b.x)
          .map((p) => [toSvgX(p.x), toSvgY(p.y)]);
        const prevSeries = series[i - 1];
        const bottomPts = prevSeries
          ? prevSeries.points.slice().sort((a, b) => a.x - b.x).map((p) => [toSvgX(p.x), toSvgY(p.y)])
          : topPts.map(([x]) => [x, toSvgY(0)]);
        const top = topPts.map(([x, y]) => `${x},${y}`).join(" L ");
        const bottomReversed = bottomPts.slice().reverse().map(([x, y]) => `${x},${y}`).join(" L ");
        return `M ${top} L ${bottomReversed} Z`;
      })
    : [];

  return (
    <div
      data-graph-theme={theme}
      style={{
        background: "var(--graph-bg)",
        borderRadius: "var(--radius-md)",
        padding: 48,
        fontFamily: "var(--font-sans)",
        boxSizing: "border-box",
        ...style,
      }}
      {...rest}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 24, marginBottom: 32, flexWrap: "wrap" }}>
        <div>
          {title ? (
            <p
              style={{
                margin: "0 0 8px",
                fontWeight: 500,
                fontSize: 24,
                lineHeight: 1.3,
                letterSpacing: "-0.02em",
                color: "var(--graph-fg)",
              }}
            >
              {titleParts ? (
                <>
                  <span style={{ color: "var(--orange)", fontWeight: 600 }}>{titleAccent}</span>
                  {titleParts[1]}
                </>
              ) : (
                title
              )}
            </p>
          ) : null}
          {subtitle ? (
            <p
              style={{
                margin: 0,
                fontFamily: "var(--font-mono)",
                fontWeight: 600,
                fontSize: 13,
                letterSpacing: "0.02em",
                textTransform: "uppercase",
                color: "var(--graph-fg-secondary)",
              }}
            >
              {subtitle}
            </p>
          ) : null}
        </div>
        <div style={{ display: "flex", gap: 24, alignItems: "center", flexWrap: "wrap" }}>
          {series.map((s, i) => (
            <div
              key={s.label ?? i}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              style={{ display: "flex", gap: 8, alignItems: "center", cursor: "pointer" }}
            >
              <div
                style={{
                  width: 12,
                  height: 12,
                  borderRadius: "var(--radius-xs)",
                  flexShrink: 0,
                  background: s.color ?? (s.cerebras ?? i === series.length - 1 ? "var(--orange)" : "var(--graph-line-secondary)"),
                }}
              />
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontWeight: 600,
                  fontSize: 13,
                  color: s.cerebras ?? i === series.length - 1 ? "var(--graph-fg)" : "var(--graph-fg-secondary)",
                }}
              >
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div style={{ display: "flex" }}>
        {yAxisLabel ? (
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 16, flexShrink: 0 }}>
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontWeight: 600,
                fontSize: 13,
                letterSpacing: "0.02em",
                textTransform: "uppercase",
                color: "var(--graph-fg-secondary)",
                whiteSpace: "nowrap",
                transform: "rotate(-90deg)",
              }}
            >
              {yAxisLabel}
            </span>
          </div>
        ) : null}

        <div style={{ flex: 1, minWidth: 0 }}>
          <svg viewBox={`0 0 ${VB_W} ${VB_H}`} style={{ width: "100%", display: "block" }}>
            {ticks.map((t) => {
              const y = toSvgY(t);
              return (
                <g key={t}>
                  <line x1={GUTTER_L} x2={VB_W} y1={y} y2={y} stroke="var(--graph-border)" strokeWidth="1" />
                  <text x={GUTTER_L - 12} y={y} textAnchor="end" dominantBaseline="middle" fontFamily="var(--font-mono)" fontSize="12" fontWeight="500" fill="var(--graph-fg-secondary)">
                    {Number(t.toFixed(2))}
                  </text>
                </g>
              );
            })}

            {xTickValues.map((x) => (
              <text
                key={x}
                x={toSvgX(x)}
                y={PLOT_H + 24}
                textAnchor="middle"
                fontFamily="var(--font-mono)"
                fontWeight="600"
                fontSize="12"
                fill="var(--graph-fg-secondary)"
              >
                {x}
              </text>
            ))}

            {isArea &&
              series.map((s, i) => {
                const dimmed = hovered !== null && hovered !== i;
                const isLast = s.cerebras ?? i === series.length - 1;
                // `--graph-cerebras-fill`/`--graph-competitor-fill` hold
                // CSS `linear-gradient(...)` values (correct for an HTML
                // element's `background`, as other charts use them) — not
                // valid for an SVG `fill` attribute, which silently drops
                // to black on an unparseable paint value. Flat brand
                // colors + fillOpacity get the same "translucent wash
                // under the line" look without that mismatch.
                const fill = s.areaColor ?? s.color ?? (isLast ? "var(--orange)" : "var(--graph-line-secondary)");
                return (
                  <path
                    key={s.label ?? i}
                    d={areaBandPaths[i]}
                    fill={fill}
                    fillOpacity={isLast ? 0.55 : 0.35}
                    onMouseEnter={() => setHovered(i)}
                    onMouseLeave={() => setHovered(null)}
                    style={{
                      cursor: "pointer",
                      opacity: areaMounted ? (dimmed ? 0.35 : 1) : 0,
                      transition: `opacity 0.6s var(--ease-out) ${i * 150}ms`,
                    }}
                  />
                );
              })}

            {series.map((s, i) => {
              const color = s.color ?? (s.cerebras ?? i === series.length - 1 ? "var(--orange)" : "var(--graph-line-secondary)");
              const dimmed = hovered !== null && hovered !== i;
              const pts = s.points
                .slice()
                .sort((a, b) => a.x - b.x)
                .map((p) => `${toSvgX(p.x)},${toSvgY(p.y)}`)
                .join(" ");
              const length = lengths[i] || 0;
              return (
                <polyline
                  key={s.label ?? i}
                  ref={(el) => (pathRefs.current[i] = el)}
                  points={pts}
                  fill="none"
                  stroke={color}
                  strokeWidth={2.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                  style={{
                    opacity: dimmed ? 0.3 : 1,
                    cursor: "pointer",
                    strokeDasharray: length,
                    strokeDashoffset: length,
                    transition: "opacity 0.2s ease",
                  }}
                />
              );
            })}
          </svg>

          {xAxisLabel ? (
            <p
              style={{
                margin: "8px 0 0",
                textAlign: "center",
                fontFamily: "var(--font-mono)",
                fontWeight: 600,
                fontSize: 13,
                letterSpacing: "0.02em",
                textTransform: "uppercase",
                color: "var(--graph-fg-secondary)",
              }}
            >
              {xAxisLabel}
            </p>
          ) : null}
        </div>
      </div>
    </div>
  );
}
