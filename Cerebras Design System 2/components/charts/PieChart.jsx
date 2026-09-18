import React from "react";

const R = 100;
const STROKE = 60;
const CIRCUMFERENCE = 2 * Math.PI * R;
const GAP = 4;
const LABEL_RADIUS = R + STROKE / 2 + 25;
// Canvas is much wider than the donut itself — labels extend outward from
// LABEL_RADIUS and need room for their own text width, not just the ring.
const CX = 260;
const CY = 190;

/**
 * PieChart — donut chart ("AI Inference Market Share"). Any number of
 * segments; by default the first segment (or one flagged `cerebras: true`)
 * paints flat brand orange and the rest cycle through the multi-level
 * ramp tokens (`--graph-level-1/2/3`, repeating if there are more than
 * three). Any segment can set its own `fill` to override that entirely —
 * a chart can be two-tone or fully custom-colored per segment.
 *
 * Donut math: circumference = 2πr (r=100). Each segment's arc length is
 * its share of the circle minus a small gap; dashoffset walks the
 * previous segments' full (gap-free) share so segments sit flush.
 * Label positions are computed from each segment's midpoint angle, not
 * hardcoded per-index, so this works for 2 segments or 12.
 *
 * Reads only the --graph-* tokens from tokens/charts.css, same as the
 * other chart types — switching `theme` restyles background and text.
 * The Cerebras slice is always flat orange (never the gradient token) —
 * a linear gradient reads oddly wrapped around a curved arc.
 */
export function PieChart({
  theme = "light",
  title,
  titleAccent,
  segments = [],
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
  // Same cream-vs-white distinction as HorizontalBarChart — this chart
  // type's own Figma spec uses the cream card in light mode.
  const bg = theme === "light" ? "var(--paper-50)" : "var(--graph-bg)";

  const total = Math.max(1, segments.reduce((sum, s) => sum + s.value, 0));
  const rampTokens = ["var(--graph-level-3)", "var(--graph-level-2)", "var(--graph-level-1)"];
  let rampIndex = 0;
  let cumulative = 0;

  const arcs = segments.map((seg, i) => {
    const fraction = seg.value / total;
    const fullArc = fraction * CIRCUMFERENCE;
    const dashLen = Math.max(0, fullArc - GAP);
    const dashOffset = CIRCUMFERENCE / 4 - cumulative;
    const midAngle = ((cumulative + fullArc / 2) / CIRCUMFERENCE) * 2 * Math.PI;
    cumulative += fullArc;

    let fill = seg.fill;
    if (!fill) {
      if (seg.cerebras ?? i === 0) {
        fill = "var(--orange)";
      } else {
        fill = rampTokens[rampIndex % rampTokens.length];
        rampIndex += 1;
      }
    }

    const lx = CX + LABEL_RADIUS * Math.sin(midAngle);
    const ly = CY - LABEL_RADIUS * Math.cos(midAngle);
    const anchor = Math.sin(midAngle) > 0.15 ? "start" : Math.sin(midAngle) < -0.15 ? "end" : "middle";

    return { ...seg, i, fill, dashLen, dashOffset, lx, ly, anchor };
  });

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
            margin: "0 0 20px",
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

      <div style={{ display: "flex", justifyContent: "center" }}>
        {/* No height attribute — viewBox drives intrinsic aspect ratio. */}
        <svg viewBox="0 0 640 380" style={{ width: "100%", maxWidth: 640 }}>
          {arcs.map((arc) => (
            <circle
              key={arc.label ?? arc.i}
              cx={CX}
              cy={CY}
              r={R}
              fill="none"
              stroke={arc.fill}
              strokeWidth={STROKE}
              strokeDasharray={mounted ? `${arc.dashLen} ${CIRCUMFERENCE - arc.dashLen}` : `0 ${CIRCUMFERENCE}`}
              strokeDashoffset={arc.dashOffset}
              onMouseEnter={() => setHovered(arc.i)}
              onMouseLeave={() => setHovered(null)}
              style={{
                opacity: hovered !== null && hovered !== arc.i ? 0.35 : 1,
                transformBox: "fill-box",
                transformOrigin: "center",
                transform: hovered === arc.i ? "scale(1.02)" : "scale(1)",
                cursor: "pointer",
                transition: `stroke-dasharray 0.65s var(--ease-out) ${arc.i * 80}ms, opacity 0.2s ease, transform 0.2s ease`,
              }}
            />
          ))}
          <circle cx={CX} cy={CY} r={R - STROKE / 2} fill={bg} />
          {arcs.map((arc) => (
            <text
              key={`label-${arc.label ?? arc.i}`}
              x={arc.lx}
              y={arc.ly}
              textAnchor={arc.anchor}
              dominantBaseline="middle"
              fontFamily="var(--font-sans)"
              fontSize="13"
              fontWeight="500"
              fill="var(--graph-fg)"
              style={{
                opacity: mounted ? (hovered !== null && hovered !== arc.i ? 0.35 : 1) : 0,
                transition: `opacity 0.3s ease ${arc.i * 80 + 300}ms`,
              }}
            >
              {arc.label}
            </text>
          ))}
        </svg>
      </div>
    </div>
  );
}
