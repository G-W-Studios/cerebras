import type { Meta, StoryObj } from '@storybook/react';
import { HorizontalBarChart } from '../Cerebras Design System 2/components/charts/HorizontalBarChart.jsx';

const rows = [
  { label: 'Mistral Le Chat (Flash Answers)', value: 1100, display: '1,100', cerebras: true },
  { label: 'Gemini 2.0 Flash (exp)', value: 168, display: '168' },
  { label: 'ChatGPT 4o', value: 115, display: '115' },
  { label: 'Claude Sonnet 3.5', value: 71, display: '71' },
  { label: 'DeepSeek R1', value: 58, display: '58' },
];

const meta = {
  title: 'Charts/HorizontalBarChart',
  component: HorizontalBarChart,
  tags: ['ai-generated'],
  args: {
    title: "Mistral Le Chat is the world's fastest AI assistant",
    subtitle: '(Tokens/s)',
    rows,
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 820 }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof HorizontalBarChart>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Light card — the default treatment for ranked-list charts. */
export const Light: Story = { args: { theme: 'light' } };

/** Dark card, featured row painted with the signature orange gradient. */
export const DarkGradient: Story = { args: { theme: 'dark-gradient' } };

/** Dark card, featured row as flat brand orange — no gradient. */
export const DarkOrange: Story = { args: { theme: 'dark-orange' } };

const manyRows = [
  { label: 'Mistral Le Chat', value: 1100, display: '1,100', cerebras: true },
  ...Array.from({ length: 14 }, (_, i) => ({
    label: `Competitor ${i + 1}`,
    value: Math.round(1000 / (i + 2)),
    display: undefined as string | undefined,
  })).map((r) => ({ ...r, display: r.value.toString() })),
];

/**
 * Rows stack vertically, so unlike BarChart's columns there's no width
 * budget to run out of — 15 rows just makes a taller chart, no shrink or
 * scroll handling needed.
 */
export const ManyRows: Story = {
  args: {
    theme: 'light',
    title: 'Mistral Le Chat vs. 14 competitors',
    subtitle: '(Tokens/s)',
    rows: manyRows,
  },
};

const monochromeRows = rows.map((r) => ({ ...r, cerebras: undefined, fill: 'var(--orange)' }));

/**
 * Every row set to the same `fill` — one of the four color treatments in
 * the Figma reference. The chart doesn't force a winner/competitor split;
 * the dataset can just be one uniform color throughout.
 */
export const Monochrome: Story = {
  args: { theme: 'light', rows: monochromeRows },
};

const multiLevelRows = [
  { label: 'Mistral Le Chat (Flash Answers)', value: 1100, display: '1,100', fill: 'var(--orange)' },
  { label: 'Gemini 2.0 Flash (exp)', value: 168, display: '168', fill: 'var(--graph-level-3)' },
  { label: 'ChatGPT 4o', value: 115, display: '115', fill: 'var(--graph-level-2)' },
  { label: 'Claude Sonnet 3.5', value: 71, display: '71', fill: 'var(--graph-level-1)' },
];

/**
 * A distinct color per row via the multi-level ramp tokens
 * (`--graph-level-1/2/3`) — for a ranked list where each entry is its own
 * identity rather than a single undifferentiated "competitor" mass.
 */
export const MultiLevel: Story = {
  args: {
    theme: 'light',
    title: "Mistral Le Chat is the world's fastest AI assistant",
    subtitle: '(Tokens/s)',
    rows: multiLevelRows,
  },
};
