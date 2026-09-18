import React from "react";

/**
 * BarChart — vertical grouped bar chart, the primary format for model
 * comparisons (tokens/sec, coding ability, cost, ...). The Cerebras series
 * always reads first/tallest; the second series recedes into the
 * competitor treatment defined by the active theme.
 *
 * Reads only the --graph-* tokens from tokens/charts.css, so switching
 * `theme` is the only thing needed to restyle background, the Cerebras
 * fill (gradient vs. flat orange) and the competitor fill. Any category
 * can override its own bar color via `cerebrasFill`/`competitorFill` —
 * a chart can be monochrome, two-tone (the default), or a distinct color
 * per bar; the dataset decides, the component doesn't force a palette.
 */
export function BarChart({
  theme = "dark-gradient",
  title,
  titleAccent,
  subtitle,
  cerebrasLabel = "Cerebras",
  competitorLabel = "Competitor",
  categories = [],
  height = 260,
  /** Bars never grow past this, however few categories there are. */
  barMaxWidth = 60,
  /**
   * Floor width (per category, including its own bars + gap) before the
   * chart switches from "shrink bars to fit" to "scroll horizontally".
   * This is what makes 3 categories and 30 categories both legible —
   * past this density we stop squeezing bars into illegibility.
   */
  minCategoryWidth = 56,
  /**
   * Show the Cerebras/competitor legend. Defaults to hidden automatically
   * when any category has a `logo` — each bar is already self-identified
   * by its own logo + label, so the legend is redundant clutter in a
   * ranked provider-comparison chart. Pass `true`/`false` to override.
   */
  showLegend,
  style,
  ...rest
}) {
  const [mounted, setMounted] = React.useState(false);
  const [hovered, setHovered] = React.useState(null);
  React.useEffect(() => {
    const id = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(id);
  }, []);

  // Whether the plot area needs to scroll is measured once (and on real
  // resize) via ResizeObserver, not left to the browser's live "overflow:
  // auto" — that recomputes continuously, and during the entrance
  // animation (opacity/transform only, no layout change) it was flashing
  // a scrollbar in and out as it re-evaluated borderline widths mid-
  // transition. A one-shot measured boolean is stable through the animation.
  const scrollWrapRef = React.useRef(null);
  const [needsScroll, setNeedsScroll] = React.useState(false);
  const requiredWidth = categories.length * minCategoryWidth;
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
  // Competitor series is optional — a chart can be Cerebras-only (single
  // orange/gradient bar per category), or a per-category mix of both.
  const hasCompetitor = categories.some((c) => c.competitorValue != null);
  const hasLogos = categories.some((c) => c.logo != null);
  const resolvedShowLegend = showLegend ?? !hasLogos;

  return (
    <div
      data-graph-theme={theme}
      style={{
        background: "var(--graph-bg)",
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

      {resolvedShowLegend ? (
        <div style={{ display: "flex", gap: 20, alignItems: "center", flexWrap: "wrap", marginBottom: 32 }}>
          <Legend swatch="var(--graph-cerebras-fill)" label={cerebrasLabel} fg="var(--graph-fg)" />
          {hasCompetitor ? (
            <Legend swatch="var(--graph-competitor-fill)" label={competitorLabel} fg="var(--graph-fg)" />
          ) : null}
        </div>
      ) : null}

      {/* Scrolls horizontally once categories no longer fit at minCategoryWidth
          each — bars shrink to fill available space above that density,
          they never get squeezed thinner than what's still legible.
          needsScroll is measured once via ResizeObserver (see above), not
          left to the browser's live "overflow: auto" evaluation. */}
      <div ref={scrollWrapRef} style={{ overflowX: needsScroll ? "auto" : "visible" }}>
        <div style={{ minWidth: needsScroll ? requiredWidth : undefined }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", height }}>
            {categories.map((cat, i) => {
              const dimmed = hovered !== null && hovered !== i;
              const showCompetitorBar = cat.competitorValue != null;
              // Each category is scaled against its own max, not a shared one —
              // categories commonly mix incompatible units (score, tok/s, $).
              const catMax = Math.max(1, cat.cerebrasValue, cat.competitorValue ?? 0);
              const cerebrasH = (cat.cerebrasValue / catMax) * height;
              const competitorH = showCompetitorBar ? (cat.competitorValue / catMax) * height : 0;
              return (
                <div
                  key={cat.label ?? i}
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                  style={{
                    display: "flex",
                    gap: 6,
                    alignItems: "flex-end",
                    flex: 1,
                    minWidth: 0,
                    justifyContent: "center",
                    opacity: mounted ? 1 : 0,
                    transform: mounted ? "translateY(0)" : "translateY(8px)",
                    // Hover-dim uses grayscale + filter-opacity, NOT plain
                    // opacity: fading a saturated orange toward a light-
                    // theme's white card blends to a garish pale pink, not
                    // a "muted" look. Desaturating first keeps the dim
                    // neutral on any theme background.
                    filter: dimmed ? "grayscale(0.7) opacity(0.45)" : "none",
                    transition: `opacity 0.4s var(--ease-out), transform 0.4s var(--ease-out), filter 0.2s ease`,
                    transitionDelay: `${150 + i * 80}ms, ${150 + i * 80}ms, 0ms`,
                  }}
                >
                  <Bar
                    value={cat.cerebrasDisplay ?? cat.cerebrasValue}
                    heightPx={cerebrasH}
                    fill={cat.cerebrasFill ?? "var(--graph-cerebras-fill)"}
                    fg="var(--graph-fg)"
                    mounted={mounted}
                    delayMs={150 + i * 80}
                    maxWidth={barMaxWidth}
                  />
                  {showCompetitorBar ? (
                    <Bar
                      value={cat.competitorDisplay ?? cat.competitorValue}
                      heightPx={competitorH}
                      fill={cat.competitorFill ?? "var(--graph-competitor-fill)"}
                      fg="var(--graph-fg)"
                      mounted={mounted}
                      delayMs={150 + i * 80}
                      maxWidth={barMaxWidth}
                    />
                  ) : null}
                </div>
              );
            })}
          </div>

          <div
            style={{
              height: 1,
              background: "var(--graph-border)",
              margin: "0 0 14px",
              opacity: mounted ? 1 : 0,
              transition: "opacity 0.4s ease",
              transitionDelay: "1200ms",
            }}
          />
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            {categories.map((cat, i) => (
              <div
                key={cat.label ?? i}
                style={{
                  flex: 1,
                  minWidth: 0,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 8,
                  opacity: mounted ? 1 : 0,
                  transform: mounted ? "translateY(0)" : "translateY(4px)",
                  transition: "opacity 0.4s ease, transform 0.4s ease",
                  transitionDelay: "1280ms",
                }}
              >
                {cat.logo ? <CategoryLogo logo={cat.logo} /> : null}
                <span
                  style={{
                    textAlign: "center",
                    fontWeight: 600,
                    fontSize: 13,
                    lineHeight: 1.3,
                    letterSpacing: "-0.01em",
                    whiteSpace: "pre-line",
                    color: dark ? "var(--paper)" : "var(--grey-800)",
                  }}
                >
                  {cat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * Renders a category's `logo` — a URL string, or an actual uploaded
 * `File`/`Blob` (e.g. straight from an `<input type="file">` in the
 * consuming app). File/Blob is converted to an object URL and the URL is
 * revoked on unmount/change so it doesn't leak memory.
 */
function CategoryLogo({ logo }) {
  const isBlob = typeof File !== "undefined" && (logo instanceof File || logo instanceof Blob);
  const [objectUrl, setObjectUrl] = React.useState(null);

  React.useEffect(() => {
    if (!isBlob) return undefined;
    const url = URL.createObjectURL(logo);
    setObjectUrl(url);
    return () => URL.revokeObjectURL(url);
  }, [logo, isBlob]);

  const src = isBlob ? objectUrl : logo;
  if (!src) return null;

  return (
    <img
      src={src}
      alt=""
      style={{
        width: 24,
        height: 24,
        objectFit: "contain",
        borderRadius: "var(--radius-xs)",
      }}
    />
  );
}

function Legend({ swatch, label, fg }) {
  return (
    <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
      <div style={{ width: 12, height: 12, borderRadius: 3, flexShrink: 0, background: swatch }} />
      <span
        style={{
          fontFamily: "var(--font-mono)",
          fontWeight: 600,
          fontSize: 12,
          letterSpacing: "0.02em",
          textTransform: "uppercase",
          color: fg,
        }}
      >
        {label}
      </span>
    </div>
  );
}

function Bar({ value, heightPx, fill, fg, mounted, delayMs, maxWidth }) {
  const [barHover, setBarHover] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setBarHover(true)}
      onMouseLeave={() => setBarHover(false)}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 6,
        flex: "1 1 0",
        minWidth: 0,
        maxWidth,
      }}
    >
      <span
        style={{
          fontFamily: "var(--font-mono)",
          fontWeight: 600,
          fontSize: 12,
          letterSpacing: "0.02em",
          textTransform: "uppercase",
          whiteSpace: "nowrap",
          color: fg,
          opacity: mounted ? 1 : 0,
          transform: mounted ? "translateY(0)" : "translateY(4px)",
          transition: "opacity 0.3s ease, transform 0.3s ease",
          transitionDelay: `${delayMs + 500}ms`,
        }}
      >
        {value}
      </span>
      <div
        style={{
          width: "100%",
          height: heightPx,
          background: fill,
          borderRadius: "var(--radius-sm) var(--radius-sm) 0 0",
          transformOrigin: "bottom center",
          transform: mounted ? "scaleY(1)" : "scaleY(0)",
          filter: barHover ? "brightness(1.15)" : "none",
          transition: `transform 0.65s var(--ease-out), filter 0.2s ease`,
          transitionDelay: `${delayMs}ms`,
        }}
      />
    </div>
  );
}
