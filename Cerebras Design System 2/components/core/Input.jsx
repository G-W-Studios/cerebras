import React from "react";
import { Icon } from "../../assets/icons/Icon.jsx";

/**
 * Text input / search field. Sharp 2px corners, hairline border,
 * orange focus ring. Pass `icon="search"` for the search variant.
 */
export function Input({ icon, type = "text", style, wrapStyle, ...rest }) {
  const [focus, setFocus] = React.useState(false);
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "8px",
        padding: "0 12px",
        height: "44px",
        background: "var(--white)",
        border: `1px solid ${focus ? "var(--orange)" : "var(--border)"}`,
        borderRadius: "var(--radius-xs)",
        transition: "border-color var(--dur) var(--ease-out)",
        ...wrapStyle,
      }}
    >
      {icon ? <Icon name={icon} size={16} style={{ color: "var(--grey-500)" }} /> : null}
      <input
        type={type}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        style={{
          flex: 1,
          minWidth: 0,
          border: "none",
          outline: "none",
          background: "transparent",
          color: "var(--ink)",
          fontFamily: "var(--font-sans)",
          fontWeight: "var(--fw-medium)",
          fontSize: "var(--fs-body-sm)",
          letterSpacing: "var(--ls-tight)",
          ...style,
        }}
        {...rest}
      />
    </div>
  );
}
