import React from "react";

const PLOT_W = 860;
const PLOT_H = 440;
const GUTTER_L = 60;
const GUTTER_B = 40;
const VB_W = PLOT_W + GUTTER_L + 20;
const VB_H = PLOT_H + GUTTER_B + 20;

function niceBounds(min, max) {
  if (min === max) return { min: min - 1, max: max + 1 };
  const span = max - min;
  const pad = span * 0.08;
  return { min: Math.max(0, Math.floor(min - pad)), max: Math.ceil(max + pad) };
}

/**
 * ScatterChart — "Intelligence vs. Speed" format, plotting arbitrary
 * {x, y} points. Unlike the site's current ad-hoc scatter (a different
 * random color per model), this one follows the same rule as every other
 * chart in the library: Cerebras is always orange, everything else is a
 * single neutral color — never a rainbow of per-model colors. Any point
 * can still override its own `color` for the rare chart that genuinely
 * needs a distinct color per point (see the color-flexibility principle
 * in the readme) — the default is just never "assign random colors."
 *
 * x/y domains are computed from the data unless `xDomain`/`yDomain` are
 * given explicitly — works the same for 4 points or 40.
 *
 * Reads only the --graph-* tokens from tokens/charts.css.
 */
export function ScatterChart({
  theme = "light",
  title,
  titleAccent,
  xAxisLabel,
  yAxisLabel,
  points = [],
  xDomain,
  yDomain,
  style,
  ...rest
}) {
  const [mounted, setMounted] = React.useState(false);
  const [hovered, setHovered] = React.useState(null);
  React.useEffect(() => {
    const id = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(id);
  }, []);

  const dark = theme !== "light";
  const titleParts = titleAccent && title?.includes(titleAccent)
    ? title.split(titleAccent)
    : null;

  // The dots themselves pop in first, in a shuffled (not data-order) —
  // that "seeds" the plot with no particular reading direction. Only once
  // they've landed do the labels sweep in left-to-right by x-position,
  // sliding out from inside their own dot — so the reveal reads as
  // "here's the data, now here's what it means" rather than one flat pop.
  // Memoized on `points` so a hover re-render doesn't reshuffle mid-flight.
  const dotDelays = React.useMemo(
    () => points.map(() => Math.round(Math.random() * 300)),
    [points]
  );
  const xRanks = [...points.keys()].sort((a, b) => points[a].x - points[b].x);
  const rankOf = new Map(xRanks.map((idx, rank) => [idx, rank]));
  const TEXT_BASE_DELAY = 550;

  const xs = points.map((p) => p.x);
  const ys = points.map((p) => p.y);
  const xB = xDomain ? { min: xDomain[0], max: xDomain[1] } : niceBounds(Math.min(...xs, 0), Math.max(...xs, 1));
  const yB = yDomain ? { min: yDomain[0], max: yDomain[1] } : niceBounds(Math.min(...ys, 0), Math.max(...ys, 1));

  const toSvgX = (x) => GUTTER_L + ((x - xB.min) / (xB.max - xB.min || 1)) * PLOT_W;
  const toSvgY = (y) => 10 + PLOT_H - ((y - yB.min) / (yB.max - yB.min || 1)) * PLOT_H;
  // Same cream-vs-white distinction as HorizontalBarChart/PieChart — this
  // chart type's own Figma spec uses the cream card in light mode.
  const bg = theme === "light" ? "var(--paper-50)" : "var(--graph-bg)";

  return (
    <div
      data-graph-theme={theme}
      style={{
        background: bg,
        borderRadius: "var(--radius-md)",
        padding: dark ? "36px 32px 32px" : "46px",
        fontFamily: "var(--font-sans)",
        boxSizing: "border-box",
        ...style,
      }}
      {...rest}
    >
      {title ? (
        <p
          style={{
            margin: "0 0 32px",
            fontWeight: 500,
            fontSize: 20,
            lineHeight: 1.3,
            letterSpacing: "-0.02em",
            color: "var(--graph-fg)",
          }}
        >
          {titleParts ? (
            <>
              <span style={{ color: "var(--orange)", fontWeight: 700 }}>{titleAccent}</span>
              {titleParts[1]}
            </>
          ) : (
            title
          )}
        </p>
      ) : null}

      <div style={{ display: "flex" }}>
        {yAxisLabel ? (
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 16, flexShrink: 0 }}>
            <span
              style={{
                fontWeight: 700,
                fontSize: 12,
                letterSpacing: "-0.01em",
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
          <svg
            viewBox={`0 0 ${VB_W} ${VB_H}`}
            style={{
              width: "100%",
              display: "block",
              borderRadius: "var(--radius-xs)",
              backgroundImage: `radial-gradient(${dark ? "rgba(255,255,255,0.14)" : "rgba(26,26,26,0.12)"} 1px, transparent 1px)`,
              backgroundSize: "13px 13px",
            }}
          >
            <line x1={GUTTER_L} x2={GUTTER_L} y1={10} y2={PLOT_H + 10} stroke="var(--graph-border)" strokeWidth="1" />
            <line x1={GUTTER_L} x2={VB_W} y1={PLOT_H + 10} y2={PLOT_H + 10} stroke="var(--graph-border)" strokeWidth="1" />

            <text x={GUTTER_L - 10} y={16} textAnchor="end" fontFamily="var(--font-mono)" fontWeight="600" fontSize="12" fill="var(--graph-fg)">
              {Number(yB.max.toFixed(2))}
            </text>
            <text x={GUTTER_L - 10} y={PLOT_H + 14} textAnchor="end" fontFamily="var(--font-mono)" fontWeight="600" fontSize="12" fill="var(--graph-fg)">
              {Number(yB.min.toFixed(2))}
            </text>
            <text x={GUTTER_L} y={PLOT_H + 34} textAnchor="middle" fontFamily="var(--font-mono)" fontWeight="600" fontSize="12" fill="var(--graph-fg)">
              {Number(xB.min.toFixed(2))}
            </text>
            <text x={VB_W} y={PLOT_H + 34} textAnchor="end" fontFamily="var(--font-mono)" fontWeight="600" fontSize="12" fill="var(--graph-fg)">
              {Number(xB.max.toFixed(2))}
            </text>

            {points.map((p, i) => {
              const cx = toSvgX(p.x);
              const cy = toSvgY(p.y);
              const color = p.color ?? (p.cerebras ? "var(--orange)" : "var(--graph-fg)");
              const dimmed = hovered !== null && hovered !== i;
              const dx = p.labelOffset?.dx ?? 12;
              // dy now only nudges the whole label block from its default
              // (vertically centered on the dot) — 0 unless overridden.
              const dy = p.labelOffset?.dy ?? 0;
              const labelAlign = dx < 0 ? "end" : "start";
              const dotDelay = dotDelays[i] ?? 0;
              const textDelay = TEXT_BASE_DELAY + rankOf.get(i) * 35;
              return (
                <g
                  key={p.label ?? i}
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                  style={{ cursor: "pointer" }}
                >
                  <circle
                    cx={cx}
                    cy={cy}
                    r={p.cerebras ? 5 : 4}
                    fill={color}
                    style={{
                      opacity: mounted ? (dimmed ? 0.35 : 1) : 0,
                      transformBox: "fill-box",
                      transformOrigin: "center",
                      transform: mounted ? "scale(1)" : "scale(0.3)",
                      transition: `opacity 0.35s var(--ease-out) ${dotDelay}ms, transform 0.35s var(--ease-out) ${dotDelay}ms`,
                    }}
                  />
                  {/* Labels wait for the dots to land, then slide out from
                      inside their own dot (starting at translateX(-dx),
                      i.e. right on top of cx) into their resting offset —
                      staggered left-to-right by x-position, not by dot
                      pop-in order. */}
                  <g
                    style={{
                      opacity: mounted ? (dimmed ? 0.35 : 1) : 0,
                      transform: mounted ? "translateX(0px)" : `translateX(${-dx}px)`,
                      transition: `opacity 0.4s var(--ease-out) ${textDelay}ms, transform 0.4s var(--ease-out) ${textDelay}ms`,
                    }}
                  >
                    {/* Name label sits on the same line as the dot (dominant-
                        baseline centers it on cy), value line sits directly
                        below — not floating above the dot. */}
                    <text
                      x={cx + dx}
                      y={cy + dy}
                      dominantBaseline="middle"
                      textAnchor={labelAlign}
                      fontFamily="var(--font-mono)"
                      fontWeight="600"
                      fontSize="11"
                      letterSpacing="0.05em"
                      style={{ textTransform: "uppercase" }}
                      fill={p.cerebras ? "var(--orange)" : "var(--graph-fg)"}
                    >
                      {p.label}
                    </text>
                    <text
                      x={cx + dx}
                      y={cy + dy + 14}
                      dominantBaseline="middle"
                      textAnchor={labelAlign}
                      fontFamily="var(--font-mono)"
                      fontWeight="600"
                      fontSize="11"
                      fill={p.cerebras ? "var(--orange)" : "var(--graph-fg-secondary)"}
                    >
                      {p.valueDisplay ?? p.value}
                    </text>
                  </g>
                </g>
              );
            })}
          </svg>

          {xAxisLabel ? (
            <p
              style={{
                margin: "8px 0 0",
                textAlign: "center",
                fontWeight: 700,
                fontSize: 12,
                letterSpacing: "-0.01em",
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
