# Cerebras Website — UI Kit

A high-fidelity recreation of the Cerebras marketing homepage, composed entirely
from this design system's components.

## Run
Open `index.html`. It links `../../styles.css`, loads `../../_ds_bundle.js`, and
mounts the sections with React + Babel.

## Sections
- `Hero.jsx` — dark full-bleed hero with the abstract orange render, mono `//`
  eyebrow, Manrope-Light display headline and CTAs.
- `Stats.jsx` — Wafer-Scale Engine stat band (`StatCard`s).
- `Features.jsx` — split wafer feature (WSE macro photo) + three value-prop
  cards using the isometric illustrations.
- `Newsroom.jsx` — dark band of filterable `ArticleCard`s.
- `CTA.jsx` — orange closing call-to-action band.

Plus `Navigation` (sticky floating header) and `Footer` from the system.

## Notes
These are cosmetic recreations: filters and buttons are interactive but not
wired to real data. Copy and edit freely — every visual decision traces back to
the tokens and components.
