import React from "react";

/**
 * HorizontalBarChart — ranked list format ("Mistral Le Chat is the world's
 * fastest AI assistant"). By default a row flagged `cerebras: true` paints
 * with the theme's Cerebras fill and everything else recedes into the
 * competitor fill — but any row can set an explicit `fill` to override
 * that. A chart can be monochrome (every row the same color), two-tone
 * (the default), or use a distinct color per row (e.g. the multi-level
 * ramp tokens `--graph-level-1/2/3`) — the dataset decides, not the
 * component. See the `Monochrome` and `MultiLevel` stories.
 *
 * Reads only the --graph-* tokens from tokens/charts.css, same as
 * BarChart — switching `theme` is the only thing needed to restyle it.
 */
export function HorizontalBarChart({
  theme = "light",
  title,
  titleAccent,
  subtitle,
  rows = [],
  /** Row track height in px. @default 57 */
  rowHeight = 57,
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
  const maxValue = Math.max(1, ...rows.map((r) => r.value));
  // This chart type's own Figma spec uses the cream card, not the plain
  // white BarChart's Price-Performance spec uses — light-card background
  // varies by chart type/context per DESIGN.md, it isn't one fixed value.
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
            margin: subtitle ? "0 0 4px" : "0 0 20px",
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
            margin: "2px 0 32px",
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

      <div style={{ display: "flex", flexDirection: "column", gap: 1, position: "relative" }}>
        {/* Vertical separator between labels and bars — one hairline for
            the whole chart, never a per-row border-right. */}
        <div
          style={{
            position: "absolute",
            left: 144,
            top: 0,
            bottom: 0,
            width: 1,
            background: "var(--graph-border)",
            pointerEvents: "none",
          }}
        />
        {rows.map((row, i) => {
          const dimmed = hovered !== null && hovered !== i;
          const widthPct = (row.value / maxValue) * 100;
          return (
            <div
              key={row.label ?? i}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              style={{
                display: "flex",
                alignItems: "center",
                // No gap here — the divider sits exactly at the label
                // column's own right edge (144px, padding included) and
                // the bar starts flush against it. An extra row-level gap
                // was quietly adding 12px of unwanted space between the
                // divider and the bar that the source spec doesn't have.
                gap: 0,
                opacity: mounted ? 1 : 0,
                transform: mounted ? "translateX(0)" : "translateX(-8px)",
                filter: dimmed ? "grayscale(0.7) opacity(0.5)" : "none",
                transition: "opacity 0.4s var(--ease-out), transform 0.4s var(--ease-out), filter 0.2s ease",
                transitionDelay: `${120 + i * 80}ms, ${120 + i * 80}ms, 0ms`,
              }}
            >
              <span
                style={{
                  width: 144,
                  flexShrink: 0,
                  boxSizing: "border-box",
                  textAlign: "right",
                  padding: "12px",
                  fontWeight: 700,
                  fontSize: 12,
                  lineHeight: 1.3,
                  letterSpacing: "-0.01em",
                  color: "var(--graph-fg)",
                }}
              >
                {row.label}
              </span>
              <div style={{ display: "flex", alignItems: "center", gap: 12, flex: 1, minWidth: 0 }}>
                <div
                  style={{
                    height: rowHeight,
                    width: `${widthPct}%`,
                    minWidth: 4,
                    background: row.fill ?? (row.cerebras ? "var(--graph-cerebras-fill-h)" : "var(--graph-competitor-fill-h)"),
                    borderRadius: "0 var(--radius-sm) var(--radius-sm) 0",
                    transformOrigin: "left center",
                    transform: mounted ? "scaleX(1)" : "scaleX(0)",
                    transition: "transform 0.65s var(--ease-out)",
                    transitionDelay: `${120 + i * 80}ms`,
                  }}
                />
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontWeight: 600,
                    fontSize: 13,
                    letterSpacing: "0.02em",
                    textTransform: "uppercase",
                    whiteSpace: "nowrap",
                    color: "var(--graph-fg)",
                    opacity: mounted ? 1 : 0,
                    transition: "opacity 0.3s ease",
                    transitionDelay: `${120 + i * 80 + 400}ms`,
                  }}
                >
                  {row.display ?? row.value}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
