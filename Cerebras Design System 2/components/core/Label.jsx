import React from "react";

/**
 * Category Label — the small mono tag used on cards and articles.
 * Each editorial category has a fixed color from the Cerebras palette.
 */
const CATEGORY = {
  blog:          { bg: "#FF985D", fg: "var(--ink)" },
  news:          { bg: "var(--purple-300)", fg: "var(--white)" },
  "press-release": { bg: "var(--teal-300)", fg: "var(--ink)" },
  event:         { bg: "#A2E930", fg: "var(--ink)" },
  whitepaper:    { bg: "var(--ink)", fg: "var(--white)" },
  publication:   { bg: "var(--ink)", fg: "var(--white)" },
  spotlight:     { bg: "var(--ink)", fg: "var(--white)" },
  techtalk:      { bg: "var(--ink)", fg: "var(--white)" },
  award:         { bg: "var(--ink)", fg: "var(--white)" },
  default:       { bg: "var(--paper)", fg: "var(--ink)" },
};

export function Label({ category = "default", children, style, ...rest }) {
  const c = CATEGORY[category] || CATEGORY.default;
  const text = children ?? category.replace("-", " ");
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        padding: "6px 7px",
        borderRadius: "var(--radius-xs)",
        background: c.bg,
        color: c.fg,
        fontFamily: "var(--font-mono)",
        fontWeight: "var(--fw-semibold)",
        fontSize: "var(--fs-label)",
        lineHeight: 1,
        letterSpacing: "var(--ls-mono)",
        textTransform: "uppercase",
        whiteSpace: "nowrap",
        ...style,
      }}
      {...rest}
    >
      {text}
    </span>
  );
}

/**
 * Generic Tag — neutral mono pill for metadata (read time, model names, etc).
 * `tone`: neutral | dark | orange | outline.
 */
export function Tag({ tone = "neutral", children, style, ...rest }) {
  const tones = {
    neutral: { bg: "var(--grey-100)", fg: "var(--grey-600)", bd: "transparent" },
    dark:    { bg: "var(--ink)", fg: "var(--white)", bd: "transparent" },
    orange:  { bg: "var(--orange-100)", fg: "var(--orange-bright)", bd: "transparent" },
    outline: { bg: "transparent", fg: "var(--ink)", bd: "var(--border)" },
  }[tone];
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        padding: "5px 8px",
        borderRadius: "var(--radius-xs)",
        background: tones.bg,
        color: tones.fg,
        border: `1px solid ${tones.bd}`,
        fontFamily: "var(--font-mono)",
        fontWeight: "var(--fw-semibold)",
        fontSize: "var(--fs-caption)",
        lineHeight: 1,
        letterSpacing: "var(--ls-mono)",
        textTransform: "uppercase",
        whiteSpace: "nowrap",
        ...style,
      }}
      {...rest}
    >
      {children}
    </span>
  );
}
