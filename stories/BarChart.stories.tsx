import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { BarChart } from '../Cerebras Design System 2/components/charts/BarChart.jsx';

const categories = [
  { label: 'Coding Ability\n(MLArena WebDev)', cerebrasValue: 1441, competitorValue: 1387, cerebrasDisplay: '1,441', competitorDisplay: '1,387' },
  { label: 'Output Speed\n(Token/s)', cerebrasValue: 1000, competitorValue: 97, cerebrasDisplay: '1,000', competitorDisplay: '97' },
  { label: 'Cost\n($/M input Tokens)', cerebrasValue: 2.25, competitorValue: 3.0, cerebrasDisplay: '$2.25', competitorDisplay: '$3.00' },
];

const meta = {
  title: 'Charts/BarChart',
  component: BarChart,
  tags: ['ai-generated'],
  args: {
    title: 'GLM-4.7 on Cerebras vs. Claude 4.5 Sonnet',
    titleAccent: 'on Cerebras',
    cerebrasLabel: 'GLM-4.7 on Cerebras',
    competitorLabel: 'Claude Sonnet 4.5 on GPUs',
    categories,
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 820 }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof BarChart>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Dark card, Cerebras series painted with the signature orange gradient. */
export const DarkGradient: Story = { args: { theme: 'dark-gradient' } };

/** Dark card, Cerebras series as flat brand orange — no gradient. */
export const DarkOrange: Story = { args: { theme: 'dark-orange' } };

/** Cream/light card. */
export const Light: Story = { args: { theme: 'light' } };

const singleSeriesCategories = [
  { label: 'Qwen3\n235B', cerebrasValue: 1400, cerebrasDisplay: '1,400' },
  { label: 'Qwen3 Coder\n480B', cerebrasValue: 2000, cerebrasDisplay: '2,000' },
  { label: 'Llama 3.3\n70B', cerebrasValue: 2500, cerebrasDisplay: '2,500' },
];

/**
 * Not every chart is a comparison — omit `competitorValue` on every
 * category and BarChart renders a single orange/gradient bar per
 * category, with no competitor legend item.
 */
export const SingleSeries: Story = {
  args: {
    theme: 'dark-gradient',
    title: 'Tokens per second on Cerebras',
    titleAccent: 'on Cerebras',
    cerebrasLabel: 'Cerebras',
    categories: singleSeriesCategories,
  },
};

const manyCategories = Array.from({ length: 12 }, (_, i) => ({
  label: `Model ${i + 1}`,
  cerebrasValue: 400 + Math.round(Math.random() * 2600),
  competitorValue: 50 + Math.round(Math.random() * 300),
  cerebrasDisplay: undefined,
  competitorDisplay: undefined,
})).map((c) => ({ ...c, cerebrasDisplay: c.cerebrasValue.toLocaleString(), competitorDisplay: c.competitorValue.toLocaleString() }));

/**
 * The library isn't tuned to any one dataset's category count — this is
 * the same component as `DarkGradient` above with 12 categories instead
 * of 3. Bars shrink to fit until `minCategoryWidth` is hit, then the
 * chart scrolls horizontally instead of squeezing bars unreadably thin.
 */
export const ManyCategories: Story = {
  args: {
    theme: 'dark-gradient',
    title: 'Tokens per second — 12 models on Cerebras vs. GPUs',
    titleAccent: 'on Cerebras',
    cerebrasLabel: 'Cerebras',
    competitorLabel: 'GPU',
    categories: manyCategories,
  },
};

// Stand-in monogram logos (colored circle + initial) — a real integration
// would pass each provider's actual logo asset URL via `category.logo`.
function placeholderLogo(letter: string, bg: string, fg = '#FFFFFF') {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48"><circle cx="24" cy="24" r="24" fill="${bg}"/><text x="24" y="31" font-family="Arial" font-size="20" font-weight="700" fill="${fg}" text-anchor="middle">${letter}</text></svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

// Every non-Cerebras logo is the same neutral grey (--grey-400, the same
// token the bars themselves already use) — a rainbow of each provider's
// own real brand color here would be exactly the "random color per model"
// the library's two-tone rule exists to avoid. Only Cerebras gets brand
// orange. (The SVG is a standalone data URI, disconnected from the page's
// stylesheet, so this has to be the token's resolved hex, not `var(...)`.)
// Text is dark ink, not white — --grey-400 is too light for white text to
// read against.
const NEUTRAL_LOGO_BG = '#B3B1AF';
const NEUTRAL_LOGO_FG = '#1A1A1A';
const providerCategories = [
  { label: 'Cerebras', cerebrasValue: 2330, cerebrasDisplay: '2330', logo: placeholderLogo('C', '#F15A29') },
  { label: 'SambaNova', cerebrasValue: 164, cerebrasDisplay: '164', logo: placeholderLogo('S', NEUTRAL_LOGO_BG, NEUTRAL_LOGO_FG) },
  { label: 'Lightning AI', cerebrasValue: 70, cerebrasDisplay: '70', logo: placeholderLogo('L', NEUTRAL_LOGO_BG, NEUTRAL_LOGO_FG) },
  { label: 'Together AI', cerebrasValue: 47, cerebrasDisplay: '47', logo: placeholderLogo('T', NEUTRAL_LOGO_BG, NEUTRAL_LOGO_FG) },
  { label: 'Google', cerebrasValue: 34, cerebrasDisplay: '34', logo: placeholderLogo('G', NEUTRAL_LOGO_BG, NEUTRAL_LOGO_FG) },
].map((c) => ({ ...c, cerebrasFill: c.label === 'Cerebras' ? undefined : 'var(--grey-400)' }));

function WithLogosDemo() {
  const [file, setFile] = React.useState<File | null>(null);
  const categoriesWithUpload = providerCategories.map((c) =>
    c.label === 'Cerebras' && file ? { ...c, logo: file } : c
  );
  return (
    <div>
      <label style={{ display: 'block', marginBottom: 12, fontFamily: 'sans-serif', fontSize: 13 }}>
        Swap the Cerebras logo for your own —{' '}
        <input type="file" accept="image/*" onChange={(e) => setFile(e.target.files?.[0] ?? null)} />
      </label>
      <BarChart
        theme="light"
        title="Output Speed: Gemma 4 31B Providers"
        subtitle="Output tokens per second · Higher is better"
        cerebrasLabel="Cerebras"
        categories={categoriesWithUpload}
      />
    </div>
  );
}

/**
 * Each category can carry a `logo` — shown above its label, matching
 * ranked provider-comparison charts (e.g. Artificial Analysis-style
 * "output speed by provider" benchmarks). `logo` accepts either an image
 * URL (used for the placeholder monograms below) or a real `File`/`Blob`
 * straight from an `<input type="file">` — try swapping the Cerebras one.
 * Legend is auto-hidden whenever any category has a logo, since each bar
 * is already self-identified.
 */
export const WithLogos: Story = {
  render: () => <WithLogosDemo />,
};
