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

**UI kit** (`ui_kits/website/`)
- `index.html` — interactive Cerebras marketing homepage recreation
  (Hero, Stats, Features, Newsroom, CTA + nav/footer)

**Guidelines** (`guidelines/`) — foundation specimen cards for the Design
System tab (colors, type, spacing, brand).

**Usage:** the compiler bundles every component into `_ds_bundle.js` and exposes
them on `window.CerebrasDesignSystem_0bbfb2`. In an HTML page, link `styles.css`, load
`_ds_bundle.js`, then `const { Button } = window.CerebrasDesignSystem_0bbfb2`.

---

## Caveats

- **Fonts** load from Google Fonts (Manrope + Sometype Mono are the exact
  brand families — no substitution).
- **Illustrations** are PNGs captured from the Figma vectors (~280px wide); crisp
  at feature sizes, soft if scaled much larger. Ask for source SVG/Lottie if you
  need them larger.
- The Figma's *Variables* collection was a stale pink/dark template unrelated to
  the live brand; tokens here come from the actual screens, not those variables.
