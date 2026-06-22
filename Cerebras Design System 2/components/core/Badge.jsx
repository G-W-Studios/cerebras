import React from "react";

/**
 * Badge — small count/status indicator. tone: orange | dark | green | neutral.
 */
export function Badge({ tone = "orange", children, style, ...rest }) {
  const tones = {
    orange:  { bg: "var(--orange)", fg: "var(--ink)" },
    dark:    { bg: "var(--ink)", fg: "var(--white)" },
    green:   { bg: "var(--green)", fg: "var(--ink)" },
    neutral: { bg: "var(--grey-200)", fg: "var(--grey-700)" },
  }[tone];
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        minWidth: "20px",
        height: "20px",
        padding: "0 6px",
        borderRadius: "var(--radius-xs)",
        background: tones.bg,
        color: tones.fg,
        fontFamily: "var(--font-mono)",
        fontWeight: "var(--fw-semibold)",
        fontSize: "11px",
        lineHeight: 1,
        letterSpacing: "var(--ls-mono)",
        ...style,
      }}
      {...rest}
    >
      {children}
    </span>
  );
}
