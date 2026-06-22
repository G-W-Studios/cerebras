Cerebras paid **web display-ad** surface — the same campaign DNA as `SocialPost` (warm orange-glow gradient, **bold uppercase** Manrope headline, white logo) sized to the IAB standard banner units. Short/wide units lay headline + logo in a row; tall/boxy units stack headline → image → CTA → logo.

```jsx
<DisplayAd size="leaderboard" headline="The world's fastest AI" cta="Learn more →" />
<DisplayAd size="billboard" headline="Runs on the world's biggest chip" />
<DisplayAd size="medium-rectangle" headline="Experience instant AI" cta="Get started →" />
<DisplayAd size="half-page" headline="The world's biggest chip" image="../../assets/imagery/wafer-planview.png" />
<DisplayAd size="skyscraper" headline="1,000 tokens / second" />
```

Sizes: `leaderboard` (728×90), `super-leaderboard` (970×90), `billboard` (970×250), `medium-rectangle` (300×250), `half-page` (300×600), `skyscraper` (160×600), `large-mobile` (320×100), `mobile-leaderboard` (320×50). Renders at native pixel size — scale with `style={{ transform: "scale(.8)" }}` or override `width`. Campaign type is Manrope **Bold**, distinct from the website's Manrope Light display.
