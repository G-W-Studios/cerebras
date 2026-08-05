# Prompt: 3D Receding-Stack Card Carousel

Paste everything below into Claude Code. It describes a card carousel reverse-engineered from a reference video (a "tilted card deck" / rolodex-style carousel, autoplaying, ~13 items, ~21s loop).

---

## Build me a "receding stack" card carousel

Build a self-contained, autoplaying card carousel where cards are arranged as a **3D fanned deck tilting away from the viewer**, front card facing the camera at full size, remaining cards receding upward and backward into thin horizontal color slivers. Reference behavior below is observed frame-by-frame from a real implementation — match it precisely, then adapt colors/type/radius to our brand tokens (see "Brand adaptation" at the end).

### 1. Visual anatomy (per observed frame)

- **Front card**: full-size rounded rectangle (~portrait-ish, roughly 4:3 to 5:4 aspect, e.g. 320×340px container), fully opaque, showing a full-bleed background image/gradient with an eyebrow label + title overlaid above it (see typography below). It sits centered, casting a soft diffuse drop shadow directly beneath it (blurred, ~40-60px blur, low opacity, offset straight down — no horizontal skew).
- **Stack behind it**: roughly 7-9 additional layers receding up and back, each rendered as a thin horizontal "sliver" — only the top ~8-20px of each card's image is visible, not the full card. Slivers get progressively narrower/thinner (less height) the farther back they are, and the whole stack flares slightly wider than the front card, like a fan of papers tipped backward and viewed from a low angle. Each sliver still shows real color/image content from its card (a cropped strip), not a flat swatch.
- The stack reads as: **cards are hinged/rotated backward around their bottom edge**, receding in Z and rising in Y, so a card lying nearly flat-away-from-camera projects as a thin band, and a card facing the camera (the front one) reads as the full rectangle.
- **Pagination**: a thin vertical column of small dots to the right of the stack, one per item (or a subset with the current one emphasized — larger/darker), indicating position in the sequence.
- **Corner radius**: soft rounded corners on every card (roughly 12-16px in the reference at this scale — see brand note below for our actual value).
- **Background**: plain, minimal, off-white/cream, no other chrome.

### 2. Content anatomy (per card)

Each card has:
- **Eyebrow label** — small, letterspaced, uppercase, muted gray, centered above the stack (e.g. "OCEAN ARCHIVE")
- **Title** — bold, dark, centered, directly below the eyebrow (e.g. "Tidal")
- **Artwork** — a full-bleed image or gradient filling the card body

Both eyebrow and title live in a fixed header zone above the card stack — they are NOT painted onto the card image. They cross-fade/swap in sync with the card transition (see below).

### 3. Autoplay + transition mechanics (the important part)

- **Autoplay interval**: advances automatically every **~1.2-1.4s** (dwell time on each card), looping infinitely through the item list.
- **The "advance" transition** (~250-300ms, ease-out, e.g. `cubic-bezier(0.16, 1, 0.3, 1)`):
  1. The current front card continues its hinge rotation **past vertical** — it tips forward and down, as if the same backward-hinge motion that built the stack keeps going, flattening the card into a sliver again and carrying it down and out of view below the stack (not a fade — a physical fall-away/tip-out motion, still showing real image content compressed into a band as it exits).
  2. Simultaneously, every remaining layer in the stack advances one slot forward: the 2nd card scales/rotates up into the front position, the 3rd becomes the 2nd, etc. Motion is a smooth, synchronized shift — not staggered per layer, all layers move in the same transition window.
  3. A new thinnest sliver enters at the far back/top to replenish the stack (the deck is a continuous loop — the card that just fell away re-enters at the back).
  4. The eyebrow + title text cross-fades: old text blurs + fades out while new text blurs + fades in, timed to land right as the new front card settles (a `filter: blur()` + `opacity` transition, not a slide).
  5. The drop shadow shrinks/settles under the new front card at the same time.
- **Direction is always forward** (next item) during autoplay; architect it so a manual "previous" is trivial to add (reverse the same transform math).

### 4. Interaction

- Cards are hoverable — cursor becomes a pointer/hand over the front card, confirming it's clickable, but **hovering does not pause autoplay** in the reference (optional: you may add pause-on-hover and/or pause-on-focus as an accessibility improvement — flag it as an addition rather than silently changing the reference behavior).
- Clicking the front card should manually trigger the same advance transition (resets the autoplay timer).
- Support left/right arrow keys to manually step, and touch swipe (up/down or left/right — pick whichever reads naturally given the vertical hinge motion) on mobile.
- Respect `prefers-reduced-motion`: fall back to a plain cross-fade with no 3D motion.

### 5. Implementation approach

- Build as a single self-contained component (plain HTML/CSS/JS is fine for a prototype, or a React component if the project already has a component pattern — check for one before choosing).
- Use CSS 3D transforms: a perspective container, each layer positioned via `rotateX()` + `translateY()` + `translateZ()` (or `scaleY()` if you find a flatter 2D fake reads closer to the reference — prototype both if unsure) keyed off its distance from the front (`index`), so adding/removing items just re-maps indices to transforms.
- Drive the timeline with `requestAnimationFrame` or CSS transitions on the transform/opacity of each layer — avoid re-mounting DOM nodes every tick; rotate an index/offset instead so the transition is a single interpolation, not element churn.
- Keep the item list as data (array of `{eyebrow, title, image}`), loop with modulo indexing so the deck never runs out of cards.
- Add an `aria-live="polite"` region announcing the current title for screen readers, since the visual transition carries no semantic markup.

### 6. Brand adaptation (Cerebras project — apply on top of the reference, don't copy it verbatim)

- Corner radius: use our token — **2px** on the individual cards/controls, not the reference's ~12-16px (reserve **40px** only if this becomes a large feature block, per our brand rule).
- Background: cream **#F7F5F2** / **#ECE8E4**, never plain white.
- Title typography: **Manrope Light (300)** — never Bold for this kind of display text.
- Eyebrow label typography: **Sometype Mono SemiBold, uppercase** (this is our standard for all UI labels/eyebrows).
- Active pagination dot: our accent **orange #F15A29** — this is the one place orange should appear here; every other dot and all card chrome should stay neutral. No decorative color elsewhere in the component.
- No emoji, no gradients/colors outside the accent palette on UI chrome itself (the card artwork/imagery is exempt — that's content, not UI).

Build it, then verify against this spec: dwell time per card, transition duration, hinge direction, and that only one orange element exists in the whole component.
