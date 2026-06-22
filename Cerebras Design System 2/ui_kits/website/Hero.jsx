// Cerebras website — Hero section. Dark, full-bleed, with the WSE wafer render.
function Hero() {
  const { Button } = window.CerebrasDesignSystem_0bbfb2;
  return (
    <section data-screen-label="Hero" style={{
      position: "relative",
      background: "var(--ink)",
      color: "var(--white)",
      borderRadius: "var(--radius-2xl)",
      overflow: "hidden",
      margin: "12px",
      minHeight: "600px",
      display: "flex",
      alignItems: "center",
    }}>
      {/* Imagery */}
      <div style={{
        position: "absolute", inset: 0, left: "46%",
        background: "url(../../assets/imagery/photo-1.jpg) center/cover no-repeat",
        maskImage: "linear-gradient(90deg, transparent, #000 26%)",
        WebkitMaskImage: "linear-gradient(90deg, transparent, #000 26%)",
      }} />
      <div style={{ position: "relative", padding: "0 72px", maxWidth: "720px" }}>
        <div style={{
          fontFamily: "var(--font-mono)", fontWeight: 600, fontSize: "13px",
          letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--orange)",
          marginBottom: "24px",
        }}>// Cerebras Inference</div>
        <h1 style={{
          margin: 0, fontFamily: "var(--font-sans)", fontWeight: 300,
          fontSize: "80px", lineHeight: 0.92, letterSpacing: "-0.02em",
        }}>1,000 Tokens<br />per Second</h1>
        <p style={{
          margin: "28px 0 40px", fontFamily: "var(--font-sans)", fontWeight: 500,
          fontSize: "20px", lineHeight: 1.4, letterSpacing: "-0.01em",
          color: "rgba(255,255,255,0.7)", maxWidth: "440px",
        }}>The fastest trillion-parameter model on earth. Purpose-built silicon, no GPUs, no compromises.</p>
        <div style={{ display: "flex", gap: "12px" }}>
          <Button variant="primary" size="lg" icon="arrow-right">Get started</Button>
          <Button variant="outline" size="lg" style={{ color: "var(--white)", borderColor: "rgba(255,255,255,0.3)" }}>View benchmarks</Button>
        </div>
      </div>
    </section>
  );
}
Object.assign(window, { Hero });
