import React from "react";

/**
 * StatCard — a big performance metric in the brand's mono/Manrope mix.
 * Used in stats bands (tokens/sec, ×faster, parameters, …).
 */
export function StatCard({ value, unit, label, tone = "light", accent = false, style, ...rest }) {
  const dark = tone === "dark";
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "8px",
        padding: "32px",
        background: dark ? "var(--ink)" : "var(--white)",
        border: `1px solid ${dark ? "transparent" : "var(--border)"}`,
        borderRadius: "var(--radius-xs)",
        boxSizing: "border-box",
        ...style,
      }}
      {...rest}
    >
      <div style={{ display: "flex", alignItems: "baseline", gap: "4px" }}>
        <span
          style={{
            fontFamily: "var(--font-sans)",
            fontWeight: "var(--fw-light)",
            fontSize: "var(--fs-display-l)",
            lineHeight: 0.95,
            letterSpacing: "var(--ls-display)",
            color: accent ? "var(--orange)" : dark ? "var(--white)" : "var(--ink)",
          }}
        >
          {value}
        </span>
        {unit ? (
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontWeight: "var(--fw-semibold)",
              fontSize: "var(--fs-h4)",
              letterSpacing: "var(--ls-mono)",
              color: accent ? "var(--orange)" : dark ? "var(--white)" : "var(--ink)",
            }}
          >
            {unit}
          </span>
        ) : null}
      </div>
      <span
        style={{
          fontFamily: "var(--font-mono)",
          fontWeight: "var(--fw-semibold)",
          fontSize: "var(--fs-caption)",
          letterSpacing: "var(--ls-mono)",
          textTransform: "uppercase",
          color: "var(--grey-500)",
        }}
      >
        {label}
      </span>
    </div>
  );
}
