import React from "react";
import { Logo } from "../brand/Logo.jsx";

/**
 * SocialPost — the Cerebras campaign / social-ad surface.
 * Signature warm orange-glow gradient, big BOLD UPPERCASE Manrope headline,
 * white Cerebras logo. Used across LinkedIn, paid social, airport & web ads.
 *
 * format sets the aspect ratio; the headline scales to the frame width.
 */
const FORMATS = {
  square:    { ratio: "1 / 1", w: 540 },
  portrait:  { ratio: "4 / 5", w: 480 },
  story:     { ratio: "9 / 16", w: 360 },
  landscape: { ratio: "16 / 9", w: 640 },
  wide:      { ratio: "1.91 / 1", w: 640 },
};

export function SocialPost({
  headline = "THE WORLD'S BIGGEST CHIP",
  format = "square",
  image,
  eyebrow,
  align = "top",
  logo = true,
  style,
  ...rest
}) {
  const f = FORMATS[format] || FORMATS.square;
  // Headline scales with frame width (matches the ~10.8% Figma ratio).
  const fs = `clamp(20px, ${(f.w * 0.108).toFixed(0)}px, 12vw)`;
  return (
    <div
      style={{
        position: "relative",
        width: f.w,
        maxWidth: "100%",
        aspectRatio: f.ratio,
        borderRadius: "var(--radius-xs)",
        overflow: "hidden",
        background: "var(--gradient-display)",
        display: "flex",
        flexDirection: "column",
        justifyContent: align === "center" ? "center" : "flex-start",
        padding: "clamp(20px, 7%, 56px)",
        boxSizing: "border-box",
        color: "var(--white)",
        ...style,
      }}
      {...rest}
    >
      {eyebrow ? (
        <div style={{
          fontFamily: "var(--font-mono)", fontWeight: 600, fontSize: "clamp(10px,2.6%,15px)",
          letterSpacing: "0.06em", textTransform: "uppercase", color: "rgba(255,255,255,0.85)",
          textAlign: "center", marginBottom: "14px",
        }}>{eyebrow}</div>
      ) : null}

      <h2 style={{
        margin: 0,
        fontFamily: "var(--font-sans)", fontWeight: 700,
        fontSize: fs, lineHeight: 0.9, letterSpacing: "-0.02em",
        textTransform: "uppercase", textAlign: "center",
      }}>{headline}</h2>

      {image ? (
        <div style={{
          flex: 1, minHeight: 0, margin: "24px 0",
          background: `url(${image}) center/contain no-repeat`,
        }} />
      ) : <div style={{ flex: 1 }} />}

      {logo ? (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Logo height={Math.max(20, Math.round(f.w * 0.06))} color="var(--white)" />
        </div>
      ) : null}
    </div>
  );
}
