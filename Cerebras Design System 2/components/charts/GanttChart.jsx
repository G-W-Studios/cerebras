import React from "react";

const ORANGE = "#F15A29";

function hexToRgb(hex) {
  const n = parseInt(hex.replace("#", ""), 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
}
function mix(hexA, hexB, t) {
  const a = hexToRgb(hexA);
  const b = hexToRgb(hexB);
  const rgb = a.map((v, i) => Math.round(v + (b[i] - v) * t));
  // Returned as hex, not `rgb(...)` — makeRamp below feeds this straight
  // back into hexToRgb as one of the ramp's own endpoints.
  return `#${rgb.map((v) => v.toString(16).padStart(2, "0")).join("")}`;
}
/** N evenly-spaced colors from `light` (index 0) to `dark`/full-strength (last index). */
function makeRamp(lightColor, darkHex, count) {
  if (count <= 1) return [darkHex];
  return Array.from({ length: count }, (_, i) => mix(lightColor, darkHex, i / (count - 1)));
}

/** "Nice" tick step (1/2/5/10 ×10^n) so a chart never ends up with an odd interval like every 3.7 units. */
function niceStep(maxValue, targetTicks = 7) {
  if (maxValue <= 0) return 1;
  const roughStep = maxValue / targetTicks;
  const magnitude = 10 ** Math.floor(Math.log10(roughStep));
  const norm = roughStep / magnitude;
  const niceNorm = norm <= 1 ? 1 : norm <= 2 ? 2 : norm <= 5 ? 5 : 10;
  return niceNorm * magnitude;
}

// Sometype Mono is monospaced, so a per-character estimate is actually
// accurate here (unlike for the sans-serif labels elsewhere) — this
// decides whether a task's own label fits inside its bar or needs to
// spill outside it, without needing to measure real text metrics.
function estimateLabelWidth(text, fontSize) {
  return text.length * fontSize * 0.62 + 16;
}

/**
 * GanttChart — cascading process-timeline format (e.g. "Discovery → Define
 * → Ideate → Prototyping" over a week/day axis). Built from a screenshot
 * reference, not a Figma spec, so the reference's own styling (ad hoc
 * per-phase hues, inconsistent tick pluralization) is replaced with this
 * library's conventions rather than copied.
 *
 * Any number of phase `groups`, each with any number of `rows`, each row
 * holding any number of non-overlapping tasks — the time axis domain and
 * tick step are always computed from the data, never fixed to one demo's
 * range. A group's tasks default to a step along the brand orange ramp
 * (lighter for earlier phases, full-strength orange for the last one) —
 * every group can still override its own `color`, and every task can
 * override its own `color`/`textColor`, or opt into a neutral "meta" chip
 * style for a bookend marker that isn't itself a working phase (see the
 * `tone: "meta"` task option).
 *
 * Reads only the --graph-* tokens from tokens/charts.css.
 */
export function GanttChart({
  theme = "light",
  title,
  titleAccent,
  subtitle,
  unit = "week",
  groups = [],
  rowHeight = 40,
  rowGap = 8,
  groupGap = 20,
  labelColWidth = 130,
  style,
  ...rest
}) {
  const [mounted, setMounted] = React.useState(false);
  const [hovered, setHovered] = React.useState(null);
  React.useEffect(() => {
    const id = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(id);
  }, []);

  const plotRef = React.useRef(null);
  const [plotWidth, setPlotWidth] = React.useState(0);
  React.useLayoutEffect(() => {
    const el = plotRef.current;
    if (!el) return undefined;
    const measure = () => setPlotWidth(el.clientWidth);
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const dark = theme !== "light";
  const titleParts = titleAccent && title?.includes(titleAccent)
    ? title.split(titleAccent)
    : null;
  // Same cream-vs-white distinction as the other "detailed process/
  // breakdown" chart types (HorizontalBarChart, PieChart, ScatterChart,
  // StackedColumnChart).
  const bg = theme === "light" ? "var(--paper-50)" : "var(--graph-bg)";
  const metaFill = dark ? "rgba(255,255,255,0.08)" : "rgba(26,26,26,0.06)";

  const rampLight = mix(ORANGE, dark ? "#1A1A1A" : "#FFFFFF", dark ? 0.55 : 0.78);
  const ramp = makeRamp(rampLight, ORANGE, Math.max(groups.length, 1));

  const allTasks = groups.flatMap((g) => g.rows.flatMap((row) => row));
  const domainMax = Math.max(...allTasks.map((t) => t.end), 1);
  const step = niceStep(domainMax);
  const ticks = [];
  for (let t = 0; t <= domainMax + 0.0001; t += step) ticks.push(Number(t.toFixed(2)));

  let globalIndex = -1;

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
            margin: subtitle ? "0 0 4px" : "0 0 28px",
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
            margin: "2px 0 28px",
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

      <div style={{ display: "flex" }}>
        <div style={{ width: labelColWidth, flexShrink: 0 }}>
          {groups.map((g, gi) => (
            <div
              key={g.label ?? gi}
              style={{
                height: g.rows.length * rowHeight + (g.rows.length - 1) * rowGap,
                marginBottom: gi === groups.length - 1 ? 0 : groupGap,
                display: "flex",
                alignItems: "center",
                opacity: mounted ? 1 : 0,
                transition: `opacity 0.4s ease ${gi * 60}ms`,
              }}
            >
              <span style={{ fontWeight: 700, fontSize: 12, letterSpacing: "-0.01em", color: "var(--graph-fg)" }}>
                {g.label}
              </span>
            </div>
          ))}
        </div>

        <div ref={plotRef} style={{ flex: 1, minWidth: 0, position: "relative" }}>
          {ticks.map((t) => (
            <div
              key={t}
              style={{
                position: "absolute",
                left: `${(t / domainMax) * 100}%`,
                top: 0,
                bottom: 0,
                width: 1,
                background: "var(--graph-border)",
                pointerEvents: "none",
              }}
            />
          ))}

          {groups.map((g, gi) => {
            const groupColor = g.color ?? ramp[gi];
            // The lighter half of the ramp needs dark text to stay
            // legible; the darker/full-orange half needs white — same
            // rule StackedColumnChart uses for its own auto-ramp text.
            const defaultTextColor = gi >= Math.ceil(ramp.length / 2) ? "var(--white)" : "var(--ink)";
            return (
              <div key={g.label ?? gi} style={{ marginBottom: gi === groups.length - 1 ? 0 : groupGap }}>
                {g.rows.map((row, ri) => (
                  <div
                    key={ri}
                    style={{
                      height: rowHeight,
                      position: "relative",
                      marginBottom: ri === g.rows.length - 1 ? 0 : rowGap,
                    }}
                  >
                    {row.map((task, ti) => {
                      globalIndex += 1;
                      const idx = globalIndex;
                      const dimmed = hovered !== null && hovered !== idx;
                      const isMeta = task.tone === "meta";
                      const leftPct = (task.start / domainMax) * 100;
                      const widthPct = ((task.end - task.start) / domainMax) * 100;
                      const pxWidth = (widthPct / 100) * plotWidth;
                      const fill = isMeta ? metaFill : task.color ?? groupColor;
                      const textColor = task.textColor ?? (isMeta ? "var(--graph-fg)" : defaultTextColor);
                      const fits = plotWidth === 0 || estimateLabelWidth(task.label ?? "", 11) < pxWidth - 16;
                      const delay = idx * 45;
                      // An outside-spilled label needs a hard stop before
                      // the next task in the same row (or the previous
                      // one, if it spills left instead) — otherwise two
                      // closely-spaced tasks paint their labels on top of
                      // each other. Cap its width to the real gap and
                      // ellipsize rather than run into the neighboring bar.
                      const prevTask = row[ti - 1];
                      const nextTask = row[ti + 1];
                      const endPct = leftPct + widthPct;
                      const availableEndPct = nextTask ? (nextTask.start / domainMax) * 100 : 100;
                      const availableStartPct = prevTask ? (prevTask.end / domainMax) * 100 : 0;
                      const rightSpacePct = availableEndPct - endPct;
                      const leftSpacePct = leftPct - availableStartPct;
                      // A task can end right at the domain's edge (e.g. a
                      // trailing bookend marker) and have nowhere to spill
                      // right at all — fall back to the side with more
                      // room instead of always defaulting to the right.
                      const spillLeft = leftSpacePct > rightSpacePct;
                      const outsideMaxWidth = plotWidth
                        ? Math.max(((spillLeft ? leftSpacePct : rightSpacePct) / 100) * plotWidth - 8, 16)
                        : undefined;
                      return (
                        <React.Fragment key={task.label ?? ti}>
                          <div
                            title={`${task.label} — ${task.start}–${task.end} ${unit}${task.end === 1 ? "" : "s"}`}
                            onMouseEnter={() => setHovered(idx)}
                            onMouseLeave={() => setHovered(null)}
                            style={{
                              position: "absolute",
                              left: `${leftPct}%`,
                              width: `${widthPct}%`,
                              minWidth: 4,
                              height: "100%",
                              boxSizing: "border-box",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              borderRadius: "var(--radius-sm)",
                              background: fill,
                              cursor: "pointer",
                              opacity: mounted ? (dimmed ? 0.4 : 1) : 0,
                              transformOrigin: "left center",
                              transform: mounted ? "scaleX(1)" : "scaleX(0)",
                              transition: `transform 0.5s var(--ease-out) ${delay}ms, opacity 0.3s ease ${delay}ms`,
                            }}
                          >
                            {fits ? (
                              <span
                                style={{
                                  fontFamily: "var(--font-mono)",
                                  fontWeight: 600,
                                  fontSize: 11,
                                  letterSpacing: "0.02em",
                                  color: textColor,
                                  whiteSpace: "nowrap",
                                  overflow: "hidden",
                                  textOverflow: "ellipsis",
                                  padding: "0 8px",
                                }}
                              >
                                {task.label}
                              </span>
                            ) : null}
                          </div>
                          {!fits ? (
                            <span
                              style={{
                                position: "absolute",
                                ...(spillLeft
                                  ? { right: `calc(${100 - leftPct}% + 8px)`, textAlign: "right" }
                                  : { left: `calc(${endPct}% + 8px)` }),
                                top: "50%",
                                transform: "translateY(-50%)",
                                zIndex: 1,
                                maxWidth: outsideMaxWidth,
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                                fontFamily: "var(--font-mono)",
                                fontWeight: 600,
                                fontSize: 11,
                                color: "var(--graph-fg)",
                                whiteSpace: "nowrap",
                                opacity: mounted ? (dimmed ? 0.4 : 1) : 0,
                                transition: `opacity 0.3s ease ${delay + 250}ms`,
                              }}
                            >
                              {task.label}
                            </span>
                          ) : null}
                        </React.Fragment>
                      );
                    })}
                  </div>
                ))}
              </div>
            );
          })}
        </div>
      </div>

      <div style={{ position: "relative", height: 16, marginTop: 12, marginLeft: labelColWidth }}>
        {ticks.map((t) => (
          <span
            key={t}
            style={{
              position: "absolute",
              left: `${(t / domainMax) * 100}%`,
              transform: "translateX(-50%)",
              fontFamily: "var(--font-mono)",
              fontWeight: 600,
              fontSize: 12,
              color: "var(--graph-fg-secondary)",
              whiteSpace: "nowrap",
            }}
          >
            {t} {unit}
            {t === 1 ? "" : "s"}
          </span>
        ))}
      </div>
    </div>
  );
}
