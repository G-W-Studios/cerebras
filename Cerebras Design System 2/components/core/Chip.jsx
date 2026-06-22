import React from "react";
import { Icon } from "../../assets/icons/Icon.jsx";

/**
 * Chip — a selectable filter pill (mono label, sharp corners).
 * Selected state fills with ink; idle is hairline-outlined.
 */
export function Chip({ selected = false, icon, children, onClick, style, ...rest }) {
  const idle = {
    bg: "transparent", fg: "var(--grey-600)", bd: "var(--border)",
  };
  const on = {
    bg: "var(--ink)", fg: "var(--white)", bd: "var(--ink)",
  };
  const c = selected ? on : idle;
  return (
    <button
      onClick={onClick}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "6px",
        padding: "8px 12px",
        borderRadius: "var(--radius-xs)",
        background: c.bg,
        color: c.fg,
        border: `1px solid ${c.bd}`,
        fontFamily: "var(--font-mono)",
        fontWeight: "var(--fw-semibold)",
        fontSize: "var(--fs-caption)",
        lineHeight: 1,
        letterSpacing: "var(--ls-mono)",
        textTransform: "uppercase",
        cursor: "pointer",
        whiteSpace: "nowrap",
        transition: "all var(--dur) var(--ease-out)",
        ...style,
      }}
      {...rest}
    >
      {icon ? <Icon name={icon} size={14} /> : null}
      {children}
    </button>
  );
}
