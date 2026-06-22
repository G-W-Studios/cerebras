Card surfaces for the Cerebras site. Sharp 2px corners, hairline borders, restrained shadows.

```jsx
<Card tone="cream" interactive>…</Card>
<ArticleCard tone="dark" category="press-release" title="Cerebras and Mayo Clinic unveil genomic model" date="January 29, 2025" image="…" />
<StatCard value="1,000" unit="tok/s" label="Llama 70B" accent />
```

`Card` is the base container (tones: light/cream/dark/darker). `ArticleCard` is the newsroom tile (defaults to the dark textured treatment). `StatCard` shows a big Manrope-Light figure with a mono caption — pass `accent` to make the number orange.
