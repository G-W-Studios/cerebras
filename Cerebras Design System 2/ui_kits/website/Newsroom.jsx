// Cerebras website — Newsroom grid of ArticleCards (dark band).
function Newsroom() {
  const { ArticleCard, Chip, Button } = window.CerebrasDesignSystem_0bbfb2;
  const [filter, setFilter] = React.useState("all");
  const items = [
    { category: "press-release", categoryLabel: "Press Release", title: "Cerebras and Mayo Clinic unveil best-in-class genomic foundation model", date: "January 29, 2025", image: "../../assets/imagery/photo-2.jpg" },
    { category: "news", categoryLabel: "News", title: "How faster inference gives cybersecurity companies the edge", date: "February 12, 2025", image: "../../assets/imagery/photo-1.jpg" },
    { category: "blog", categoryLabel: "Blog", title: "Serving Llama 3.1 405B at 1,000 tokens per second", date: "March 4, 2025", image: "../../assets/imagery/wafer-planview.png" },
  ];
  const filters = ["all", "news", "blog", "press-release"];
  return (
    <section data-screen-label="Newsroom" style={{ background: "var(--ink)", padding: "72px", borderRadius: "var(--radius-2xl)", margin: "12px" }}>
      <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: "32px", flexWrap: "wrap", gap: "20px" }}>
        <h2 style={{ margin: 0, fontFamily: "var(--font-sans)", fontWeight: 400, fontSize: "40px", letterSpacing: "-0.02em", color: "var(--white)" }}>In the newsroom</h2>
        <div style={{ display: "flex", gap: "8px" }}>
          {filters.map((f) => (
            <Chip key={f} selected={filter === f} onClick={() => setFilter(f)}
              style={filter === f ? { background: "var(--white)", color: "var(--ink)", borderColor: "var(--white)" } : { color: "rgba(255,255,255,0.7)", borderColor: "var(--border-on-dark)" }}>
              {f.replace("-", " ")}
            </Chip>
          ))}
        </div>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px" }}>
        {items.filter((it) => filter === "all" || it.category === filter).map((it, i) => (
          <ArticleCard key={i} tone="dark" {...it} />
        ))}
      </div>
    </section>
  );
}
Object.assign(window, { Newsroom });
