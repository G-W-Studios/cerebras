# Onboarding — Cerebras Graphs

Welcome. This repo is where we build Cerebras-branded data viz (benchmark charts, speed comparisons, etc). Here's what you need to get started making your own graphs.

## 1. Read these two files first, in order

1. **`DESIGN.md`** → section **"Data Visualization & Charts"**. This is the authoritative spec — colors, typography, chart types, animation rules, and full copy-pasteable HTML/CSS templates for every chart type we use (vertical bar, horizontal bar, grouped bar, donut, comparison bar). Don't reverse-engineer patterns from the HTML file — this doc is the source of truth.
2. **`CLAUDE.md`** (repo root) — the non-negotiable brand rules. The short version:
   - Orange `#F15A29` = Cerebras, always. Grey ramp = everyone else. Never the reverse.
   - Sometype Mono (SemiBold, uppercase) for every label, value, and axis inside a chart. Manrope is for titles only.
   - 2px border-radius on bars/cards.
   - Cream/dark backgrounds only — never plain white.
   - No emoji, no decorative color outside the accent palette.

## 2. Where the actual graphs live

`graphs.html` — a single self-contained file with one `<div class="graph-panel">` per chart, switched by tabs. Currently 7 tabs:

- Price-Performance (dark, vertical grouped bar)
- AI Inference (dark, vertical grouped bar)
- Mistral Le Chat (light, horizontal bar)
- Llama CePO (light, grouped multi-series bar)
- Market Share (light, donut SVG)
- WSE-3 vs GPU (dark, comparison horizontal bars)
- GDP-Val (dark, stacked horizontal bars — inference vs non-inference time)

Open it directly in a browser, or run the local preview server (see below) to see all tabs live with animation and hover states working.

## 3. Preview server

A dev server config already exists at `.claude/launch.json` — the entry named `"graph"` runs:

```bash
python3 -m http.server 3460
```

Then open `http://localhost:3460/graphs.html`. If you're using Claude Code, just ask it to open the `graph` preview — it knows the config.

## 4. How to add a new graph

1. Pick the chart type that matches your data (vertical bar for speed/score comparisons, horizontal bar for ranked lists, grouped bar for benchmark suites, donut for market-share-style splits, stacked bar for time/cost breakdowns like GDP-Val).
2. Copy the matching HTML/CSS template from `DESIGN.md`'s "HTML/CSS implementation" subsection into `graphs.html`.
3. Add a `<button class="tab-btn" data-tab="gN">` in the tab bar and a `<div id="gN" class="graph-panel">` panel.
4. Wire your new elements into the `animatePanel()` function in the `<script>` block at the bottom — every existing chart type has a case there already; follow the pattern for the one closest to yours.
5. Go through the **12-point checklist** at the end of `DESIGN.md`'s chart section before calling it done (card variant, bar dimensions via CSS custom properties, entrance animation, hover dimming, mobile overrides, etc). Every point matters — skipping one is the most common way a new chart ends up off-brand.

## 5. Two rules that trip people up

- **Never use `@keyframes`.** Keyframe animations don't fire when a tab is hidden (`display: none`), so every chart uses CSS `transition` + JS class toggling instead (`.visible` / `.animate`). Copy this pattern, don't invent a new one.
- **Never hardcode `height:`/`width:` on a bar.** Always use `style="--bar-h: Xpx"` (vertical) or `style="--bar-w: Xpx"` (horizontal) so the shared mobile CSS (`--bar-scale`, `--bar-scale-h`) can resize everything responsively. Same for `<svg>` — no `height` attribute, `viewBox` + `width: 100%` only.

## 6. If you want AI help building a chart

If you're working with Claude Code in this repo, just ask it to build the graph — it already has this context loaded via `CLAUDE.md` and will read `DESIGN.md` before generating anything. Just describe the data and which existing tab it's most like (e.g. "like Price-Performance but for X vs Y").
