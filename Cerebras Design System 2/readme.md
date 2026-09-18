# Cerebras Design System

A faithful, code-first design system for **Cerebras** — the company behind the
Wafer-Scale Engine (WSE), the largest chip ever built, and the Cerebras
Inference cloud that serves frontier models at record speed. This system lets
design agents produce on-brand Cerebras interfaces, marketing pages, decks and
assets.

> **Source of truth:** the attached Figma file *"Website (Copy).fig"* (mounted
> read-only). Tokens, components, icons, the logo and the illustration library
> were extracted from it directly. Public Cerebras references were used only to
> confirm what the file contained.

---

## What Cerebras is

Cerebras builds purpose-built AI silicon and a cloud on top of it. The core
narrative across the site:

- **Wafer-Scale Engine 3** — a single chip 58× larger than a GPU, with ~900K
  AI cores and 44GB of on-chip SRAM.
- **Cerebras Inference** — "1,000 tokens per second", "the fastest
  trillion-parameter model on earth", up to 15× faster than GPUs.
- **For builders** — code at the speed of thought, agents that never stall,
  instant answers, deploy AI anywhere (cloud / on-prem / on-device).

Audience: AI developers, enterprises and researchers. The voice is confident,
technical and benchmark-driven.

---

## CONTENT FUNDAMENTALS

How Cerebras writes:

- **Tone:** bold, declarative, performance-led. Leads with a number or a
  superlative — *"1,000 Tokens per Second"*, *"The fastest trillion-parameter
  model on earth"*, *"up to 15× Faster than GPUs"*.
- **Voice:** speaks to **you**, the builder — *"Designed for builders who want
  to do extraordinary things."* Cerebras refers to itself as "Cerebras".
- **Casing:** Headlines are sentence case in Manrope. **Mono UI text is
  UPPERCASE** — buttons (`GET STARTED`), eyebrows (`// PURPOSE-BUILT FOR AI`),
  labels, dates and metrics all use Sometype Mono.
- **Eyebrows** frequently start with a `//` comment prefix, echoing code.
- **Numbers are the message:** `1,000 tok/s`, `58×`, `44GB`, `<1s`,
  `<30 seconds`. Units ride in mono next to a big light figure.
- **No emoji.** Iconography is the in-house line set or the isometric
  illustration library. Punchy fragments over full paragraphs.
- **Example CTAs:** "Get started", "Read the docs", "View benchmarks", "Talk to
  sales", "Explore the WSE-3".

---

## VISUAL FOUNDATIONS

- **Color:** warm-neutral world — near-black **ink `#1A1A1A`** and **cream
  paper `#F7F5F2 / #ECE8E4`** carry almost everything, with a single electric
  **orange `#F15A29`** as the only loud accent. A small accent set (green, two
  teals, lilac, peach) appears in editorial labels and the illustrations.
  Hover/active orange shifts to `#F74E11`.
- **Type:** **Manrope** for everything human — *Light (300)* for big display
  (64–100px, line-height ≈0.92, tracking −0.02em), *Medium (500)* for body.
  **Sometype Mono** *SemiBold (600)* for all UI furniture (buttons, eyebrows,
  labels, metrics, dates), uppercase, +0.02em tracking.
- **Corners are sharp.** Buttons, chips, inputs and cards use a **2px** radius.
  Large feature/media blocks use 24–40px; the floating nav is a full pill.
- **Backgrounds:** flat cream or ink. Section feature blocks are rounded
  (40px) cream or ink panels with generous padding. Real photography is warm —
  the gold WSE wafer macro and abstract orange/black 3D renders. Imagery is
  often masked with a horizontal gradient fade into a dark panel.
- **Cards:** flat, hairline-bordered on light; solid `#262626` (with a subtle
  grid "chip surface" texture in the source) on dark. Restrained warm shadows
  only on hover (lift −2/3px).
- **Borders:** 1px hairlines at `rgba(0,0,0,0.12)` on light,
  `rgba(255,255,255,0.14)` on dark.
- **Motion:** quick and understated — 120–200ms, ease-out
  `cubic-bezier(.22,1,.36,1)`. Hover = color shift / slight lift; press =
  `scale(0.98)`. No bouncy or decorative looping animation.
- **Transparency/blur:** the header is a translucent white pill with a 60px
  backdrop blur, floating over content.

### Campaign & social system

The marketing/event/social layer (from `socials.fig`) runs a deliberately
**louder** variant of the brand:
- **Display type is Manrope _Bold_ (700), UPPERCASE**, centered, line-height 0.9,
  tracking −0.02em — e.g. *"THE WORLD'S BIGGEST CHIP"*, *"THIS IS BIG."*,
  *"EXPERIENCE INSTANT AI"*. (The website uses Manrope _Light_ for display; the
  campaign uses Bold. Both are correct in their context.)
- **Signature backdrop:** the orange-glow gradient — a deep brown base
  (`#2C0B02`) lit by two warm radial glows (`#F17929`, `#F15429`) from the top
  (`--gradient-display`). White logo anchored bottom-center.
- Event/keynote slides pair a white image panel with a solid-orange text panel
  ("THIS IS BIG."). Signage stacks a white headline block, an orange time/place
  bar, then a pixelated/halftone image.
- → `components/social/SocialPost` (square / portrait / story / landscape / wide)
  and `components/social/DisplayAd` — the paid **web-banner** surface at IAB
  standard units (leaderboard 728×90, super-leaderboard 970×90, billboard
  970×250, medium-rectangle 300×250, half-page 300×600, skyscraper 160×600,
  large-mobile 320×100, mobile-leaderboard 320×50). Short/wide units row the
  headline + logo; tall units stack headline → image → CTA → logo.
  Plus `assets/mockups/` (real web, stage and signage renders + a brand-motion
  video).

---

## ICONOGRAPHY

- **In-house line icons.** Cerebras ships its own simple 24×24 line/solid icon
  set (arrow-right, chevron-down, close, copy, download, menu, minus, plus,
  search, triangle-up). They paint with `currentColor`. → `assets/icons/`
  (`icon-data.js` + `<Icon name="…" />`). The signature **arrow-right** appears
  on most CTAs and "read more" links.
- **Isometric illustration library.** The brand's distinctive asset: black /
  white / orange 3D line-art marks (server racks, model towers, magnifying
  glass, chess knight, books, grids with orange cubes). → `assets/illustrations/`
  (PNGs + `<Illustration name="…" />`). Use these — never redraw them.
- **No emoji, no unicode glyphs as icons.** Mono `//` and `→` are used as
  typographic marks.
- **Logo:** the spiral "concentric c" symbol + lowercase `cerebras` wordmark,
  as a single brand vector (`assets/logo/`, `<Logo />`).

---

## INDEX — what's in this folder

**Foundations**
- `styles.css` — global entry (import this one file). `@import`s the tokens.
- `tokens/colors.css` · `typography.css` · `spacing.css` · `fonts.css`

**Assets** (`assets/`)
- `logo/` — full lockup + wordmark SVGs
- `icons/` — `Icon.jsx`, `icon-data.js` (10 UI icons)
- `illustrations/` — 8 isometric brand PNGs + `Illustration` wrapper
- `imagery/` — WSE wafer macro + abstract orange renders
- `mockups/` — real brand-in-the-wild renders (web hero, event stage, signage) + brand-motion video
- `textures/` — the chip-surface grid graphic

**Components** (`components/`)
- `core/` — Button, IconButton, Label, Tag, Chip, Badge, Input
- `cards/` — Card, ArticleCard, StatCard
- `navigation/` — Navigation (site header), Footer
- `brand/` — Logo, Illustration
- `social/` — SocialPost (campaign / social-ad surface), DisplayAd (IAB web banners)
- `charts/` — the graph library (BarChart, HorizontalBarChart, PieChart, LineChart, ScatterChart, StackedColumnChart, GanttChart). Themed via
  `tokens/charts.css` (`dark-gradient` / `dark-orange` / `light`, set with a
  `theme` prop). Their stories carry `title: 'Charts/<Name>'`, grouping all
  seven under one "Charts" folder in the Storybook sidebar instead of
  scattering them alphabetically among the other components — give a new
  chart story the same `title` pattern. See the "Chart library" section
  below (both the per-chart rundown and the rules) before adding a new
  chart type or story.

**UI kit** (`ui_kits/website/`)
- `index.html` — interactive Cerebras marketing homepage recreation
  (Hero, Stats, Features, Newsroom, CTA + nav/footer)

**Guidelines** (`guidelines/`) — foundation specimen cards for the Design
System tab (colors, type, spacing, brand).

**Usage:** the compiler bundles every component into `_ds_bundle.js` and exposes
them on `window.CerebrasDesignSystem_0bbfb2`. In an HTML page, link `styles.css`, load
`_ds_bundle.js`, then `const { Button } = window.CerebrasDesignSystem_0bbfb2`.

---

## Chart library

### Chart types at a glance

- **BarChart** — grouped vertical bars, Cerebras vs. a competitor per
  category (`competitorValue` optional for a single-series chart). Per-
  category `logo` (an image URL, or a real `File`/`Blob` straight from an
  `<input type="file">`) renders above the category label; the legend
  auto-hides once any category has a logo, since the logos already
  identify each bar. Per-category `cerebrasFill`/`competitorFill`
  overrides.
- **HorizontalBarChart** — ranked-list format. Per-row `fill` override; see
  its `Monochrome`/`MultiLevel` stories for the same data shape restyled
  two different ways.
- **PieChart** — generalized N-segment donut. The first (or
  `cerebras`-flagged) segment is always flat orange; the rest cycle
  through the multi-level ramp (`--graph-level-1/2/3`).
- **LineChart** — trend-over-size format, any number of series/points. The
  draw-in animation runs on the Web Animations API, not a CSS transition —
  see the gotcha below before touching it. `variant="area"` fills the band
  between each series and the one before it (lowest series to baseline)
  for a growth/forecast-comparison "wedge" chart — only reads correctly
  when every series shares the same x values and is given lowest-to-
  highest with no crossing.
- **ScatterChart** — x/y scatter ("Intelligence vs. Speed" format). Entrance
  animation is two-phase: dots pop in first with a randomized (shuffled)
  stagger, then labels sweep in left-to-right by x-position, sliding out
  from inside their own dot rather than just fading in place.
- **StackedColumnChart** — cost/composition breakdown. Segment colors are
  an auto-generated N-step ramp (light→dark) instead of a fixed palette;
  columns default to the orange family and opt into the neutral ramp via
  `competitor: true`.
- **GanttChart** — cascading process-timeline format (phase `groups`, each
  with stacked `rows` of non-overlapping `tasks`). No Figma spec exists for
  this one — it was translated from a reference screenshot the same way
  `StackedColumnChart` was: the reference's own per-phase rainbow hues
  became a single orange ramp (lighter for earlier phases, full-strength
  for the last), with an optional neutral `tone: "meta"` chip for a
  bookend marker that isn't itself a working phase. A task's label spills
  outside its bar toward whichever side has more room when it's too
  narrow to fit inline.

### Rules

The Figma benchmark charts are reference *content*, not a spec to hardcode
against. A client's real data won't match the row/bar/category count in
whatever mock we built the component from — a chart tuned to exactly 3
categories or 2 series is a demo, not a component. Every chart type must:

- Accept an arbitrary-length `categories`/`rows`/`items` array — never assume
  a fixed count. Test each new chart type with both 2 items and 15+ before
  calling it done (see `BarChart`'s `ManyCategories` story for the pattern).
- Size elements (bar width, row height, etc.) relative to how many items
  there are, with a max cap so a 2-item chart doesn't look absurd, and a
  floor + horizontal-scroll fallback so a 30-item chart doesn't squeeze into
  illegibility. Never a value hardcoded to "looks right for the demo data."
- Make series optional where the design allows it (e.g. `BarChart`'s
  `competitorValue` is optional per category — omit it everywhere for an
  all-Cerebras, single-series chart). Don't force a shape the client's data
  doesn't have.
- Treat exact Figma pixel values (padding, radius, gaps) as the thing to
  match — but the *dataset* in that Figma frame as one example among many,
  not a schema.
- Never hardcode which series gets which color. The same chart type can be
  monochrome (every bar the same color), two-tone (Cerebras vs. a single
  competitor fill — the default), or a distinct color per bar (the
  multi-level ramp tokens `--graph-level-1/2/3`, or any per-item CSS color) —
  the caller's dataset decides, not the component. Give every chart type a
  per-item `fill`-style override (see `BarChart`'s `cerebrasFill`/
  `competitorFill` and `HorizontalBarChart`'s `fill`) that falls back to the
  theme default when omitted, so the default two-tone behavior still works
  with zero configuration. See `HorizontalBarChart`'s `Monochrome` and
  `MultiLevel` stories for the pattern — both came from the same Figma
  frame as the default two-tone chart, just a different color choice on the
  same data shape.
- Never size a stacked/proportional element with CSS `flex-grow` set
  directly from a raw data value (e.g. `flex: ${dollarValue} 0 0` for a
  0.07/0.09/0.2-scale value). Verified this hits a real browser sizing
  quirk — segments render at roughly `value ×` their intended height
  instead of being normalized against their siblings' sum, leaving the
  shortfall as blank space stacked at the container's end (in
  `StackedColumnChart`, this showed up as bars not reaching the baseline).
  Compute an explicit pixel size (`(value / total) * containerSize`) and
  set `height`/`width` directly instead — see `StackedColumnChart`'s
  segment sizing for the pattern.
- Never set an SVG element's `fill`/`stroke` attribute to one of the
  gradient tokens (`--graph-cerebras-fill`, `--graph-competitor-fill`, and
  their `-h` variants) — they hold CSS `linear-gradient(...)` values,
  valid for an HTML element's `background` (how `BarChart`/
  `StackedColumnChart` use them) but not for SVG paint, which silently
  drops to black on an unparseable value. `LineChart`'s `variant="area"`
  hit this; it uses flat colors (`var(--orange)` / `--graph-line-
  secondary`) with `fillOpacity` instead for its area fills.
- Never animate SVG `stroke-dashoffset` (a line-draw-in effect) with a
  plain CSS `transition` on a React inline style. Verified with
  `element.getAnimations()` that the browser can silently never register
  the transition at all — the value jumps straight from its start to its
  end state with nothing animating in between, even across a double-rAF
  gap meant to guarantee an intervening painted frame. Use the Web
  Animations API instead (`element.animate([...], {...})`) — it's
  imperative and starts deterministically without needing the browser to
  detect a value change across a paint boundary. See `LineChart`'s draw-in
  for the pattern. Plain CSS transitions remain fine for opacity/transform
  (every other chart's entrance animation uses them without issue) — this
  gotcha is specific to `stroke-dashoffset`.
- Never give a per-item logo/icon its own distinct brand-lookup color
  (each competitor's real-world logo color, a generated rainbow, etc.) —
  even just for a small avatar/monogram next to a bar. `BarChart`'s
  `WithLogos` story did this (a different hex per competitor) and it
  quietly broke the same two-tone rule above: Cerebras is the one loud
  color, everything else is the *same* neutral, full stop, with no
  exception for decorative elements that aren't the bar itself.

## Caveats

- **Fonts** load from Google Fonts (Manrope + Sometype Mono are the exact
  brand families — no substitution).
- **Illustrations** are PNGs captured from the Figma vectors (~280px wide); crisp
  at feature sizes, soft if scaled much larger. Ask for source SVG/Lottie if you
  need them larger.
- The Figma's *Variables* collection was a stale pink/dark template unrelated to
  the live brand; tokens here come from the actual screens, not those variables.
