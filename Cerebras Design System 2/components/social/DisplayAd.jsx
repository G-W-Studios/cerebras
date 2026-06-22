import React from "react";
import { Logo } from "../brand/Logo.jsx";

/**
 * DisplayAd — Cerebras paid web-banner surface (IAB standard units).
 * Same campaign DNA as SocialPost: the warm orange-glow gradient, a BOLD
 * UPPERCASE Manrope headline and the white logo. Short/wide units lay the
 * headline and logo out in a row; tall units stack headline → (image) →
 * cta → logo. Renders at the unit's native pixel size; scale via `style`.
 */
const FORMATS = {
  // size key                 w     h   orient    fs   logoH  pad
  "leaderboard":        { w: 728, h: 90,  orient: "row",   fs: 30, logoH: 26, pad: 22 },
  "super-leaderboard":  { w: 970, h: 90,  orient: "row",   fs: 32, logoH: 26, pad: 26 },
  "billboard":          { w: 970, h: 250, orient: "row",   fs: 54, logoH: 34, pad: 44 },
  "medium-rectangle":   { w: 300, h: 250, orient: "stack", fs: 30, logoH: 22, pad: 24 },
  "half-page":          { w: 300, h: 600, orient: "stack", fs: 46, logoH: 28, pad: 28 },
  "skyscraper":         { w: 160, h: 600, orient: "stack", fs: 28, logoH: 18, pad: 18 },
  "large-mobile":       { w: 320, h: 100, orient: "row",   fs: 26, logoH: 22, pad: 20 },
  "mobile-leaderboard": { w: 320, h: 50,  orient: "row",   fs: 17, logoH: 15, pad: 14 },
};

export function DisplayAd({
  headline = "The world's fastest AI",
  size = "leaderboard",
  image,
  cta,
  logo = true,
  style,
  ...rest
}) {
  const f = FORMATS[size] || FORMATS.leaderboard;
  const row = f.orient === "row";

  const frame = {
    position: "relative",
    width: f.w,
    height: f.h,
    maxWidth: "100%",
    borderRadius: "var(--radius-xs)",
    overflow: "hidden",
    background: "var(--gradient-display)",
    boxSizing: "border-box",
    color: "var(--white)",
    display: "flex",
    flexDirection: row ? "row" : "column",
    alignItems: "center",
    justifyContent: row ? "space-between" : "space-between",
    padding: `${row ? Math.round(f.pad * 0.6) : f.pad}px ${f.pad}px`,
    gap: row ? f.pad : Math.round(f.pad * 0.5),
    ...style,
  };

  const head = {
    margin: 0,
    fontFamily: "var(--font-sans)",
    fontWeight: 700,
    fontSize: f.fs,
    lineHeight: 0.9,
    letterSpacing: "-0.02em",
    textTransform: "uppercase",
    textAlign: row ? "left" : "center",
    textWrap: "balance",
  };

  const ctaEl = cta ? (
    <span style={{
      flex: "none",
      fontFamily: "var(--font-mono)",
      fontWeight: 600,
      fontSize: Math.max(10, Math.round(f.fs * 0.34)),
      letterSpacing: "0.04em",
      textTransform: "uppercase",
      padding: "0.5em 0.85em",
      border: "1px solid rgba(255,255,255,0.45)",
      borderRadius: "var(--radius-xs)",
      whiteSpace: "nowrap",
    }}>{cta}</span>
  ) : null;

  const logoEl = logo ? (
    <Logo height={f.logoH} color="var(--white)" style={{ flex: "none" }} />
  ) : null;

  if (row) {
    return (
      <div style={frame} {...rest}>
        <h3 style={{ ...head, flex: "1 1 auto", minWidth: 0 }}>{headline}</h3>
        {ctaEl}
        {logoEl}
      </div>
    );
  }

  // Stacked (tall / boxy units)
  return (
    <div style={frame} {...rest}>
      <h3 style={head}>{headline}</h3>
      {image ? (
        <div style={{
          flex: 1,
          alignSelf: "stretch",
          minHeight: 0,
          margin: `${Math.round(f.pad * 0.4)}px 0`,
          background: `url(${image}) center/contain no-repeat`,
        }} />
      ) : <div style={{ flex: 1 }} />}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: Math.round(f.pad * 0.5) }}>
        {ctaEl}
        {logoEl}
      </div>
    </div>
  );
}
export default DisplayAd;
