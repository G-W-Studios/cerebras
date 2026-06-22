---
version: "1.0"
name: cerebras-design-spec
description: |
  Cerebras is an AI infrastructure company whose visual identity is built on the
  tension between industrial warmth and raw computational power. The interface
  feels like a precision instrument printed on warm paper — near-black ink
  (#1A1A1A) and cream stock (#F7F5F2) carry almost everything, with a single
  electric orange (#F15A29) reserved exclusively for the primary call to action
  and brand-accent moments. The result reads as confident, benchmark-driven, and
  technically credible without ever feeling cold.

  Two typefaces do all the work: Manrope Light (300) handles big display moments
  at tight line-height (0.92) and aggressive negative tracking (−0.02em),
  projecting scale and authority. Sometype Mono SemiBold (600) handles every
  piece of UI furniture — buttons, eyebrows, labels, metrics, dates — always
  uppercase, always tracked wide (+0.02em), echoing the code-adjacent culture of
  the audience. Corners are deliberately sharp: the canonical radius is 2px on
  all controls and cards. Large feature blocks get 40px; the floating nav is a
  full pill. The surface temperature is warm-neutral: cream paper, not white.

  An AI generating new assets for this brand must preserve: the 2px canonical
  radius on all interactive elements and cards; Manrope Light (never Bold) for
  display headlines on the website; Sometype Mono uppercase for all UI labels
  and CTAs; the single-orange discipline (one accent per band, never decorative);
  the warm cream-and-ink palette with no other loud chromatic colors on the web
  surface. The campaign layer (social, event, display ads) is a deliberate
  variant — Manrope Bold, uppercase, with the deep-brown orange-glow gradient
  backdrop. Both modes are correct; they must not bleed into each other.

colors:
  # Core neutrals (warm-grey ramp)
  ink: "#1A1A1A"               # primary text + dark surfaces
  ink-900: "#262626"           # raised dark surface
  grey-800: "#333332"
  grey-700: "#4D4C4B"
  grey-600: "#5F5E5C"
  grey-500: "#807E7D"          # warm secondary text
  grey-400: "#B3B1AF"
  grey-300: "#CCCAC8"          # hairline / disabled
  grey-200: "#E6E6E6"
  grey-100: "#F6F6F6"
  white: "#FFFFFF"
  black: "#000000"

  # Warm paper (signature cream backgrounds)
  paper: "#ECE8E4"             # cream section background
  paper-50: "#F7F5F2"         # default page background
  paper-25: "#FBFAF9"         # near-white warm

  # Brand orange — ONE job: primary CTA and brand accent
  orange: "#F15A29"            # primary brand — CTAs, focus rings, links
  orange-600: "#F15A24"        # solid fill variant
  orange-bright: "#F74E11"     # active/pressed state
  orange-400: "#FD962E"        # warm light accent (illustrations only)
  orange-100: "#FFE8DF"        # pale orange wash

  # Accent palette (illustrations, editorial labels — never UI controls)
  green: "#90D729"
  teal-900: "#1C3B3E"
  teal-300: "#82C7D4"
  purple-300: "#B086E7"
  maroon-900: "#5C1A11"

  # Campaign / display gradient (social, event screens, display ads)
  display-base: "#2C0B02"
  display-glow-1: "#F17929"
  display-glow-2: "#F15429"

  # Semantic aliases
  bg: "#F7F5F2"                # default page background (= paper-50)
  bg-cream: "#ECE8E4"          # alternating cream sections (= paper)
  surface: "#FFFFFF"           # cards on cream
  surface-dark: "#1A1A1A"      # dark hero / footer (= ink)
  text-primary: "#1A1A1A"      # = ink
  text-secondary: "#807E7D"    # = grey-500
  text-tertiary: "#B3B1AF"     # = grey-400
  text-on-dark: "#FFFFFF"
  text-accent: "#F15A29"       # = orange
  border: "rgba(0,0,0,0.12)"   # hairline on light
  border-strong: "rgba(0,0,0,0.24)"
  border-on-dark: "rgba(255,255,255,0.14)"

typography:
  display-2xl:
    fontFamily: "Manrope"
    fontSize: "100px"
    fontWeight: 300
    lineHeight: 0.92
    letterSpacing: "-0.02em"

  display-xl:
    fontFamily: "Manrope"
    fontSize: "80px"
    fontWeight: 300
    lineHeight: 0.92
    letterSpacing: "-0.02em"

  display-lg:
    fontFamily: "Manrope"
    fontSize: "64px"
    fontWeight: 300
    lineHeight: 0.92
    letterSpacing: "-0.02em"

  h1:
    fontFamily: "Manrope"
    fontSize: "48px"
    fontWeight: 400
    lineHeight: 1.05
    letterSpacing: "-0.01em"

  h2:
    fontFamily: "Manrope"
    fontSize: "36px"
    fontWeight: 400
    lineHeight: 1.15
    letterSpacing: "-0.01em"

  h3:
    fontFamily: "Manrope"
    fontSize: "32px"
    fontWeight: 400
    lineHeight: 1.15
    letterSpacing: "-0.01em"

  h4:
    fontFamily: "Manrope"
    fontSize: "24px"
    fontWeight: 500
    lineHeight: 1.30
    letterSpacing: "normal"

  body-lg:
    fontFamily: "Manrope"
    fontSize: "20px"
    fontWeight: 500
    lineHeight: 1.40
    letterSpacing: "-0.01em"

  body-md:
    fontFamily: "Manrope"
    fontSize: "16px"
    fontWeight: 500
    lineHeight: 1.50
    letterSpacing: "-0.01em"

  body-sm:
    fontFamily: "Manrope"
    fontSize: "14px"
    fontWeight: 500
    lineHeight: 1.50
    letterSpacing: "-0.01em"

  eyebrow:
    fontFamily: "Sometype Mono"
    fontSize: "13px"
    fontWeight: 600
    lineHeight: 1.00
    letterSpacing: "0.02em"
    textTransform: "uppercase"
    # Often prefixed with "// " to echo code syntax

  eyebrow-wide:
    fontFamily: "Sometype Mono"
    fontSize: "13px"
    fontWeight: 600
    lineHeight: 1.00
    letterSpacing: "0.06em"
    textTransform: "uppercase"

  button-md:
    fontFamily: "Sometype Mono"
    fontSize: "13px"
    fontWeight: 600
    lineHeight: 1.00
    letterSpacing: "0.02em"
    textTransform: "uppercase"

  button-lg:
    fontFamily: "Sometype Mono"
    fontSize: "14px"
    fontWeight: 600
    lineHeight: 1.00
    letterSpacing: "0.02em"
    textTransform: "uppercase"

  label:
    fontFamily: "Sometype Mono"
    fontSize: "13px"
    fontWeight: 600
    lineHeight: 1.00
    letterSpacing: "0.02em"
    textTransform: "uppercase"

  caption:
    fontFamily: "Sometype Mono"
    fontSize: "12px"
    fontWeight: 600
    lineHeight: 1.00
    letterSpacing: "0.02em"
    textTransform: "uppercase"

  campaign-display:
    fontFamily: "Manrope"
    fontSize: "clamp(32px, 10.8vw, 80px)"
    fontWeight: 700
    lineHeight: 0.90
    letterSpacing: "-0.02em"
    textTransform: "uppercase"
    # Campaign / social / event only — never on website

rounded:
  xs: "2px"      # CANONICAL — buttons, chips, inputs, cards, badges
  sm: "4px"
  md: "8px"
  lg: "16px"
  xl: "24px"
  2xl: "40px"    # large feature / hero blocks
  pill: "100px"  # floating nav bar
  full: "999px"

spacing:
  1: "2px"
  2: "4px"
  3: "6px"
  4: "8px"
  5: "12px"
  6: "16px"
  7: "20px"
  8: "24px"
  10: "32px"
  12: "40px"
  16: "48px"
  20: "64px"
  24: "80px"
  32: "120px"
  container-max: "1600px"
  container-pad: "48px"
  section-gap: "120px"

motion:
  duration-fast: "120ms"
  duration-base: "200ms"
  duration-slow: "360ms"
  easing-out: "cubic-bezier(0.22, 1, 0.36, 1)"
  easing-in-out: "cubic-bezier(0.65, 0, 0.35, 1)"
  active-scale: "0.98"

components:
  # Note: hover states are NOT documented. Default and active/pressed states only.
  # One {colors.orange} CTA per viewport band maximum.

  button-primary:
    backgroundColor: "{colors.orange}"
    textColor: "{colors.ink}"
    typography: "{typography.button-md}"
    rounded: "{rounded.xs}"
    padding: "16px 20px"
    border: "none"
    icon: "arrow-right (optional, right-aligned)"

  button-primary-active:
    backgroundColor: "{colors.orange-bright}"
    transform: "scale(0.98)"

  button-dark:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.white}"
    typography: "{typography.button-md}"
    rounded: "{rounded.xs}"
    padding: "16px 20px"
    border: "none"

  button-dark-active:
    backgroundColor: "{colors.grey-800}"
    transform: "scale(0.98)"

  button-light:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    typography: "{typography.button-md}"
    rounded: "{rounded.xs}"
    padding: "16px 20px"
    border: "none"

  button-light-active:
    backgroundColor: "{colors.grey-200}"
    transform: "scale(0.98)"

  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.button-md}"
    rounded: "{rounded.xs}"
    padding: "15px 19px"
    border: "1px solid {colors.border-strong}"

  button-outline-active:
    backgroundColor: "{colors.paper}"
    transform: "scale(0.98)"

  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.button-md}"
    rounded: "{rounded.xs}"
    padding: "15px 19px"
    border: "none"

  button-ghost-active:
    backgroundColor: "{colors.paper}"

  card-light:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text-primary}"
    rounded: "{rounded.xs}"
    border: "1px solid {colors.border}"
    shadow: "none"
    padding: "24px"

  card-cream:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.text-primary}"
    rounded: "{rounded.xs}"
    border: "none"
    shadow: "none"
    padding: "24px"

  card-dark:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.text-on-dark}"
    rounded: "{rounded.xs}"
    border: "none"
    shadow: "none"
    padding: "24px"

  card-interactive-active:
    transform: "translateY(-2px)"
    shadow: "0 8px 24px rgba(26,26,26,0.08)"

  stat-card:
    # Brand-signature component: the benchmark metric display
    # Value: Manrope Light, 64px, line-height 0.95, ink or orange
    # Unit: Sometype Mono SemiBold, 24px, beside value baseline-aligned
    # Label: Sometype Mono SemiBold, 12px, uppercase, grey-500
    padding: "32px"
    rounded: "{rounded.xs}"
    backgroundColor: "{colors.surface}"
    border: "1px solid {colors.border}"

  stat-card-dark:
    backgroundColor: "{colors.ink}"
    border: "none"

  chip-default:
    backgroundColor: "transparent"
    textColor: "{colors.grey-600}"
    typography: "{typography.caption}"
    rounded: "{rounded.xs}"
    padding: "8px 12px"
    border: "1px solid {colors.border}"

  chip-selected:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.white}"
    border: "1px solid {colors.ink}"

  badge-orange:
    backgroundColor: "{colors.orange}"
    textColor: "{colors.ink}"
    typography: "{typography.caption}"
    rounded: "{rounded.xs}"
    padding: "0 6px"
    height: "20px"

  badge-dark:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.white}"

  badge-neutral:
    backgroundColor: "{colors.grey-200}"
    textColor: "{colors.grey-700}"

  label-category:
    # Editorial content labels: Blog / News / Press Release / Event / Whitepaper
    # Each category has a fixed color (see Label.jsx for the full map)
    # blog: #FF985D on ink · news: purple-300 on white · event: #A2E930 on ink
    typography: "{typography.label}"
    rounded: "{rounded.xs}"
    padding: "6px 7px"

  input-default:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text-primary}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.xs}"
    padding: "0 12px"
    height: "44px"
    border: "1px solid {colors.border}"

  input-focus:
    border: "1px solid {colors.orange}"

  navigation:
    # Floating pill header — the signature brand navigation treatment
    backgroundColor: "rgba(255,255,255,0.80)"
    backdropFilter: "blur(60px)"
    rounded: "{rounded.pill}"
    border: "1px solid {colors.border}"
    padding: "20px 32px"
    # Logo left · nav links center · search icon + login + CTA right

  hero-band-dark:
    backgroundColor: "{colors.ink}"
    rounded: "{rounded.2xl}"
    margin: "12px"
    # Warm photography right half, gradient-masked left-to-right
    # Eyebrow: orange mono · Headline: Manrope Light 80px · Lead: white 70% opacity

  hero-band-campaign:
    background: "var(--gradient-display)"
    # Deep brown base (#2C0B02) with two orange radial glows from top
    # Headline: Manrope Bold, uppercase, 0.9 line-height · Logo: white, bottom-center

  feature-block:
    backgroundColor: "{colors.paper}"
    rounded: "{rounded.2xl}"
    padding: "80px"

  feature-block-dark:
    backgroundColor: "{colors.ink}"
    rounded: "{rounded.2xl}"
    padding: "80px"

  social-post:
    # The Cerebras campaign social surface
    background: "var(--gradient-display)"
    rounded: "{rounded.xs}"
    # Headline: {typography.campaign-display} in white
    # Eyebrow: Sometype Mono 0.06em wide tracking, white 85% opacity, centered
    # Logo: white, bottom-center, ~6% of frame width
    # Supported formats: square 1:1 · portrait 4:5 · story 9:16 · landscape 16:9 · wide 1.91:1

  ex-pricing-tier:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.xs}"
    border: "1px solid {colors.border}"
    padding: "32px"
    typography: "{typography.body-md}"

  ex-pricing-tier-featured:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.white}"
    border: "none"
    padding: "32px"

  ex-modal-card:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.xs}"
    border: "1px solid {colors.border}"
    shadow: "0 16px 48px rgba(26,26,26,0.12)"
    padding: "40px"

  ex-auth-form-card:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.xs}"
    border: "1px solid {colors.border}"
    padding: "40px"

  ex-data-table-cell:
    fontFamily: "Sometype Mono"
    fontSize: "12px"
    fontWeight: 600
    letterSpacing: "0.02em"
    borderBottom: "1px solid {colors.border}"
    padding: "12px 16px"

  ex-app-shell-row:
    backgroundColor: "{colors.surface}"
    borderBottom: "1px solid {colors.border}"
    padding: "16px 24px"

  ex-empty-state-card:
    backgroundColor: "{colors.paper}"
    rounded: "{rounded.xs}"
    border: "none"
    padding: "64px"

  ex-toast:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.white}"
    rounded: "{rounded.xs}"
    padding: "12px 16px"
    shadow: "0 8px 24px rgba(26,26,26,0.12)"

  ex-badge-pill:
    backgroundColor: "{colors.orange-100}"
    textColor: "{colors.orange-bright}"
    typography: "{typography.caption}"
    rounded: "{rounded.xs}"
    padding: "4px 8px"

  ex-section-eyebrow:
    typography: "{typography.eyebrow}"
    textColor: "{colors.orange}"
    marginBottom: "24px"
    # Often prefixed: "// SECTION LABEL"
---

## Brand Essence

Cerebras occupies a rare position in AI infrastructure: it builds hardware nobody else builds — the Wafer-Scale Engine, a chip 58× larger than any GPU — and a cloud that serves frontier models at speeds that feel instant. The visual identity reflects that position through restraint and precision rather than flash. Near-black ink and cream paper carry everything; the interface looks like a premium technical document printed on warm stock, not a startup landing page. One electric orange handles the entire burden of vibrancy. Nothing else is allowed to compete with it.

Every typographic decision signals audience. Manrope Light at 80px with -0.02em tracking is for the number that stops you — "1,000 Tokens per Second", "58×", "44GB". Sometype Mono uppercase handles everything that labels, categorizes, or calls to action. The split is absolute: display headlines are always Manrope Light (website) or Manrope Bold (campaign), never the reverse. UI furniture is always Sometype Mono uppercase, never Manrope. Corners are 2px — deliberately, almost aggressively square — because the brand is built around performance and precision, not approachability. The pill nav is the one deliberate softness, and it floats above the content on a backdrop blur.

For an AI generating new Cerebras assets: read the orange discipline first. One `{colors.orange}` element per viewport band. It is the CTA color and nothing else on the web surface. Manrope Light headlines at tight line-height are non-negotiable. The 2px canonical radius (`{rounded.xs}`) applies to every interactive element and card. The campaign gradient (`--gradient-display`) is a separate visual mode for social, event, and display ad surfaces — do not use it on web pages. Warm photography (the gold WSE wafer macro, orange/black 3D renders) is the correct imagery language; do not substitute cool-toned stock.

---

## Logo

The Cerebras logo is the spiral "concentric c" symbol paired with the lowercase `cerebras` wordmark in a single lockup. The symbol and wordmark are always used together unless there is a strict size or crop constraint. Assets live in `assets/logo/` — use the SVG source directly, never redraw or approximate.

**Variants:**

| Variant | Use case |
|---|---|
| Full lockup (symbol + wordmark) | Default on all surfaces |
| Symbol only (concentric c) | Favicon, app icon, extreme crop |
| Reversed (white) | On dark surfaces and the campaign gradient |
| Ink (dark) | On cream and light surfaces |

**Clearspace:** minimum clearance equal to the cap-height of the wordmark on all sides.

**Minimum size:** wordmark legible at no less than 80px wide in digital; 20mm in print.

**Never:** recolor the logo outside ink and white variants; add drop shadows or effects; stretch, compress, or rotate; place on a surface where contrast falls below 4.5:1; separate the symbol from the wordmark on marketing materials.

---

## Colors

### Background & Surface

The canvas is warm-neutral — `{colors.paper-50}` (#F7F5F2) is the default page background, a barely-perceptible cream. Section alternation uses `{colors.paper}` (#ECE8E4), a more readable cream step. White (`{colors.surface}`) is reserved for card surfaces that sit on top of cream to create a subtle lift. The dark polarity is `{colors.ink}` (#1A1A1A), used for hero sections, footers, and full dark-tone feature blocks. The system cycles: cream page → white card, or ink panel → paper card. Never place a white card on a white background.

### Text

`{colors.text-primary}` (ink, #1A1A1A) for all high-emphasis text. `{colors.text-secondary}` (warm grey-500, #807E7D) for supporting copy and metadata. `{colors.text-tertiary}` (grey-400, #B3B1AF) for disabled and de-emphasized states. On dark surfaces, `{colors.text-on-dark}` (white) at full opacity and `rgba(255,255,255,0.64)` for secondary on dark.

### Brand & Action

`{colors.orange}` (#F15A29) is the only chromatic action color. Its job is: primary CTA buttons, focus rings, active link states, and the eyebrow accent stripe on dark hero sections. It does one job on one element per band. The active/pressed state is `{colors.orange-bright}` (#F74E11) — never used for a default state. `{colors.orange-100}` (#FFE8DF) is the pale wash for tag/pill backgrounds only.

**Accent boundary:** `{colors.orange}` is never used as a success indicator, a warning, an error state, a background fill, a decorative border, or a text highlight on body copy. If you are tempted to add orange to something that is not a CTA or an eyebrow label, the answer is no.

### Accent palette (illustration and editorial only)

`{colors.green}`, `{colors.teal-300}`, `{colors.purple-300}` appear in the isometric illustration library and the editorial category label system (Blog, News, Event, etc.). They are never used in UI controls, buttons, or section backgrounds on the main web surface.

---

## Typography

### Manrope

Manrope is a geometric sans-serif with humanist details — it reads with warmth at body sizes and with authority at display sizes. Chosen because its Light (300) weight at large size has an almost editorial thinness that makes performance numbers feel like statements of fact, not marketing. Available on Google Fonts (open license, no substitution required). Default fallback: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif`. Manrope handles all editorial, heading, and body roles on the web. **When NOT to use:** never use Manrope for buttons, eyebrows, labels, metrics, dates, or any UI furniture element — those belong exclusively to Sometype Mono.

### Sometype Mono

Sometype Mono is a monospaced typeface with technical precision. It is used at SemiBold (600), always uppercase, always with positive tracking (+0.02em minimum, +0.06em for wider eyebrows). Its uppercase mono presence signals code, data, and machine output — exactly the language Cerebras speaks. Available on Google Fonts. Fallback: `ui-monospace, "SF Mono", Menlo, Consolas, monospace`. **When NOT to use:** never use Sometype Mono for editorial body copy, article text, or headings longer than a single line. It is UI furniture only.

### Type scale

| Token | Family | Size | Weight | Line-height | Tracking |
|---|---|---|---|---|---|
| `{typography.display-2xl}` | Manrope | 100px | Light 300 | 0.92 | −0.02em |
| `{typography.display-xl}` | Manrope | 80px | Light 300 | 0.92 | −0.02em |
| `{typography.display-lg}` | Manrope | 64px | Light 300 | 0.92 | −0.02em |
| `{typography.h1}` | Manrope | 48px | Regular 400 | 1.05 | −0.01em |
| `{typography.h2}` | Manrope | 36px | Regular 400 | 1.15 | −0.01em |
| `{typography.h3}` | Manrope | 32px | Regular 400 | 1.15 | −0.01em |
| `{typography.h4}` | Manrope | 24px | Medium 500 | 1.30 | normal |
| `{typography.body-lg}` | Manrope | 20px | Medium 500 | 1.40 | −0.01em |
| `{typography.body-md}` | Manrope | 16px | Medium 500 | 1.50 | −0.01em |
| `{typography.body-sm}` | Manrope | 14px | Medium 500 | 1.50 | −0.01em |
| `{typography.eyebrow}` | Sometype Mono | 13px | SemiBold 600 | 1.00 | +0.02em |
| `{typography.eyebrow-wide}` | Sometype Mono | 13px | SemiBold 600 | 1.00 | +0.06em |
| `{typography.button-md}` | Sometype Mono | 13px | SemiBold 600 | 1.00 | +0.02em |
| `{typography.button-lg}` | Sometype Mono | 14px | SemiBold 600 | 1.00 | +0.02em |
| `{typography.label}` | Sometype Mono | 13px | SemiBold 600 | 1.00 | +0.02em |
| `{typography.caption}` | Sometype Mono | 12px | SemiBold 600 | 1.00 | +0.02em |
| `{typography.campaign-display}` | Manrope | clamp(32px, 10.8vw, 80px) | Bold 700 | 0.90 | −0.02em |

### Typography rules

1. Display weights are non-negotiable: website display is Manrope Light (300), campaign display is Manrope Bold (700). Never swap these.
2. All Sometype Mono text is uppercase — no exceptions. Letter-spacing is always positive.
3. Eyebrows frequently carry the `//` prefix (`// CEREBRAS INFERENCE`, `// PURPOSE-BUILT FOR AI`) to echo code syntax. This is a brand typographic mark, not decoration.
4. Numbers are the message — surround them with minimal copy. Units (tok/s, ×, GB, ms) ride beside the figure in Sometype Mono at a smaller size, baseline-aligned.
5. Body copy maximum weight is Medium (500) — never SemiBold or Bold on Manrope paragraph text.
6. Sentence case for all Manrope headlines on the website; uppercase for all Sometype Mono UI elements and all Manrope campaign headlines.

---

## Layout

Spacing follows an 8px base. The page maximum container width is 1600px with 48px horizontal padding. Section gaps are 120px. Feature blocks (hero, dark sections, cream sections) are rounded 40px panels inset 12px from the viewport edge, creating a slight reveal of the background between sections.

| Token | Value | Use |
|---|---|---|
| `{spacing.4}` | 8px | Micro gaps (icon-to-label, badge padding) |
| `{spacing.5}` | 12px | Internal tight gaps |
| `{spacing.6}` | 16px | Base element padding |
| `{spacing.8}` | 24px | Card default padding |
| `{spacing.10}` | 32px | Section sub-gaps |
| `{spacing.12}` | 40px | Component-to-component spacing |
| `{spacing.16}` | 48px | Container pad; section header margins |
| `{spacing.20}` | 64px | Large internal padding |
| `{spacing.24}` | 80px | Section padding top/bottom (tight) |
| `{spacing.32}` | 120px | Section gap |
| `{spacing.container-max}` | 1600px | Max content width |

**Page band rhythm:** cream page background → dark (ink) hero panel → cream feature panel → ink stats panel → cream newsroom. The alternation is deliberate; cream and ink bands never repeat consecutively. Each band is a rounded panel (40px), not a full-bleed block, so the background between them reads as a reveal.

---

## Elevation & Depth

| Level | Value | Use |
|---|---|---|
| Flat | none | Default for all cards on matching background |
| Hairline | `1px solid {colors.border}` | Cards on cream or white surfaces |
| Raised | `0 8px 24px rgba(26,26,26,0.08)` | Interactive card hover lift |
| Overlay | `0 16px 48px rgba(26,26,26,0.12)` | Modals, dropdowns |
| Orange glow | `0 8px 24px rgba(241,90,41,0.24)` | Orange CTA buttons only (rare) |

The brand philosophy is intentionally flat. Shadows are a last resort, not a default. On dark surfaces (`{colors.ink}`), cards use no border and no shadow — the background contrast is the separator. Motion (the 2px lift on hover) is preferred over shadow depth.

---

## Shapes

| Token | Value |
|---|---|
| `{rounded.xs}` | 2px — **CANONICAL** |
| `{rounded.sm}` | 4px |
| `{rounded.md}` | 8px |
| `{rounded.lg}` | 16px |
| `{rounded.xl}` | 24px |
| `{rounded.2xl}` | 40px |
| `{rounded.pill}` | 100px |

**Canonical radius: `{rounded.xs}` (2px).** This is the non-negotiable shape signature of the brand. Every button, chip, input, card, badge, and tag uses 2px. The 40px radius is reserved exclusively for large hero/feature blocks. The 100px pill is used only for the floating navigation bar. Using anything other than 2px on interactive elements breaks brand coherence.

---

## Atmosphere

**Campaign gradient backdrop** — the signature environment for all social, event, display ad, and campaign surfaces. A deep near-black brown base (`{colors.display-base}`, #2C0B02) lit from the top by two overlapping warm orange radial glows (`{colors.display-glow-1}` at 140% wide, `{colors.display-glow-2}` at 115% wide). The result is an orange-fired darkness that reads as high-energy and cinematic — a deliberate contrast to the quiet cream web surface.

Production CSS: `radial-gradient(140% 120% at 24% 2%, #F17929 0%, rgba(241,121,41,0) 62%), radial-gradient(115% 100% at 35% -14%, #F15429 0%, rgba(241,84,41,0) 100%), #2C0B02`.

**Usage:** this gradient is the background for `SocialPost`, `DisplayAd`, event stage screens, and keynote slides. It is never used on web page sections, product UI, or documentation. The white Cerebras logo (reversed) anchors bottom-center on this backdrop. Headline is Manrope Bold, uppercase, white, centered.

**Web imagery:** flat cream or ink section backgrounds with warm photography inset — the gold WSE wafer macro (`assets/imagery/wafer-planview.png`) and abstract orange/black 3D renders. Photography is typically masked with a horizontal linear gradient so it fades into the dark panel edge.

---

## Components

> Hover states are not documented in this spec. Default and active/pressed states only. One `{colors.orange}` CTA per viewport band.

### button-primary
The orange primary CTA. Sometype Mono SemiBold uppercase. 2px radius. The `arrow-right` icon appears on most hero and section CTAs, right-aligned. Text is near-black (`{colors.ink}`) on orange so the contrast reads correctly. Padding `16px 20px` (md) or `20px 28px` (lg).

### button-dark
Ink background, white text. Used on cream backgrounds as the secondary strong action. Same mono uppercase treatment.

### button-light
Cream fill, ink text. Used on dark backgrounds for secondary actions alongside a primary orange button.

### button-outline
Transparent background, `{colors.border-strong}` hairline. On dark hero sections, the border shifts to `rgba(255,255,255,0.30)` and text is white. Paired with primary in hero CTAs ("Get started" + "View benchmarks").

### button-ghost
No background, no border. Used for nav links and supplementary actions.

### card-light / card-cream / card-dark
All cards use `{rounded.xs}` (2px). Light cards carry a hairline border on white; cream cards have no border (background is the separator); dark cards have no border on ink. The interactive variant lifts 2px on active with `{shadow-md}`.

### stat-card (brand-signature component)
The benchmark metric display. Manrope Light 64px value (or `{colors.orange}` for the hero number) beside a Sometype Mono SemiBold 24px unit. Below: a Sometype Mono caption label in `{colors.text-secondary}`. Padding 32px. Used in stats bands to present "1,000", "58×", "44GB", "<1s". This component is what distinguishes Cerebras from every other AI brand.

### chip-default / chip-selected
Filter chips for content category navigation. Sometype Mono 12px uppercase. Default: outline hairline, grey text. Selected: ink fill, white text. 2px radius throughout.

### badge
Count and status indicator. 20px height, Sometype Mono 11px, 2px radius. Tones: orange (default), dark (ink), green, neutral (grey).

### label-category
Editorial content category tags. Each category has a fixed color mapping: Blog → warm orange (#FF985D); News → purple-300; Press Release → teal-300; Event → bright green (#A2E930); Whitepaper/Publication → ink on white. All use Sometype Mono 13px uppercase, 2px radius.

### input-default / input-focus
44px height, 2px radius, hairline border default. Focus state: `{colors.orange}` border. Optional left-aligned search icon in `{colors.text-secondary}`. Manrope Medium 14px input text.

### navigation
The floating pill header. `rgba(255,255,255,0.80)` background with `backdrop-filter: blur(60px)`. `{rounded.pill}`. Logo left, nav links center, search icon + Log in + Get started CTA right. Nav link text is Manrope Medium 14px, shifts to `{colors.orange}` on interaction.

### hero-band-dark
Dark ink section with 40px radius, inset 12px from viewport. Right half: warm photography gradient-masked. Left: eyebrow in `{colors.orange}` mono, display headline in Manrope Light white, lead paragraph at 70% white opacity, two CTAs (primary + outline-white).

### hero-band-campaign
Full campaign gradient backdrop. Manrope Bold uppercase headline, centered, Sometype Mono eyebrow above, white logo bottom-center.

### feature-block / feature-block-dark
Rounded 40px section blocks at 80px padding. Alternates cream and ink. Used to frame major feature content (product explanations, illustration showcases, video embeds).

### social-post
The Cerebras campaign social surface. Campaign gradient backdrop, Manrope Bold uppercase headline scaled proportionally to frame width (~10.8% of width), optional eyebrow in wide-tracked mono, white logo bottom-center. Supports square (1:1), portrait (4:5), story (9:16), landscape (16:9), wide (1.91:1).

### ex-pricing-tier / ex-pricing-tier-featured
Standard: `{colors.surface}`, hairline border, 32px padding. Featured: `{colors.ink}`, no border, white text. Both 2px radius.

### ex-modal-card
White surface, 2px radius, overlay shadow `0 16px 48px rgba(26,26,26,0.12)`, 40px padding.

### ex-auth-form-card
White surface, hairline border, 40px padding, 2px radius. Inputs use `{components.input-default}`.

### ex-data-table-cell
Sometype Mono SemiBold 12px, `{spacing.5}` padding, `{colors.border}` bottom divider.

### ex-app-shell-row
White background, `{colors.border}` bottom divider, `16px 24px` padding.

### ex-empty-state-card
Cream fill, 2px radius, 64px padding. No border — cream on cream creates depth.

### ex-toast
Ink background, white text, 2px radius, overlay shadow, `12px 16px` padding.

### ex-badge-pill
`{colors.orange-100}` fill, `{colors.orange-bright}` text, 2px radius, Sometype Mono 12px uppercase.

### ex-section-eyebrow
Sometype Mono SemiBold 13px, `{colors.orange}`, 24px margin-bottom. Prefixed `//` on dark sections.

---

## Do's and Don'ts

**Do:**
- Use Manrope Light for all display headlines on the web (63px and above)
- Prefix eyebrows with `//` on dark/ink sections to echo the code culture
- Lead with a number or superlative — "1,000 tok/s", "58×", "15× faster" — as the headline
- Use the isometric illustration library (`assets/illustrations/`) — never redraw them
- Apply `{rounded.xs}` (2px) to every button, input, chip, card, and badge
- Use warm photography: the gold WSE wafer macro and orange/black 3D renders
- Use `{colors.orange}` exclusively as the CTA and focus ring color; one per band
- Alternate cream and ink bands; never repeat the same band tone consecutively

**Don't:**
- Use Manrope Bold for website display text (that is campaign mode only)
- Use `{colors.orange}` as a background fill for sections or as a decorative border
- Add shadows to cards by default — the brand is flat; shadows are interaction feedback only
- Use any corner radius other than 2px on interactive elements and cards
- Use the campaign gradient (`--gradient-display`) on web page sections
- Use emoji, Unicode glyphs as icons, or any icon set other than the Cerebras in-house line icons
- Mix more than two typographic levels on any social or campaign format
- Place the logo on a surface where contrast falls below 4.5:1
- Use Sometype Mono for body copy or article text
- Add chromatic accent colors (green, teal, purple) to UI controls or section backgrounds

---

## Social Media

### Platform dimensions

| Platform | Format | Dimensions | Safe zone |
|---|---|---|---|
| Instagram — Feed square | 1:1 | 1080×1080px | 80px all sides |
| Instagram — Feed portrait | 4:5 | 1080×1350px | 80px all sides |
| Instagram — Story / Reels | 9:16 | 1080×1920px | 250px top + bottom |
| LinkedIn — Feed image | 1.91:1 | 1200×628px | 60px all sides |
| LinkedIn — Portrait | 4:5 | 1080×1350px | 60px all sides |
| X (Twitter) | 1.91:1 | 1200×628px | 50px all sides |
| YouTube thumbnail | 16:9 | 1280×720px | 60px all sides |
| Display — Leaderboard | — | 728×90px | 10px |
| Display — Super leaderboard | — | 970×90px | 10px |
| Display — Billboard | — | 970×250px | 16px |
| Display — Medium rectangle | — | 300×250px | 16px |
| Display — Half page | — | 300×600px | 20px |
| Display — Skyscraper | — | 160×600px | 12px |
| Display — Large mobile | — | 320×100px | 8px |
| Display — Mobile leaderboard | — | 320×50px | 6px |

### Typography adaptation for social

Web type is too small for social — scale up aggressively. All social and campaign type uses Manrope Bold (700) uppercase, not Light:

| Web token | Social equivalent | Notes |
|---|---|---|
| `{typography.display-xl}` | 80–96px | Feed headline (square/portrait) |
| `{typography.display-lg}` | 60–80px | Compact format headline |
| `{typography.h2}` | 48px | Subhead or secondary message |
| `{typography.eyebrow}` | 24–28px | Category / eyebrow label |
| `{typography.button-md}` | 28–32px | CTA text if included |

Rule: maximum 2 typographic levels on any social format. No body paragraphs. Eyebrow + headline is the standard pattern.

### Post templates

**Announcement post (1:1 or 4:5):** Campaign gradient backdrop. Sometype Mono eyebrow centered, wide tracking, white 85% opacity. Manrope Bold uppercase headline — 3–6 words, as large as frame allows. White Cerebras logo anchored bottom-center. No additional body copy.

**Performance claim (wide 1.91:1 / LinkedIn):** Campaign gradient or dark ink backdrop. Headline leads with a number: "1,000 TOKENS PER SECOND", "58× BIGGER". Eyebrow above in orange mono. Logo bottom-center. Optionally inset the WSE wafer image at right, gradient-masked.

**Product / feature (portrait 4:5):** Gradient backdrop. Isometric illustration centered or lower half. Eyebrow at top, headline below illustration. CTA text (Sometype Mono) above logo at bottom.

**Story / Reels (9:16):** Respect 250px safe zones top and bottom. Headline in the center band. Logo at bottom within safe zone. Gradient full-bleed. No text near edges.

### Social do's and don'ts
- Always use Manrope Bold uppercase for social headlines — never Light
- Keep to one statement per format — no lists, no bullet points
- The `//` prefix works on social eyebrows: `// INSTANT AI`
- Display ads (short/wide) row the headline + logo side-by-side; tall ads stack headline → image → CTA → logo
- Never place cream or white backgrounds on social — the gradient or dark ink only
- Never use the web typeface settings (Light, sentence case) on campaign formats

---

## Presentations

### Slide dimensions

| Format | Dimensions | Use case |
|---|---|---|
| Widescreen 16:9 | 1920×1080px | Standard — projectors and screens |
| Google Slides | 1366×768px | Google Slides default |
| PowerPoint | 33.87×19.05cm | PowerPoint widescreen |
| Keynote | 1920×1080px | Keynote HD |

### Typography for slides

| Web token | Slide equivalent | Size |
|---|---|---|
| `{typography.display-xl}` | Cover title | 80–96pt |
| `{typography.display-lg}` | Cover subtitle / section title | 60–72pt |
| `{typography.h2}` | Content slide headline | 40–48pt |
| `{typography.h3}` | Subhead | 28–32pt |
| `{typography.body-lg}` | Slide body | 22–26pt |
| `{typography.body-md}` | Notes, captions | 18–20pt |
| `{typography.eyebrow}` | Section label | 16–18pt |
| `{typography.button-md}` | CTA text | 20–22pt |

Rule: no body text below 20pt. If text must shrink below this, the slide has too much — split it. Maximum 2 typographic levels per content slide.

### Slide master templates

**Cover:** Ink background (or campaign gradient for keynotes). Manrope Light headline (web register) or Bold uppercase (campaign register). Orange eyebrow above. White logo bottom-left. Optional WSE wafer image right half, gradient-masked.

**Section divider:** Cream or ink background. Large orange eyebrow or section number in Sometype Mono. Section title in Manrope 60pt. Minimal copy.

**Content (text + visual):** Cream or white background. Headline in Manrope 40pt ink. Body in Manrope Medium 22pt. Visual (illustration, diagram, or photography) occupying 50% of slide width. Logo small bottom-right.

**Data / benchmark:** Ink background. Stat card layout — big Manrope Light numbers, Sometype Mono labels. Orange accent for the hero figure. Grid of 3–4 metrics across.

**Quote / testimonial:** Cream background. Large open-quote mark in orange. Quote in Manrope Light italic 32pt. Attribution in Sometype Mono 13pt.

**Closing / CTA:** Ink or gradient background. CTA headline large and centered. Sometype Mono CTA text. Logo centered. URL or QR code.

### Presentation do's and don'ts
- Install Manrope and Sometype Mono before building — do not substitute
- Apply `{rounded.xs}` (2px) to all shape elements and callout boxes
- One orange CTA element per slide — it should be the most important action
- Keynote campaign slides use Manrope Bold uppercase (the campaign register, not website register)
- One message per slide — if it needs two ideas, it needs two slides

---

## Print

### Colour mode

Cerebras brand colors are digital-first. Key CMYK conversions (verify with physical proof before production — vibrant digital orange shifts significantly):

| Token | Hex | Approx. CMYK | Pantone |
|---|---|---|---|
| `{colors.orange}` | #F15A29 | C0 M70 Y85 K0 | PMS 1665 C |
| `{colors.ink}` | #1A1A1A | C0 M0 Y0 K90 | PMS Black 6 C |
| `{colors.paper}` | #ECE8E4 | C0 M2 Y4 K8 | — |
| `{colors.white}` | #FFFFFF | C0 M0 Y0 K0 | — |
| `{colors.green}` | #90D729 | C37 M0 Y85 K0 | PMS 375 C |

Font licensing: Manrope and Sometype Mono are open-source (Google Fonts, SIL OFL). Both carry print-safe licensing.

### Common formats

| Format | Dimensions | Bleed | Safe zone |
|---|---|---|---|
| Business card | 85×55mm | 3mm | 5mm |
| A4 letterhead | 210×297mm | 3mm | 10mm |
| A5 flyer | 148×210mm | 3mm | 8mm |
| Event banner (pull-up) | 800×2000mm | 5mm | 30mm |
| Event signage (wide) | 3000×1000mm | 10mm | 50mm |

Event signage uses the campaign register: ink or campaign gradient backdrop, Manrope Bold uppercase headline, orange time/place bar in Sometype Mono, brand photography or WSE illustration.

### Typography minimums for print
- Body: 9pt minimum · Captions / labels: 7pt minimum
- All Sometype Mono labels must remain uppercase at all print sizes

---

## Design Scaling

### What stays constant across all formats

- Brand colors: same hex values everywhere (CMYK conversion for print only)
- Canonical radius: `{rounded.xs}` (2px) on all interactive and card elements — the shape signature never changes
- Logo proportions and clearspace: never alter the lockup
- CTA scarcity: one `{colors.orange}` primary CTA per "frame" (slide, post, spread, screen)
- Accent discipline: `{colors.orange}` does the same job in every format
- Sometype Mono uppercase for all UI furniture — buttons, labels, eyebrows, metrics

### What adapts by context

- Type sizes: web 16px body → 22–26pt slide body → Sometype Mono eyebrow from 13px web to 24–28px social
- Display weight: web = Manrope Light; campaign (social, event, keynote) = Manrope Bold
- Case on display: web = sentence case; campaign = ALL CAPS
- Spacing: generous web margins compress for display ads; slides use different grid logic
- Background: web uses cream/ink alternation; social/campaign always uses the gradient or ink
- Complexity: multi-section web layouts reduce to 2-level hierarchy on social, 1 message per slide

### The "does this feel right?" test

Could someone see this and immediately say "that's Cerebras"? If it lacks the orange eyebrow, the Sometype Mono uppercase label, the sharp 2px corners, and the warm cream-or-ink surface, it is not Cerebras. If orange appears more than once in the frame, it is not Cerebras.

---

## Responsive Behavior

| Breakpoint | Width | Grid | Container pad |
|---|---|---|---|
| Mobile | < 768px | 4 columns | 20px |
| Tablet | 768–1024px | 8 columns | 32px |
| Desktop | 1024–1440px | 12 columns | 48px |
| Wide | > 1440px | 12 columns | 48px (max 1600px) |

**Collapsing strategy:**

- **Navigation:** floating pill collapses to a hamburger icon at < 768px; backdrop blur and pill radius are preserved
- **Hero:** display type steps down — `display-xl` (80px) → `h1` (48px) on mobile; WSE wafer image stacks below text on mobile
- **Stat bands:** 3–4 column grid collapses to 2-column on tablet, 1-column on mobile
- **Feature blocks:** side-by-side text + visual collapses to stacked at < 768px
- **Typography:** display sizes scale down approximately 30–40% on mobile; body and label sizes are stable at 14–16px
- **Section padding:** `{spacing.32}` (120px) section gap reduces to `{spacing.16}` (48px) on mobile

---

## Iteration Guide

When generating new Cerebras assets, read in this order:

1. Read the `description` YAML field first — it contains the continuity contract
2. Identify the surface mode: **web** (cream/ink, Manrope Light) or **campaign** (gradient, Manrope Bold uppercase)
3. Use `{colors.*}` tokens — no raw hex values outside this file
4. Check existing components before inventing new patterns — if it looks like a card, use `{components.card-light}`
5. Apply `{rounded.xs}` (2px) to every interactive element — no exceptions
6. Check "When NOT to use" for each typeface before assigning fonts
7. One `{colors.orange}` per viewport band — if tempted to add more, note it in Pending Decisions
8. Check the elevation philosophy: flat first, hairline second, shadow only on interaction

**Quick reference:**
- Canvas temperature: warm cream (`{colors.paper-50}`) or near-black ink (`{colors.ink}`)
- Canonical radius: `{rounded.xs}` = 2px — non-negotiable
- CTA rule: one orange button per band, Sometype Mono uppercase, arrow-right icon
- Display font rule: Light (300) on web, Bold (700) on campaign — never swapped
- Eyebrow rule: Sometype Mono SemiBold, uppercase, `{colors.orange}` on dark, grey-500 on light, often `//` prefixed

**Example prompts using this spec:**

*Hero section:* "Generate a hero band using `{components.hero-band-dark}`. Eyebrow: `// Cerebras Inference` in `{colors.orange}` `{typography.eyebrow}`. Headline: `1,000 Tokens per Second` in `{typography.display-xl}` white. Lead paragraph at 70% white opacity `{typography.body-lg}`. Two CTAs: `button-primary` `GET STARTED` with arrow-right icon, `button-outline` `VIEW BENCHMARKS` at white border. WSE wafer image right half, gradient-masked."

*Stat card band:* "Four-column `{components.stat-card}` grid on `{colors.paper}` background. Values in Manrope Light 64px, `{colors.orange}` for the hero number. Units in Sometype Mono 24px. Labels in `{typography.caption}` `{colors.text-secondary}`."

*LinkedIn post:* "Use `{components.social-post}` at wide (1.91:1). Campaign gradient backdrop. Eyebrow: `// INSTANT AI`. Headline: `THE WORLD'S FASTEST MODEL` in `{typography.campaign-display}` white. White logo bottom-center."

*Content slide:* "Cream background. `{typography.h2}` 44pt ink headline. `{typography.body-lg}` 24pt body, max 3 lines. Isometric illustration right 50%. Orange `{typography.eyebrow}` section label above headline. Cerebras logo bottom-right, ink variant, 80px wide."

---

## Data Visualization & Charts

Cerebras's benchmark charts are a core brand surface — the company leads with numbers, and charts are where those numbers live. The chart system is built on the same tokens as the rest of the brand: orange is Cerebras, grey is everyone else, Sometype Mono handles all labels and values, and charts exist on either the dark ink card or the light cream/white card.

### Surfaces

Charts appear in two surface modes:

**Dark card** (`{colors.ink}` background, `{rounded.xs}` radius): used for hero benchmark moments — the "AI Inference After Cerebras" treatment. Background is near-black, bar values and axis labels are white, grid lines are near-invisible dark-on-dark hairlines. This is the high-impact surface.

**Light card** (`{colors.surface}` or `{colors.paper}` background, `{rounded.xs}` radius, hairline border `{colors.border}`): used for detailed comparisons and embedded product/newsroom charts. Ink text, subtle gridlines.

### Color system for data series

The orange = Cerebras rule is absolute and non-negotiable. Every other series uses the neutral ramp. The Cerebras bar is always the tallest — if the data doesn't support this, the chart should not be shown.

| Series | Color | Token |
|---|---|---|
| Cerebras | `#F15A29` | `{colors.orange}` |
| GPU / Primary competitor | `#90D729` (green, small accent) or `#4D4C4B` | `{colors.green}` / `{colors.grey-700}` |
| Competitor 2 | `#1C3B3E` | `{colors.teal-900}` |
| Competitor 3 | `#B3B1AF` | `{colors.grey-400}` |
| Competitor 4 | `#E6E6E6` | `{colors.grey-200}` |
| Reference / target line | dashed, `{colors.grey-400}` | — |

On dark card surfaces, competitor bars use `{colors.grey-700}` and `{colors.grey-500}` respectively — the neutral ramp shifts warmer on ink.

### Chart types in use

**Vertical grouped bar chart** — the primary format. Cerebras bar dominates by height. Bars are square-cornered (`{rounded.xs}`, 2px). Values displayed directly above each bar. Used for model comparisons (tokens/sec, coding ability, output speed).

**Horizontal bar chart** — used for ranked lists ("Mistral Le Chat is the world's fastest AI assistant"). Featured/winner bar is orange and full-width. Competitor bars are grey, proportionally shorter. Values displayed to the right of each bar in Sometype Mono.

**Grouped bar chart (multi-series)** — for benchmark suites (MATH, MMLU-Pro, GPQA, CRUX). Cerebras bar is orange; each competitor gets a distinct grey from the neutral ramp. A dashed horizontal reference line can mark the target score.

**Donut / pie chart** — used sparingly. Cerebras slice is orange; other slices use the neutral ramp and accent colors (`{colors.teal-900}`, `{colors.grey-400}`, `{colors.grey-200}`). Center of donut is left empty (no total label).

**Comparison bar (inline)** — the WSE-3 vs GPU side-by-side strip. Vertical label in Sometype Mono uppercase (TOKENS/SECOND, ON-CHIP SRAM, TRANSISTOR COUNT). Orange filled bar for WSE-3 value; grey/charcoal bar for GPU. Values in Sometype Mono SemiBold. Used in feature bands and product pages, not standalone chart cards.

### Typography within charts

All chart text is Sometype Mono — no Manrope inside a chart frame.

| Element | Style | Size |
|---|---|---|
| Chart title | Manrope Medium, ink or white | `{typography.h4}` (24px web) |
| Title brand accent | `{colors.orange}` on the words "Cerebras" or "on Cerebras" | matches title |
| Subtitle / unit label | Sometype Mono SemiBold, `{colors.text-secondary}`, uppercase | 12px |
| Axis labels (x and y) | Sometype Mono SemiBold, uppercase, `{colors.text-secondary}` | 11–12px |
| Bar value labels | Sometype Mono SemiBold, ink or white, above each bar | 12–13px |
| Legend label | Sometype Mono SemiBold, uppercase, `{colors.text-secondary}` | 12px |
| Legend swatch | 8×8px square, same color as the series | — |

**Title accent rule:** when the chart title names Cerebras, the brand name or the phrase "on Cerebras" / "After Cerebras" is colored `{colors.orange}`. The rest of the title is ink (light card) or white (dark card). Example: *"GLM-4.7 on* **Cerebras** *vs. Claude 4.5 Sonnet"* — "Cerebras" in orange, everything else in ink.

### Layout and anatomy

- **Title** sits above the chart frame, left-aligned, with a unit label in smaller mono below it (e.g., `(TOKENS/S)`)
- **Legend** sits inline with the title or directly below it, left-aligned. Small color square + Sometype Mono uppercase label. Never inside the chart area.
- **Grid lines** are horizontal only. On light cards: `{colors.border}` (rgba 0,0,0,0.12) hairlines. On dark cards: near-invisible, `rgba(255,255,255,0.08)`.
- **Axes:** no visible axis lines — only the baseline (bottom of bars) as a thin 1px line in `{colors.border}`. No box frame around the chart area.
- **Bar spacing:** roughly equal bar width to gap ratio (~1:0.4). Grouped bars have tighter internal gap.
- **Value labels:** always displayed above bars (not inside). On horizontal charts, values appear to the right of each bar end.
- **All charts are animated on load and interactive.** This is a hard requirement — no static charts on the web surface.

### Chart card wrapper

Charts are always wrapped in a card:

```
card-light (for detailed/editorial charts):
  background: {colors.surface}
  border: 1px solid {colors.border}
  border-radius: {rounded.xs}
  padding: 32px

card-dark (for hero benchmark charts):
  background: {colors.ink}
  border: none
  border-radius: {rounded.xs}
  padding: 32px
```

### Animation

All charts animate on load and are interactive on hover. These are hard requirements — no static charts on the web surface.

**Load animation:** bars grow from the baseline (height 0 → full height) in sequence, left to right, with a staggered delay of ~40ms per bar. Duration per bar: 400ms. Easing: `{motion.easing-out}` (`cubic-bezier(0.22, 1, 0.36, 1)`). Horizontal bar charts animate width left to right. Donut/pie charts rotate in from 0°.

**Hover interaction:** hovering a bar or slice highlights it (full opacity) and dims all other series to 30% opacity. A tooltip appears above the hovered element showing the series name and exact value, using the Sometype Mono label treatment — dark ink card on light charts, white card on dark charts.

**Tooltip style:**
```
background: {colors.ink}          (on light surface)
background: {colors.surface}      (on dark surface)
textColor: {colors.white} / {colors.ink}
fontFamily: Sometype Mono
fontWeight: 600
fontSize: 12px
letterSpacing: 0.02em
textTransform: uppercase
borderRadius: {rounded.xs}
padding: 8px 12px
shadow: {shadow-md}
```

**No animation on reduced-motion:** respect `prefers-reduced-motion: reduce` — skip the grow animation and show bars at full height instantly, but keep hover interaction active.

### Do's and Don'ts for charts

**Do:**
- Always color the Cerebras series `{colors.orange}` — no exceptions
- Animate bars on load (grow from baseline, staggered, 400ms, easing-out)
- Make every chart interactive — hover highlights the focused series and shows a tooltip
- Display values above every bar; also show them in the tooltip on hover
- Use Sometype Mono for every text element inside the chart frame
- Highlight "Cerebras" / "on Cerebras" in orange within the chart title
- Use a dashed reference line to show the target or industry baseline
- Keep the color count at ≤4 series per chart — use the grey ramp for competitors
- Respect `prefers-reduced-motion`

**Don't:**
- Ship a static non-interactive chart on any web surface
- Use colors from the accent palette (green, teal, purple) for competitor bars — those are for the GPU series or illustration only
- Add backgrounds, gradients, or rounded corners to individual bars
- Place Cerebras bars anywhere but left or first in a group — the eye should read Cerebras first
- Use pie charts for anything where the Cerebras share is not dominant — donut/pie only works when Cerebras is clearly the largest slice
- Add chart borders or box frames around the plot area
- Use Manrope inside the chart frame (title above the card is fine; everything inside uses Sometype Mono)

### HTML/CSS implementation — authoritative spec

This is the authoritative specification for building graphs. Build all new graphs from these templates. Do not reverse-engineer patterns from existing source files — use this document as the source of truth.

#### CSS tokens in use

```css
--ink: #1A1A1A          /* dark card background */
--paper-50: #F7F5F2     /* light card background, donut hole */
--orange: #F15A29       /* Cerebras primary */
--orange-400: #FE9E38   /* lighter orange for gradients, hover labels */
--grey-700: #4D4C4B     /* competitor bars, separators */
--grey-500: #807E7D     /* secondary labels, axis text */
--font-sans: "Manrope"  /* titles only */
--font-mono: "Sometype Mono"  /* all in-chart text */
--gradient-bar: linear-gradient(180deg, #FE9E38 0%, #F15A29 95.19%)   /* vertical Cerebras bar */
--gradient-bar-h: linear-gradient(90deg, #F15A29 4.8%, #FE9E38 100%)  /* horizontal Cerebras bar */
```

#### Tab shell structure

```html
<!-- Tab buttons (one per graph) -->
<div class="tab-bar">
  <button class="tab-btn" data-tab="g1">PRICE-PERFORMANCE</button>
  <button class="tab-btn" data-tab="g2">AI INFERENCE</button>
  <!-- ... -->
</div>

<!-- Panels — only the active one is visible -->
<div class="graph-panel" id="g1">
  <div class="graph-card dark">  <!-- or "light" -->
    <!-- chart content -->
  </div>
</div>
```

#### Animation system — critical rule

**Never use CSS `@keyframes`.** Keyframe animations don't fire when a tab is hidden. Always use CSS `transition` + JS class toggling.

```css
/* Container/group entrance */
.bar-group {
  opacity: 0; transform: translateY(8px);
  transition: opacity 0.4s cubic-bezier(0.22,1,0.36,1), transform 0.4s cubic-bezier(0.22,1,0.36,1);
}
.bar-group.visible { opacity: 1; transform: translateY(0); }

/* Vertical bar — grows from bottom */
.bar { transform: scaleY(0); transform-origin: bottom center;
  transition: transform 0.65s cubic-bezier(0.22,1,0.36,1); }
.bar.animate { transform: scaleY(1); }

/* Horizontal bar — grows from left */
.bar.h-bar { transform: scaleX(0); transform-origin: left center; }
.bar.h-bar.animate { transform: scaleX(1); }

/* Value label — reveals after bars settle */
.bar-value { opacity: 0; transform: translateY(4px);
  transition: opacity 0.3s ease, transform 0.3s ease; }
.bar-value.visible { opacity: 1; transform: translateY(0); }
```

JS trigger pattern (add a case to the existing `animatePanel` function):
```js
function animatePanel(panelId) {
  const panel = document.getElementById(panelId);
  // reset
  panel.querySelectorAll('.bar').forEach(b => b.classList.remove('animate'));
  panel.querySelectorAll('.bar-value, .bar-group, .chart-divider').forEach(el => el.classList.remove('visible'));

  // groups entrance — staggered
  panel.querySelectorAll('.bar-group').forEach((group, i) => {
    setTimeout(() => {
      group.classList.add('visible');
      group.querySelectorAll('.bar').forEach(bar => bar.classList.add('animate'));
    }, 150 + i * 80);
  });

  // value labels after bars settle
  setTimeout(() => {
    panel.querySelectorAll('.bar-value').forEach(v => v.classList.add('visible'));
    panel.querySelectorAll('.chart-divider').forEach(d => d.classList.add('visible'));
  }, 1300);
}
```

#### Vertical bar chart — HTML template

Used for: speed comparisons, grouped benchmark scores (bars stand upright).

```html
<div class="graph-panel" id="gN">
  <div class="graph-card dark">  <!-- dark for hero speed charts -->

    <h2 class="graph-title">
      <span style="color:var(--orange)">Cerebras</span> vs. Competitor
    </h2>
    <div class="graph-subtitle">(TOKENS/S)</div>

    <div class="legend">
      <span class="legend-item">
        <span class="legend-dot" style="background:var(--gradient-bar)"></span>
        <span class="legend-label">CEREBRAS</span>
      </span>
      <span class="legend-item">
        <span class="legend-dot" style="background:var(--grey-700)"></span>
        <span class="legend-label">COMPETITOR</span>
      </span>
    </div>

    <div class="chart-wrap">
      <div class="chart-area">

        <!-- One .bar-group per x-axis category -->
        <div class="bar-group">
          <div class="bar-wrapper">
            <span class="bar-value">1,441</span>
            <div class="bar bar-orange" style="--bar-h: 226px"></div>
          </div>
          <div class="bar-wrapper">
            <span class="bar-value" style="color:var(--grey-500)">97</span>
            <div class="bar bar-grey" style="--bar-h: 15px"></div>
          </div>
        </div>
        <!-- repeat .bar-group for each category -->

      </div><!-- /.chart-area -->

      <div class="chart-divider"></div>

      <div class="x-labels">
        <span class="x-label">Category One</span>
        <!-- one per group -->
      </div>
    </div>

  </div>
</div>
```

Required CSS per chart (replace `gN`):
```css
#gN .chart-area { height: 260px; display: flex; justify-content: space-around; align-items: flex-end; }
#gN .bar        { width: 60px; }
/* Mobile */
@media (max-width: 600px) {
  #gN .chart-area { height: 170px; }
  #gN .bar        { width: 38px; }
}
```

#### Horizontal bar chart — HTML template

Used for: ranked speed comparisons (winner bar is full-width orange, competitors proportionally shorter).

```html
<div class="graph-panel" id="gN">
  <div class="graph-card light">

    <h2 class="graph-title">Title of the Chart</h2>
    <div class="graph-subtitle">(TOKENS/S)</div>

    <div class="h-chart">

      <div class="h-row">
        <span class="row-label">Cerebras Model</span>
        <div class="bar-wrapper" style="position:relative">
          <div class="bar h-bar bar-orange-light" style="--bar-w: 520px"></div>
          <span class="bar-value" style="color:var(--grey-800)">1,100</span>
        </div>
      </div>

      <div class="h-row">
        <span class="row-label">Competitor</span>
        <div class="bar-wrapper" style="position:relative">
          <div class="bar h-bar bar-orange-200" style="--bar-w: 79px"></div>
          <span class="bar-value" style="color:var(--grey-800)">168</span>
        </div>
      </div>
      <!-- repeat for each competitor -->

    </div>

  </div>
</div>
```

Required CSS per chart (replace `gN`):
```css
#gN .h-chart { display: flex; flex-direction: column; gap: 1px; position: relative; }
#gN .h-chart::before {
  content: ''; position: absolute;
  left: 140px; top: 0; bottom: 0; width: 1px;
  background: var(--grey-700); pointer-events: none;
}
#gN .row-label { width: 140px; flex-shrink: 0; text-align: right; padding-right: 8px; font-weight: 700; font-size: 12px; }
#gN .bar.h-bar { height: 57px; }
#gN .bar.h-bar { width: calc(var(--bar-w, 80px) * var(--bar-scale-h, 1)); }
/* Mobile */
@media (max-width: 600px) {
  #gN .h-chart         { --bar-scale-h: 0.35; }
  #gN .row-label       { width: 90px; font-size: 10px; }
  #gN .h-chart::before { left: 90px; }
  #gN .bar.h-bar       { height: 36px; }
}
```

#### Grouped bar chart (multi-series) — HTML template

Used for: benchmark suites with 4 competing series (MATH, MMLU-Pro, etc.).

```html
<div class="graph-panel" id="gN">
  <div class="graph-card light">

    <h2 class="graph-title">Benchmark Title</h2>
    <div class="legend"><!-- 4 items, flex-wrap: wrap --></div>

    <div class="chart-row">

      <div class="y-axis">
        <span class="y-label">90</span>
        <span class="y-label">60</span>
        <span class="y-label">30</span>
        <span class="y-label">0</span>
      </div>

      <div style="flex:1">
        <div class="chart-area" style="position:relative">

          <!-- Dashed gridlines -->
          <div style="position:absolute;left:0;right:0;top:0;height:0;border-top:1px dashed rgba(77,76,75,0.4)"></div>
          <div style="position:absolute;left:0;right:0;top:33%;height:0;border-top:1px dashed rgba(77,76,75,0.4)"></div>
          <div style="position:absolute;left:0;right:0;top:66%;height:0;border-top:1px dashed rgba(77,76,75,0.4)"></div>

          <!-- One .bar-group per benchmark -->
          <div class="bar-group">
            <div class="bar-wrapper"><span class="bar-value" style="color:var(--grey-800)">38</span><div class="bar bar-teal-light" style="--bar-h: 93px"></div></div>
            <div class="bar-wrapper"><span class="bar-value" style="color:var(--grey-800)">29</span><div class="bar bar-teal-mid"  style="--bar-h: 71px"></div></div>
            <div class="bar-wrapper"><span class="bar-value" style="color:var(--grey-800)">36</span><div class="bar bar-teal-900" style="--bar-h: 88px"></div></div>
            <div class="bar-wrapper"><span class="bar-value" style="color:var(--grey-800)">41.5</span><div class="bar bar-orange-light" style="--bar-h: 115px"></div></div>
          </div>
          <!-- repeat for each benchmark -->

        </div>

        <div class="x-labels">
          <span class="x-label">MATH<br>(Level 5)</span>
        </div>
      </div>

    </div>

  </div>
</div>
```

Required CSS per chart (replace `gN`):
```css
#gN .chart-row  { display: flex; align-items: stretch; }
#gN .y-axis     { display: flex; flex-direction: column; justify-content: space-between; height: 220px; width: 28px; padding-right: 8px; flex-shrink: 0; }
#gN .chart-area { display: flex; justify-content: space-between; align-items: flex-end; }
#gN .bar-group  { display: flex; gap: 1px; align-items: flex-end; flex: 1; justify-content: center; }
#gN .bar        { flex: none; width: 100%; }
/* Mobile */
@media (max-width: 600px) {
  #gN .y-axis { height: 143px; }
}
```

#### Donut chart — SVG template

```html
<div class="graph-panel" id="gN">
  <div class="graph-card light">

    <h2 class="graph-title">Chart Title</h2>

    <div class="donut-wrap">
      <!-- NO height attribute on <svg> — viewBox ratio drives intrinsic height -->
      <svg class="donut-svg" viewBox="0 0 640 380">
        <!-- r=100, stroke-width=60, C=628.3, center=(260,190) -->
        <!-- stroke-dashoffset 157.1 starts at 12 o'clock -->
        <!-- subtract 4px from each dash length for white gap -->
        <circle cx="260" cy="190" r="100" fill="none" stroke="#F15A29"
          stroke-width="60" stroke-dasharray="341.6 286.7" stroke-dashoffset="157.1"
          class="donut-segment" data-orig-dash="341.6 286.7"/>
        <circle cx="260" cy="190" r="100" fill="none" stroke="#1C3B3E"
          stroke-width="60" stroke-dasharray="121.7 506.6" stroke-dashoffset="-188.5"
          class="donut-segment" data-orig-dash="121.7 506.6"/>
        <!-- hole — fill with card background color -->
        <circle cx="260" cy="190" r="69" fill="#F7F5F2"/>
        <!-- Labels: SVG text at radius ~155 from center, no percentages -->
        <text x="415" y="210" text-anchor="start" font-family="Manrope" font-size="13" font-weight="500" fill="#1A1A1A">Cerebras</text>
      </svg>
    </div>

  </div>
</div>
```

Donut math: C = 628.3 for r=100. Arc length for X% = X/100 × 628.3 − 4 (gap). `dashoffset` for each segment = `157.1 − sum_of_all_previous_arc_lengths`.

Required CSS per chart:
```css
#gN .donut-wrap { display: flex; justify-content: center; margin-top: 16px;
  opacity: 0; transform: scale(0.96); transition: opacity 0.4s ease, transform 0.4s ease; }
#gN .donut-wrap.visible { opacity: 1; transform: scale(1); }
#gN .donut-svg  { width: 100%; max-width: 640px; }
.donut-segment  { transition: stroke-dasharray 0.65s cubic-bezier(0.22,1,0.36,1); }
```

JS for donut (add to `animatePanel`):
```js
panel.querySelectorAll('.donut-segment').forEach(seg => seg.setAttribute('stroke-dasharray', '0 628.3'));
setTimeout(() => {
  panel.querySelectorAll('.donut-segment').forEach(seg => seg.setAttribute('stroke-dasharray', seg.dataset.origDash));
  panel.querySelector('.donut-wrap')?.classList.add('visible');
}, 150);
```

#### Shared responsive rules (global, declared once)

```css
/* Global bar sizing — uses custom property set on each bar element */
.bar:not(.h-bar) { height: calc(var(--bar-h, 80px) * var(--bar-scale, 1)); }

@media (max-width: 600px) {
  body { padding: 16px 12px 60px; gap: 20px; }
  .graph-card.dark  { padding: 20px 16px 24px; }
  .graph-card.light { padding: 24px 16px; }
  .legend { flex-wrap: wrap; gap: 10px; }
  .chart-area { --bar-scale: 0.65; }  /* scales ALL vertical bars to 65% */
}
```

Horizontal bar sizing is scoped per chart (not global) — add to each chart's CSS block:
```css
#gN .bar.h-bar { width: calc(var(--bar-w, 80px) * var(--bar-scale-h, 1)); }
```

#### Hover interactivity (global, declared once)

```css
.chart-area:has(.bar-group:hover) .bar-group        { opacity: 0.35; }
.chart-area:has(.bar-group:hover) .bar-group:hover  { opacity: 1; }
.bar-wrapper:hover .bar                             { filter: brightness(1.15) saturate(1.1); }
.bar-group:hover .bar-wrapper:not(:hover) .bar      { opacity: 0.55; }
.bar-wrapper:hover .bar-value                       { color: var(--orange-400) !important; }
```

Tooltip: `position: absolute` inside `.bar-wrapper` (`position: relative`). Placement: `bottom: calc(100% + 10px); left: 50%; translate: -50% 0`. Background: `var(--ink)` on light cards, `var(--paper-50)` on dark cards.

#### Text color rules

- Dark card: set `.bar-value { color: var(--white); }` globally
- Light card: add `style="color: var(--grey-800)"` inline on every `.bar-value` in that chart

#### Creating a new graph — required checklist

Non-negotiable. Every new chart tab must have all of these:

1. **Tab button** with `data-tab="gN"` + **panel** with matching `id="gN"`
2. **Card variant** — `dark` for speed/hero charts; `light` for comparisons and benchmarks
3. **Bar dimensions** — `style="--bar-h: Xpx"` (vertical) or `style="--bar-w: Xpx"` (horizontal). Never `style="height:"` or `style="width:"` directly
4. **`animatePanel` case** — add the panel ID to the tab-switch JS
5. **Entrance animation** — CSS `transition` + `.visible`/`.animate` class; never `@keyframes`
6. **Baseline divider** — vertical bar charts: `<div class="chart-divider">` between `.chart-area` and `.x-labels`
7. **Vertical separator** — horizontal bar charts: `::before` on `.h-chart`; never `border-right` per row
8. **Hover** — `:has()` sibling dimming + `filter: brightness()` on hovered bar
9. **Legend** — `flex-wrap: wrap`
10. **Mobile overrides** — `@media (max-width: 600px)` block with `--bar-scale: 0.65` on chart-area, reduced bar widths, `--bar-scale-h: 0.35` for horizontal bars
11. **SVG charts** — no `height` attribute on `<svg>`; `viewBox` + `width: 100%` only
12. **Text colors** — follow dark/light card rule above

---

## Pending Decisions

1. **Dark mode (web):** The ink surface is used for hero and footer bands but there is no systematic dark-mode component spec. Define token overrides for dark-mode cards, inputs, and navigation if a full dark-mode product UI is needed.

2. **Motion / interaction spec per component:** Duration and easing are tokenized (`{motion.duration-fast}`, `{motion.easing-out}`) but there is no per-component animation catalog. Define enter/exit animations for modals, toast, dropdown, and page transitions.

3. **Icon set expansion:** The current in-house set covers 10 utility icons. A decision is needed on the expansion strategy — extend the in-house line set, or license a compatible open-source set for product UI (e.g., Heroicons at matching 1.5px stroke weight).

4. **Semantic color palette:** No explicit success/error/warning/info tokens are defined. These are needed for any product or developer UI. Proposed starting point: success → `{colors.green}` (#90D729); error → a red derived from the orange family; warning → `{colors.orange-400}`; info → `{colors.teal-300}`. Requires client sign-off before production.

5. **CMYK verification:** The CMYK conversions in the Print section are approximations. Production print runs require physical proofing against the Pantone references before committing.

6. **Illustration format:** The isometric illustrations in `assets/illustrations/` are PNGs captured at ~280px. They are soft if scaled significantly larger. Source SVG or Lottie files should be obtained for hero-scale or animated usage.
