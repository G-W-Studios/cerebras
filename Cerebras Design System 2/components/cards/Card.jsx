import React from "react";

/**
 * Card — the base surface container. Sharp 2px corners, hairline border.
 * tone: light (white) | cream | dark (ink) | darker (black).
 */
export function Card({ tone = "light", interactive = false, padding = 24, children, style, ...rest }) {
  const tones = {
    light:  { bg: "var(--white)", fg: "var(--ink)", bd: "var(--border)" },
    cream:  { bg: "var(--paper)", fg: "var(--ink)", bd: "transparent" },
    dark:   { bg: "var(--ink)", fg: "var(--white)", bd: "transparent" },
    darker: { bg: "var(--black)", fg: "var(--white)", bd: "transparent" },
  }[tone];
  const [hover, setHover] = React.useState(false);
  return (
    <div
      onMouseEnter={() => interactive && setHover(true)}
      onMouseLeave={() => interactive && setHover(false)}
      style={{
        background: tones.bg,
        color: tones.fg,
        border: `1px solid ${tones.bd}`,
        borderRadius: "var(--radius-xs)",
        padding,
        boxSizing: "border-box",
        transition: "transform var(--dur) var(--ease-out), box-shadow var(--dur) var(--ease-out)",
        transform: hover ? "translateY(-2px)" : "none",
        boxShadow: hover ? "var(--shadow-md)" : "none",
        cursor: interactive ? "pointer" : "default",
        ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  );
}
