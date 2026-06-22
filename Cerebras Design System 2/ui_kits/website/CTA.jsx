// Cerebras website — closing CTA band over the abstract render.
function CTA() {
  const { Button } = window.CerebrasDesignSystem_0bbfb2;
  return (
    <section data-screen-label="CTA" style={{
      position: "relative", overflow: "hidden", borderRadius: "var(--radius-2xl)",
      margin: "12px", padding: "96px 72px", textAlign: "center",
      background: "var(--orange)", color: "var(--ink)",
    }}>
      <div style={{ fontFamily: "var(--font-mono)", fontWeight: 600, fontSize: "13px", letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: "24px", opacity: 0.7 }}>// Get started in &lt;30 seconds</div>
      <h2 style={{ margin: "0 auto 36px", fontFamily: "var(--font-sans)", fontWeight: 300, fontSize: "64px", lineHeight: 0.95, letterSpacing: "-0.02em", maxWidth: "720px" }}>Build the fastest &amp; smartest apps</h2>
      <div style={{ display: "flex", gap: "12px", justifyContent: "center" }}>
        <Button variant="dark" size="lg" icon="arrow-right">Get started</Button>
        <Button variant="outline" size="lg" style={{ borderColor: "rgba(26,26,26,0.3)" }}>Talk to sales</Button>
      </div>
    </section>
  );
}
Object.assign(window, { CTA });
