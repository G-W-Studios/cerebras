import React from "react";
import { Logo } from "../brand/Logo.jsx";
import { Button } from "../core/Button.jsx";
import { Input } from "../core/Input.jsx";

/**
 * Site footer — dark ink surface, mono column headers, newsletter signup.
 * Mirrors the Cerebras website footer.
 */
const DEFAULT_COLUMNS = [
  { head: "Products", links: ["Inference", "Training", "Cloud", "Wafer-Scale Engine", "Pricing"] },
  { head: "Developers", links: ["Documentation", "API Reference", "Model Catalog", "Status"] },
  { head: "Company", links: ["About", "Careers", "Partners", "Contact"] },
  { head: "News", links: ["In the News", "Press Kit"] },
  { head: "Insights", links: ["Customer Spotlight", "Blog", "Publications", "Whitepapers"] },
];

const HEAD = {
  fontFamily: "var(--font-mono)",
  fontWeight: "var(--fw-semibold)",
  fontSize: "12px",
  letterSpacing: "var(--ls-mono)",
  textTransform: "uppercase",
  color: "rgba(255,255,255,0.5)",
  marginBottom: "16px",
};
const LINK = {
  display: "block",
  color: "rgba(255,255,255,0.82)",
  textDecoration: "none",
  fontFamily: "var(--font-sans)",
  fontWeight: "var(--fw-medium)",
  fontSize: "var(--fs-body-sm)",
  lineHeight: 2,
  letterSpacing: "var(--ls-tight)",
};

export function Footer({ columns = DEFAULT_COLUMNS, style, ...rest }) {
  return (
    <footer
      style={{
        background: "var(--ink)",
        color: "var(--white)",
        padding: "64px 48px 40px",
        ...style,
      }}
      {...rest}
    >
      <div style={{ display: "flex", flexWrap: "wrap", gap: "48px", justifyContent: "space-between", maxWidth: "var(--container-max)", margin: "0 auto" }}>
        {/* Link columns */}
        <div style={{ display: "flex", gap: "56px", flexWrap: "wrap" }}>
          {columns.map((col) => (
            <div key={col.head} style={{ minWidth: "120px" }}>
              <div style={HEAD}>{col.head}</div>
              {col.links.map((l) => (
                <a
                  key={l}
                  href="#"
                  style={LINK}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--orange)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.82)")}
                >
                  {l}
                </a>
              ))}
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div style={{ minWidth: "260px", maxWidth: "320px" }}>
          <div style={HEAD}>Get updates</div>
          <div style={{ fontFamily: "var(--font-sans)", fontSize: "var(--fs-body)", fontWeight: "var(--fw-medium)", marginBottom: "16px", color: "var(--white)", letterSpacing: "var(--ls-tight)" }}>
            Newsletter signup
          </div>
          <div style={{ display: "flex", gap: "8px" }}>
            <Input placeholder="you@company.com" wrapStyle={{ flex: 1, background: "rgba(255,255,255,0.06)", border: "1px solid var(--border-on-dark)" }} style={{ color: "var(--white)" }} />
            <Button variant="primary" size="md" icon="arrow-right" />
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", alignItems: "center", justifyContent: "space-between", maxWidth: "var(--container-max)", margin: "56px auto 0", paddingTop: "28px", borderTop: "1px solid var(--border-on-dark)" }}>
        <Logo height={24} color="var(--white)" />
        <div style={{ display: "flex", gap: "24px", flexWrap: "wrap", fontFamily: "var(--font-mono)", fontSize: "12px", letterSpacing: "var(--ls-mono)", color: "rgba(255,255,255,0.5)" }}>
          <span>1237 E. Arques Ave Sunnyvale, CA 94085</span>
          <span>© 2025 Cerebras. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
