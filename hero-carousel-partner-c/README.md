# Cerebras — Partner Hero Carousel (variant C)

Self-contained prototype for the receding-card partner-announcement hero.
Variant C layers the active card's artwork behind the whole viewport as
blurred, dark-tinted ambient atmosphere; the background crossfades in
sync with the active slide.

## Contents

- `index.html` — the entire component (HTML + CSS + JS + inlined design
  tokens). Zero external dependencies apart from Google Fonts and the
  images below.
- `assets/hero-partner/` — the four card images the carousel uses.

## Deploy

Any static host works. Drop this folder into Netlify / S3 / GitHub Pages
and open `index.html`. No build step, no bundler.

## Behaviour

- 3 slides. Autoplay dwells 7.5s per slide, then advances.
- Click a card or a list row to jump to that slide.
- ← / → arrow keys step through the deck.
- Front card exits by tipping forward around its bottom edge; the back
  card fades in concurrently so the deck always reads as full.
- Respects `prefers-reduced-motion` (skips the 3D tip; opacity crossfade
  only).
- No horizontal or vertical scrollbars ever appear during the exit
  animation (`html, body { overflow: clip }`).

## Editing

Slide content lives in the `<ul class="hp-list">` and the `<div
class="hp-stack">` blocks in `index.html`. Both are index-aligned — item
0 in the list pairs with card 0 in the stack, and the ambient background
uses the same three images the cards use.
