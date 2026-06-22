import React from "react";
import { Label } from "../core/Label.jsx";
import { Icon } from "../../assets/icons/Icon.jsx";

/**
 * ArticleCard — newsroom / blog tile. Image, category label, title, date.
 * Defaults to the dark textured treatment used on the Cerebras site.
 */
export function ArticleCard({
  image,
  category = "news",
  categoryLabel,
  title,
  date,
  href,
  tone = "dark",
  style,
  ...rest
}) {
  const dark = tone === "dark";
  const [hover, setHover] = React.useState(false);
  return (
    <a
      href={href || "#"}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "24px",
        padding: "24px",
        textDecoration: "none",
        background: dark ? "var(--ink-900)" : "var(--white)",
        border: `1px solid ${dark ? "transparent" : "var(--border)"}`,
        borderRadius: "var(--radius-xs)",
        boxSizing: "border-box",
        transition: "transform var(--dur) var(--ease-out)",
        transform: hover ? "translateY(-3px)" : "none",
        ...style,
      }}
      {...rest}
    >
      <div
        style={{
          width: "100%",
          aspectRatio: "16 / 10",
          borderRadius: "var(--radius-sm)",
          overflow: "hidden",
          background: image ? `url(${image}) center/cover no-repeat` : "var(--grey-200)",
        }}
      />
      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        <h3
          style={{
            margin: 0,
            fontFamily: "var(--font-sans)",
            fontWeight: "var(--fw-medium)",
            fontSize: "var(--fs-body-lg)",
            lineHeight: 1.3,
            letterSpacing: "var(--ls-display)",
            color: dark ? "var(--white)" : "var(--ink)",
          }}
        >
          {title}
        </h3>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            fontFamily: "var(--font-mono)",
            fontWeight: "var(--fw-semibold)",
            fontSize: "var(--fs-label)",
            letterSpacing: "var(--ls-mono)",
            color: "var(--grey-500)",
          }}
        >
          {date}
        </div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <Label category={category}>{categoryLabel}</Label>
          <Icon name="arrow-right" size={18} style={{ color: dark ? "var(--white)" : "var(--ink)", opacity: hover ? 1 : 0.5, transition: "opacity var(--dur)" }} />
        </div>
      </div>
    </a>
  );
}
