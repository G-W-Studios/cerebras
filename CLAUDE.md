# Cerebras — Project Context

This repo is a living design system and creative workspace for G-W Studios' work on the Cerebras brand. The goal is to build and maintain on-brand interfaces, components, prototypes, and marketing assets.

## What lives here

- `Cerebras Design System 2/` — the complete Cerebras design system (tokens, components, assets, icons, illustrations, skill definition)
- `DESIGN.md` — authoritative brand spec (colors, type, spacing, voice — machine-readable YAML + prose)
- `graphs.html` — data visualization components built to Cerebras brand standards
- `README.md` — project overview

## How to work in this repo

### Building something new
Always read `Cerebras Design System 2/readme.md` and `DESIGN.md` before generating any UI. The design system components are available via:
- CSS: link `Cerebras Design System 2/styles.css` (imports all tokens)
- JS bundle: `Cerebras Design System 2/_ds_bundle.js` (exposes components as `window.CerebrasDesignSystem_0bbfb2`)
- Reference implementation: `Cerebras Design System 2/ui_kits/website/index.html`

For prototypes and artifacts, produce self-contained HTML files. For production code, use the JSX components directly.

### Adding a component
1. Create `components/<category>/ComponentName.jsx` + `ComponentName.d.ts`
2. Add a `ComponentName.card.html` preview alongside it
3. Register it in `Cerebras Design System 2/_ds_manifest.json` under `components` and `cards`

### Updating the knowledge file
- Brand decisions → update `DESIGN.md`
- Design system patterns, copy rules, asset notes → update `Cerebras Design System 2/readme.md`
- What the skill loads and how Claude uses it → update `Cerebras Design System 2/SKILL.md`
- After any meaningful change, commit and push to keep GitHub in sync

## Non-negotiable brand rules

- **Orange `#F15A29`** — one accent per section, CTAs and focus only. Never decorative.
- **Manrope Light (300)** for display headlines on web. Never Bold for web display.
- **Sometype Mono SemiBold uppercase** for all UI labels, buttons, eyebrows, metrics.
- **2px border-radius** on all controls and cards. 40px on large feature blocks. Full pill on the nav.
- **Cream `#F7F5F2` / `#ECE8E4`** backgrounds — never plain white as the page base.
- **Campaign mode** (social, event, display ads) uses the deep-brown orange-glow gradient + Manrope Bold uppercase. Never bleed campaign styles into web UI.
- No emoji. No decorative color outside the accent palette.

## Skill
The design system is invocable as `/cerebras-design` — this loads full brand context and acts as an expert Cerebras designer.
