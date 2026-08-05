import React from "react";

// Inject keyframe once on module load
if (typeof document !== "undefined") {
  const id = "__cb_kf";
  if (!document.getElementById(id)) {
    const s = document.createElement("style");
    s.id = id;
    s.textContent = `@keyframes cbIn{from{opacity:0}to{opacity:1}}`;
    document.head.appendChild(s);
  }
}

const STAGGER   = 3;  // ms between each character
const TOKEN_DUR = 60; // ms each character fades in

const TrafficLights = () => (
  <svg width="68" height="28" viewBox="0 0 68 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="22" cy="22" r="5" fill="white" />
    <circle cx="42" cy="22" r="5" fill="#B3B1AF" />
    <circle cx="62" cy="22" r="5" fill="#4D4C4B" />
  </svg>
);

const COPY_ICON = (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: "block" }}>
    <rect x="4.5" y="4.5" width="8" height="8" rx="1.5" stroke="currentColor" strokeWidth="1" />
    <path d="M2 9.5H1.5A1.5 1.5 0 0 1 0 8V1.5A1.5 1.5 0 0 1 1.5 0H8A1.5 1.5 0 0 1 9.5 1.5V2" stroke="currentColor" strokeWidth="1" />
  </svg>
);

const CHECK_ICON = (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: "block" }}>
    <path d="M2.5 7L5.5 10L11.5 4" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const TOKEN_COLORS = {
  default: "var(--white)",
  accent:  "var(--orange)",
  dim:     "var(--grey-700)",
  comment: "var(--grey-600)",
};

/**
 * CodeBlock — dark terminal-style code window with optional line numbers and copy button.
 *
 * tokens: an array of lines, each line an array of token objects.
 * Token shape: { text: string, type?: "default"|"accent"|"dim"|"comment", color?: string }
 *
 * Pass an empty array [] as a line to render a blank line.
 * Set animate={false} to skip the diagonal fade-in.
 */
export function CodeBlock({
  tokens = [],
  showLineNumbers = true,
  copyButton = true,
  startLine = 1,
  animate = true,
  style,
  ...rest
}) {
  const [copied, setCopied] = React.useState(false);

  const handleCopy = () => {
    const text = tokens.map(line => line.map(t => t.text).join("")).join("\n");
    navigator.clipboard?.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    });
  };

  let charIdx = 0;

  return (
    <div
      style={{
        background: "var(--ink)",
        borderRadius: 12,
        overflow: "hidden",
        position: "relative",
        fontFamily: "var(--font-mono)",
        ...style,
      }}
      {...rest}
    >
      {/* Title bar */}
      <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", paddingRight: 16 }}>
        <TrafficLights />
        {copyButton && (
          <button
            onClick={handleCopy}
            aria-label={copied ? "Copied" : "Copy code"}
            style={{
              display: "flex", alignItems: "center", gap: 6,
              background: "none", border: "none", cursor: "pointer",
              color: copied ? "var(--orange)" : "var(--grey-700)",
              fontFamily: "var(--font-mono)", fontSize: 11,
              letterSpacing: "var(--ls-mono-wide)", textTransform: "uppercase",
              padding: "0 0 6px", lineHeight: 1,
              transition: "color var(--dur-fast) var(--ease-out)",
            }}
            onMouseEnter={e => { if (!copied) e.currentTarget.style.color = "var(--grey-400)"; }}
            onMouseLeave={e => { if (!copied) e.currentTarget.style.color = "var(--grey-700)"; }}
          >
            {copied ? CHECK_ICON : COPY_ICON}
            {copied ? "COPIED" : "COPY"}
          </button>
        )}
      </div>

      {/* Code body */}
      <div style={{ padding: "24px 16px", display: "flex", flexDirection: "column", gap: 4, overflowX: "auto" }}>
        {tokens.map((line, i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", gap: 20 }}>
            {showLineNumbers && (
              <span style={{
                fontSize: 14, lineHeight: 1.45, color: "var(--grey-700)",
                textAlign: "right", width: 32, flexShrink: 0, userSelect: "none",
              }}>
                {String(startLine + i).padStart(2, "0")}
              </span>
            )}
            <span style={{ fontSize: 14, lineHeight: 1.45, color: "var(--white)", flex: 1, minWidth: 1, whiteSpace: "pre" }}>
              {line.length === 0 ? " " : line.map((token, j) => {
                const color = token.color ?? TOKEN_COLORS[token.type ?? "default"] ?? "var(--white)";
                return (
                  <span key={j} style={{ color }}>
                    {token.text.split("").map((char, k) => {
                      const delay = animate ? charIdx++ * STAGGER : 0;
                      return (
                        <span key={k} style={animate ? {
                          opacity: 0,
                          animation: `cbIn ${TOKEN_DUR}ms ease-out both`,
                          animationDelay: `${delay}ms`,
                        } : undefined}>
                          {char}
                        </span>
                      );
                    })}
                  </span>
                );
              })}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

/**
 * InlineCode — mono span for inline code snippets within body copy.
 */
export function InlineCode({ children, style, ...rest }) {
  return (
    <code
      style={{
        fontFamily: "var(--font-mono)", fontSize: "0.85em", fontWeight: "var(--fw-semibold)",
        color: "var(--orange)", background: "rgba(241,90,41,0.08)",
        borderRadius: "var(--radius-xs)", padding: "0.1em 0.4em",
        letterSpacing: "var(--ls-mono)", ...style,
      }}
      {...rest}
    >
      {children}
    </code>
  );
}
