---
name: cerebras-design
description: Use this skill to generate well-branded interfaces and assets for Cerebras, either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files.

This is the Cerebras design system — warm neutrals (near-black ink + cream paper),
a single electric orange (`#F15A29`), Manrope (Light for display, Medium for body)
+ Sometype Mono (uppercase for all UI furniture, eyebrows, labels, metrics), and
sharp 2px corners. Iconography is the in-house line set plus the isometric
black/white/orange illustration library — never redraw them, copy the assets.

Key files:
- `styles.css` — link this one file; it imports all tokens (`tokens/*.css`).
- `components/` — React primitives (Button, Label, Tag, Chip, Badge, Input,
  Card, ArticleCard, StatCard, Navigation, Footer) exposed on
  `window.CerebrasDesignSystem_0bbfb2` via the compiled `_ds_bundle.js`.
- `assets/` — `logo/`, `icons/` (`<Icon name="…" />`), `illustrations/`
  (`<Illustration name="…" />`), `imagery/` (WSE wafer + orange renders).
- `ui_kits/website/` — a full homepage recreation to copy from.

If creating visual artifacts (slides, mocks, throwaway prototypes), copy assets
out and create static HTML files for the user to view. If working on production
code, copy assets and read the rules here to become an expert in designing with
this brand.

If the user invokes this skill without other guidance, ask them what they want to
build or design, ask some questions, and act as an expert Cerebras designer who
outputs HTML artifacts or production code, depending on the need.
