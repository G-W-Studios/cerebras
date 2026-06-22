// Cerebras website — Wafer feature + three value-prop cards with illustrations.
function Features() {
  const { Button, Card, Illustration, Tag } = window.CerebrasDesignSystem_0bbfb2;
  const feats = [
    { name: "high-throughput", title: "Code at the speed of thought", body: "Serve open models in seconds — OpenAI, Qwen, Llama and more — with a single API key.", link: "Read more: Cline" },
    { name: "strategy", title: "Agents that never stall", body: "Execute multi-step workflows without delays or timeouts.", link: "Case study: NinjaTech" },
    { name: "wafer", title: "Instant answers", body: "Complex reasoning in under a second — perfect for deep search, copilots and analysis.", link: "Read more: AlphaSense" },
  ];
  return (
    <React.Fragment>
      {/* Wafer split feature */}
      <section data-screen-label="Wafer" style={{
        display: "grid", gridTemplateColumns: "1fr 1fr", gap: "48px",
        alignItems: "center", padding: "72px", background: "var(--bg-cream)",
        borderRadius: "var(--radius-2xl)", margin: "12px",
      }}>
        <div>
          <Tag tone="orange" style={{ marginBottom: "20px" }}>Purpose-built for AI</Tag>
          <h2 style={{
            margin: "0 0 20px", fontFamily: "var(--font-sans)", fontWeight: 400,
            fontSize: "44px", lineHeight: 1.05, letterSpacing: "-0.02em", color: "var(--ink)",
          }}>The AI chip company that is up to 15× faster than GPUs</h2>
          <p style={{
            margin: "0 0 32px", fontFamily: "var(--font-sans)", fontWeight: 500,
            fontSize: "18px", lineHeight: 1.5, letterSpacing: "-0.01em", color: "var(--grey-700)",
          }}>The Cerebras Wafer-Scale Engine is purpose-built for ultra-fast AI. It is 58× larger than GPUs — designed for builders who want to do extraordinary things.</p>
          <Button variant="dark" icon="arrow-right">Explore the WSE-3</Button>
        </div>
        <div style={{
          aspectRatio: "1 / 1", borderRadius: "var(--radius-md)", overflow: "hidden",
          background: "url(../../assets/imagery/wafer-planview.png) center/cover no-repeat",
        }} />
      </section>

      {/* Three value props */}
      <section data-screen-label="Value props" style={{ padding: "72px" }}>
        <h2 style={{
          margin: "0 0 40px", fontFamily: "var(--font-sans)", fontWeight: 400,
          fontSize: "40px", lineHeight: 1.05, letterSpacing: "-0.02em", color: "var(--ink)", maxWidth: "640px",
        }}>The Cerebras advantage — build products that others can't</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px" }}>
          {feats.map((f) => (
            <Card key={f.name} tone="light" interactive padding={32} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <Illustration name={f.name} size={140} basePath="../../assets/illustrations" />
              <h3 style={{ margin: 0, fontFamily: "var(--font-sans)", fontWeight: 500, fontSize: "22px", letterSpacing: "-0.02em", color: "var(--ink)" }}>{f.title}</h3>
              <p style={{ margin: 0, fontFamily: "var(--font-sans)", fontWeight: 500, fontSize: "15px", lineHeight: 1.5, color: "var(--grey-700)", flex: 1 }}>{f.body}</p>
              <span style={{ fontFamily: "var(--font-mono)", fontWeight: 600, fontSize: "12px", letterSpacing: "0.02em", textTransform: "uppercase", color: "var(--orange)" }}>{f.link} →</span>
            </Card>
          ))}
        </div>
      </section>
    </React.Fragment>
  );
}
Object.assign(window, { Features });
