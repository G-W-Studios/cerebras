import React from "react";
import { Icon } from "../../assets/icons/Icon.jsx";

/**
 * Cerebras Button — the primary call to action.
 * Mono uppercase label, sharp 2px corners, optional trailing icon.
 * Variants: primary (orange), dark (ink), light (cream), outline, ghost.
 */
export function Button({
  variant = "primary",
  size = "md",
  icon,
  iconPosition = "right",
  href,
  children,
  disabled = false,
  style,
  ...rest
}) {
  const palette = {
    primary: { bg: "var(--orange)", fg: "var(--ink)", bd: "transparent", hover: "var(--orange-bright)" },
    dark:    { bg: "var(--ink)", fg: "var(--white)", bd: "transparent", hover: "var(--grey-800)" },
    light:   { bg: "var(--paper)", fg: "var(--ink)", bd: "transparent", hover: "var(--grey-200)" },
    outline: { bg: "transparent", fg: "var(--ink)", bd: "var(--border-strong)", hover: "var(--paper)" },
    ghost:   { bg: "transparent", fg: "var(--ink)", bd: "transparent", hover: "var(--paper)" },
  }[variant];

  const sizes = {
    sm: { pad: "10px 14px", fs: "12px" },
    md: { pad: "16px 20px", fs: "13px" },
    lg: { pad: "20px 28px", fs: "14px" },
  }[size];

  const baseStyle = {
    display: "inline-flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: "12px",
    padding: sizes.pad,
    borderRadius: "var(--radius-xs)",
    border: `1px solid ${palette.bd}`,
    background: palette.bg,
    color: palette.fg,
    fontFamily: "var(--font-mono)",
    fontWeight: "var(--fw-semibold)",
    fontSize: sizes.fs,
    lineHeight: 1,
    letterSpacing: "var(--ls-mono)",
    textTransform: "uppercase",
    textDecoration: "none",
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.45 : 1,
    whiteSpace: "nowrap",
    transition: "background var(--dur) var(--ease-out), transform var(--dur-fast) var(--ease-out)",
    boxSizing: "border-box",
    ...style,
  };

  const onEnter = (e) => { if (!disabled) e.currentTarget.style.background = palette.hover; };
  const onLeave = (e) => { if (!disabled) e.currentTarget.style.background = palette.bg; };
  const onDown  = (e) => { if (!disabled) e.currentTarget.style.transform = "scale(0.98)"; };
  const onUp    = (e) => { if (!disabled) e.currentTarget.style.transform = "scale(1)"; };

  const glyph = icon ? <Icon name={icon} size={size === "lg" ? 20 : 16} /> : null;
  const content = (
    <>
      {icon && iconPosition === "left" ? glyph : null}
      {children ? <span>{children}</span> : null}
      {icon && iconPosition === "right" ? glyph : null}
    </>
  );

  const Tag = href ? "a" : "button";
  return (
    <Tag
      href={href}
      style={baseStyle}
      disabled={href ? undefined : disabled}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      onMouseDown={onDown}
      onMouseUp={onUp}
      {...rest}
    >
      {content}
    </Tag>
  );
}

/**
 * Square icon-only button. Same sharp corners; defaults to a dark fill.
 */
export function IconButton({ icon, variant = "dark", size = 44, disabled = false, style, ...rest }) {
  const palette = {
    dark:    { bg: "var(--ink)", fg: "var(--white)", hover: "var(--grey-800)" },
    light:   { bg: "var(--paper)", fg: "var(--ink)", hover: "var(--grey-200)" },
    outline: { bg: "transparent", fg: "var(--ink)", hover: "var(--paper)", bd: "var(--border-strong)" },
    primary: { bg: "var(--orange)", fg: "var(--ink)", hover: "var(--orange-bright)" },
  }[variant];
  return (
    <button
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: size,
        height: size,
        padding: 0,
        borderRadius: "var(--radius-xs)",
        border: `1px solid ${palette.bd || "transparent"}`,
        background: palette.bg,
        color: palette.fg,
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.45 : 1,
        transition: "background var(--dur) var(--ease-out)",
        ...style,
      }}
      disabled={disabled}
      onMouseEnter={(e) => { if (!disabled) e.currentTarget.style.background = palette.hover; }}
      onMouseLeave={(e) => { if (!disabled) e.currentTarget.style.background = palette.bg; }}
      {...rest}
    >
      <Icon name={icon} size={Math.round(size * 0.45)} />
    </button>
  );
}
