The Cerebras site header — a floating, blurred white pill with logo, primary menu and CTAs.

```jsx
<Navigation onGetStarted={() => {}} />
<Navigation floating={false} items={[{label:"Docs"},{label:"Pricing"}]} />
```

`floating` toggles the pill vs a flush bar. Compose with `Logo`, `Button`, `IconButton` internally.
