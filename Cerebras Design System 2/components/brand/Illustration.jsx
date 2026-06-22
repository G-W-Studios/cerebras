import React from "react";

/**
 * Cerebras isometric illustration — the signature black/white/orange line-art
 * marks from the brand illustration library. Renders a PNG by name.
 *
 * Asset path: pass `basePath` relative to the page consuming the component
 * (default assumes the page sits at project root).
 */
export const ILLUSTRATIONS = [
  "custom", "education", "process", "solutions", "strategy",
  "wafer", "high-throughput", "wafer-scale-architecture",
];

export function Illustration({
  name = "wafer",
  size = 220,
  basePath = "assets/illustrations",
  alt,
  style,
  ...rest
}) {
  return (
    <img
      src={`${basePath}/${name}.png`}
      alt={alt ?? `Cerebras illustration: ${name}`}
      width={size}
      height="auto"
      style={{ display: "block", width: size, height: "auto", ...style }}
      {...rest}
    />
  );
}
export default Illustration;
