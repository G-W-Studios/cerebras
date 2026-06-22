import React from "react";
import { Logo } from "../brand/Logo.jsx";
import { Button, IconButton } from "../core/Button.jsx";
import { Icon } from "../../assets/icons/Icon.jsx";

/**
 * Top navigation — floating white bar with the logo, primary menu and CTAs.
 * Matches the Cerebras website header. Pass your own `items` to customize.
 */
const DEFAULT_ITEMS = [
  { label: "Products", hasMenu: true },
  { label: "Customers" },
  { label: "Developers" },
  { label: "Resources" },
  { label: "Pricing" },
  { label: "Company" },
];

export function Navigation({ items = DEFAULT_ITEMS, onGetStarted, floating = true, style, ...rest }) {
  return (
    <nav
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "24px",
        width: "100%",
        boxSizing: "border-box",
        padding: floating ? "20px 32px" : "20px 48px",
        background: "rgba(255,255,255,0.8)",
        backdropFilter: "blur(60px)",
        WebkitBackdropFilter: "blur(60px)",
        borderRadius: floating ? "var(--radius-pill)" : 0,
        border: floating ? "1px solid var(--border)" : "none",
        borderBottom: floating ? "1px solid var(--border)" : "1px solid var(--border)",
        ...style,
      }}
      {...rest}
    >
      <Logo height={26} />

      <div style={{ display: "flex", alignItems: "center", gap: "28px" }}>
        {items.map((it) => (
          <a
            key={it.label}
            href={it.href || "#"}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "4px",
              color: "var(--ink)",
              textDecoration: "none",
              fontFamily: "var(--font-sans)",
              fontWeight: "var(--fw-medium)",
              fontSize: "var(--fs-body-sm)",
              letterSpacing: "var(--ls-tight)",
              transition: "color var(--dur) var(--ease-out)",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--orange)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--ink)")}
          >
            {it.label}
            {it.hasMenu ? <Icon name="chevron-down" size={12} /> : null}
          </a>
        ))}
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <IconButton icon="search" variant="dark" size={44} />
        <Button variant="light" size="md">Log in</Button>
        <Button variant="primary" size="md" onClick={onGetStarted}>Get started</Button>
      </div>
    </nav>
  );
}
