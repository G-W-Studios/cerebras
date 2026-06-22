// Cerebras website — Stats band. Big Manrope-Light figures, mono captions.
function Stats() {
  const { StatCard } = window.CerebrasDesignSystem_0bbfb2;
  const stats = [
    { value: "1,000", unit: "tok/s", label: "Llama 70B inference", accent: true },
    { value: "58×", label: "Larger than a GPU" },
    { value: "44GB", label: "On-chip SRAM" },
    { value: "900K", label: "AI-optimized cores" },
  ];
  return (
    <section data-screen-label="Stats" style={{ padding: "72px" }}>
      <div style={{
        fontFamily: "var(--font-mono)", fontWeight: 600, fontSize: "13px",
        letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--grey-500)",
        marginBottom: "32px",
      }}>// The Wafer-Scale Engine 3</div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "16px" }}>
        {stats.map((s, i) => <StatCard key={i} {...s} />)}
      </div>
    </section>
  );
}
Object.assign(window, { Stats });
