import React from "react";

// Endpoints for the auto-generated segment ramp — same families already
// established elsewhere in the library (multi-level ramp / brown-
// competitor), just interpolated to however many segments a column has
// instead of being capped at 3 fixed tokens.
const NEUTRAL_RAMP = {
  light: { dark: "#27393B", light: "#CED9D8" },
  dark: { dark: "#6A4A3A", light: "#DDBDAD" },
};
const ORANGE_RAMP = { dark: "#F15A29", light: "#FE9E38" };

function hexToRgb(hex) {
  const n = parseInt(hex.slice(1), 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
}
function mix(hexA, hexB, t) {
  const a = hexToRgb(hexA);
  const b = hexToRgb(hexB);
  const rgb = a.map((v, i) => Math.round(v + (b[i] - v) * t));
  return `rgb(${rgb.join(",")})`;
}
/** N evenly-spaced colors from `dark` (index 0) to `light` (last index). */
function makeRamp(endpoints, count) {
  if (count <= 1) return [endpoints.dark];
  return Array.from({ length: count }, (_, i) => mix(endpoints.dark, endpoints.light, i / (count - 1)));
}

/**
 * StackedColumnChart — cost/composition breakdown format (e.g. "Cost per
 * Intelligence Index Task", segmented by token type). Any number of
 * columns, each with any number of segments — segment colors are
 * auto-generated as a light-to-dark ramp (dark segment first/top, same
 * rule as the multi-level ramp elsewhere), never a copy of whatever ad
 * hoc greyscale a reference chart used. Columns default to the orange
 * family (this chart is almost always about Cerebras' own numbers, so
 * orange reads as the brand default); flag a column `competitor` to
 * render it in the neutral ramp instead, for a Cerebras-vs-competitor
 * cost comparison.
 *
 * Reads only the --graph-* tokens from tokens/charts.css.
 */
export function StackedColumnChart({
  theme = "dark-gradient",
  title,
  titleAccent,
  subtitle,
  segmentLabels = [],
  columns = [],
  height = 260,
  barMaxWidth = 90,
  minColumnWidth = 72,
  style,
  ...rest
}) {
  const [mounted, setMounted] = React.useState(false);
  const [hovered, setHovered] = React.useState(null);
  React.useEffect(() => {
    const id = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(id);
  }, []);

  const scrollWrapRef = React.useRef(null);
  const [needsScroll, setNeedsScroll] = React.useState(false);
  const requiredWidth = columns.length * minColumnWidth;
  React.useLayoutEffect(() => {
    const el = scrollWrapRef.current;
    if (!el) return;
    const measure = () => setNeedsScroll(el.clientWidth < requiredWidth);
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, [requiredWidth]);

  const dark = theme !== "light";
  const titleParts = titleAccent && title?.includes(titleAccent)
    ? title.split(titleAccent)
    : null;

  const neutralEndpoints = NEUTRAL_RAMP[dark ? "dark" : "light"];
  const segmentCount = Math.max(...columns.map((c) => c.segments.length), segmentLabels.length, 1);
  const neutralRamp = makeRamp(neutralEndpoints, segmentCount);
  const orangeRamp = makeRamp(ORANGE_RAMP, segmentCount);

  const totals = columns.map((c) => c.total ?? c.segments.reduce((s, seg) => s + seg.value, 0));
  const maxTotal = Math.max(...totals, 1);
  // Same cream-vs-white distinction as the other "detailed comparison"
  // chart types (HorizontalBarChart, PieChart, ScatterChart) — only
  // BarChart's Price-Performance hero spec uses plain white.
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
            margin: "0 0 4px",
            fontWeight: 500,
            fontSize: 20,
            lineHeight: 1.3,
            letterSpacing: "-0.02em",
            color: "var(--graph-fg)",
          }}
        >
          {titleParts ? (
            <>
              {titleParts[0]}
              <span style={{ color: "var(--orange)" }}>{titleAccent}</span>
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
            margin: "2px 0 24px",
            fontFamily: "var(--font-mono)",
            fontWeight: 600,
            fontSize: 12,
            letterSpacing: "0.02em",
            color: "var(--graph-fg-secondary)",
          }}
        >
          {subtitle}
        </p>
      ) : null}

      {segmentLabels.length ? (
        <div style={{ display: "flex", gap: 16, alignItems: "center", flexWrap: "wrap", marginBottom: 28 }}>
          {segmentLabels.map((label, i) => (
            <div key={label} style={{ display: "flex", gap: 6, alignItems: "center" }}>
              <div style={{ width: 10, height: 10, borderRadius: "50%", flexShrink: 0, background: orangeRamp[i] }} />
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontWeight: 600,
                  fontSize: 12,
                  color: "var(--graph-fg)",
                }}
              >
                {label}
              </span>
            </div>
          ))}
        </div>
      ) : null}

      <div ref={scrollWrapRef} style={{ overflowX: needsScroll ? "auto" : "visible" }}>
        <div style={{ minWidth: needsScroll ? requiredWidth : undefined }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", height, gap: 4 }}>
            {columns.map((col, ci) => {
              const dimmed = hovered !== null && hovered !== ci;
              const total = totals[ci];
              const ramp = col.competitor ? neutralRamp : orangeRamp;
              const barHeight = (total / maxTotal) * height;
              return (
                <div
                  key={col.label ?? ci}
                  onMouseEnter={() => setHovered(ci)}
                  onMouseLeave={() => setHovered(null)}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    flex: "1 1 0",
                    minWidth: 0,
                    maxWidth: barMaxWidth,
                    height: "100%",
                    justifyContent: "flex-end",
                    gap: 8,
                    opacity: mounted ? (dimmed ? 0.4 : 1) : 0,
                    transform: mounted ? "translateY(0)" : "translateY(8px)",
                    transition: `opacity 0.4s var(--ease-out) ${ci * 60}ms, transform 0.4s var(--ease-out) ${ci * 60}ms`,
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontWeight: 700,
                      fontSize: 13,
                      color: "var(--graph-fg)",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {col.totalDisplay ?? `$${total.toFixed(2)}`}
                  </span>
                  <div
                    style={{
                      width: "100%",
                      height: barHeight,
                      display: "flex",
                      flexDirection: "column",
                      borderRadius: "var(--radius-sm) var(--radius-sm) 0 0",
                      overflow: "hidden",
                      transformOrigin: "bottom center",
                      transform: mounted ? "scaleY(1)" : "scaleY(0)",
                      transition: `transform 0.65s var(--ease-out) ${ci * 60}ms`,
                    }}
                  >
                    {col.segments.map((seg, si) =>
                      seg.value > 0 ? (
                        <div
                          key={si}
                          style={{
                            // A pixel height computed here, not a raw
                            // flex-grow ratio — dollar-scale values like
                            // 0.07/0.09 as flex-grow hit a real browser
                            // sizing quirk (verified: segments rendered
                            // at roughly value× their intended height,
                            // leaving the shortfall as blank space
                            // stacked at the bar's own bottom edge,
                            // exactly where it reads as "misaligned").
                            height: (seg.value / total) * barHeight,
                            flexShrink: 0,
                            background: ramp[si],
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            overflow: "hidden",
                          }}
                        >
                          <span
                            style={{
                              fontFamily: "var(--font-mono)",
                              fontWeight: 600,
                              fontSize: 11,
                              color: si < ramp.length / 2 ? "var(--white)" : "var(--ink)",
                              whiteSpace: "nowrap",
                            }}
                          >
                            {seg.display ?? `$${seg.value.toFixed(2)}`}
                          </span>
                        </div>
                      ) : null
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          <div
            style={{
              height: 1,
              background: "var(--graph-border)",
              margin: "12px 0 12px",
            }}
          />
          <div style={{ display: "flex", justifyContent: "space-between", gap: 4 }}>
            {columns.map((col, ci) => (
              <span
                key={col.label ?? ci}
                style={{
                  flex: "1 1 0",
                  minWidth: 0,
                  maxWidth: barMaxWidth,
                  textAlign: "center",
                  fontWeight: 600,
                  fontSize: 12,
                  lineHeight: 1.3,
                  letterSpacing: "-0.01em",
                  whiteSpace: "pre-line",
                  color: dark ? "var(--paper)" : "var(--grey-800)",
                }}
              >
                {col.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
