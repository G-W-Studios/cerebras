import type { Meta, StoryObj } from '@storybook/react';
import { StackedColumnChart } from '../Cerebras Design System 2/components/charts/StackedColumnChart.jsx';

// Same underlying data as the reference ("Cost per Intelligence Index
// Task"), reordered top-to-bottom (Answer first/darkest, Input last/
// lightest) — the reference's monochrome black ramp and rotated labels
// are dropped in favor of the library's own conventions.
const segmentLabels = ['Answer', 'Reasoning', 'Cache Write', 'Cache Hit', 'Input'];

// Every column lists all 5 positions (Answer, Reasoning, Cache Write,
// Cache Hit, Input), using 0 for a category that column doesn't incur —
// array position is what maps a segment to its color/legend entry, so a
// shorter array would silently miscolor whichever categories a column
// does have (e.g. a 3-segment column meaning Reasoning/CacheWrite/Input
// would otherwise render in the Answer/Reasoning/CacheWrite colors).
const columns = [
  { label: 'GPT-5.6\nSol (low)', segments: [0.2, 0, 0, 0, 0] },
  { label: 'GPT-5.6\nSol (medium)', segments: [0.08, 0.09, 0.07, 0, 0] },
  { label: 'GPT-5.6\nSol (high)', segments: [0.11, 0.1, 0.09, 0.13, 0] },
  { label: 'GPT-5.6\nSol (xhigh)', segments: [0.13, 0.17, 0.15, 0.2, 0] },
  { label: 'GPT-5.6\nSol (max)', segments: [0.16, 0.3, 0.17, 0.2, 0.19] },
].map((c) => ({ ...c, segments: c.segments.map((value) => ({ value, display: value > 0 ? `$${value.toFixed(2)}` : undefined })) }));

const meta = {
  title: 'Charts/StackedColumnChart',
  component: StackedColumnChart,
  tags: ['ai-generated'],
  args: {
    title: 'Cost per Intelligence Index Task',
    subtitle: 'Weighted average cost (USD) per task, segmented by token type. Lower is better.',
    segmentLabels,
    columns,
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 820 }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof StackedColumnChart>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Dark card — the auto-generated orange ramp (light-to-dark) replaces the reference's arbitrary black/grey scale. */
export const DarkGradient: Story = { args: { theme: 'dark-gradient' } };

/** Light card. */
export const Light: Story = { args: { theme: 'light' } };

const comparisonColumns = [
  {
    label: 'Cerebras',
    segments: [
      { value: 0.05, display: '$0.05' },
      { value: 0.03, display: '$0.03' },
    ],
  },
  {
    label: 'GPU Provider',
    competitor: true,
    segments: [
      { value: 0.16, display: '$0.16' },
      { value: 0.3, display: '$0.30' },
    ],
  },
];

/**
 * Columns are orange by default (this chart type is almost always about
 * Cerebras' own numbers) — flag a column `competitor` to render it in
 * the neutral ramp instead, for a Cerebras-vs-competitor cost comparison
 * rather than a single model's own configuration breakdown.
 */
export const CerebrasComparison: Story = {
  args: {
    theme: 'dark-gradient',
    title: 'Total Cost per Task',
    subtitle: 'Answer + Reasoning tokens, weighted average',
    segmentLabels: ['Answer', 'Reasoning'],
    columns: comparisonColumns,
  },
};

const manyColumns = Array.from({ length: 10 }, (_, i) => ({
  label: `Config ${i + 1}`,
  segments: segmentLabels.map((_, si) => {
    const value = Number((0.05 + Math.random() * 0.15).toFixed(2));
    return { value, display: `$${value.toFixed(2)}` };
  }),
}));

/** The chart adapts to however many columns and segments the data has — 10 columns here instead of 5. */
export const ManyColumns: Story = {
  args: {
    theme: 'dark-gradient',
    title: 'Cost per Intelligence Index Task',
    segmentLabels,
    columns: manyColumns,
  },
};
