import type { Meta, StoryObj } from '@storybook/react';
import { PieChart } from '../Cerebras Design System 2/components/charts/PieChart.jsx';

const segments = [
  { label: 'Cerebras', value: 55, cerebras: true },
  { label: 'Llama 3.1 70B', value: 20 },
  { label: 'GPT-4o', value: 14 },
  { label: 'Claude 3.5', value: 11 },
];

const meta = {
  title: 'Charts/PieChart',
  component: PieChart,
  tags: ['ai-generated'],
  args: {
    title: 'AI Inference Market Share',
    segments,
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 480 }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof PieChart>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Light card — matches the Figma "Pie Chart" light-theme spec exactly. */
export const Light: Story = { args: { theme: 'light' } };

/** Dark card — matches the Figma "Pie Chart" dark-theme spec exactly. */
export const Dark: Story = { args: { theme: 'dark-orange' } };

const twoSegments = [
  { label: 'Cerebras', value: 72, cerebras: true },
  { label: 'Everyone else', value: 28 },
];

/** Works for any segment count, not just 4 — two segments here. */
export const TwoSegments: Story = {
  args: { theme: 'light', title: 'Cerebras vs. Everyone Else', segments: twoSegments },
};

const manySegments = [
  { label: 'Cerebras', value: 40, cerebras: true },
  { label: 'Model B', value: 15 },
  { label: 'Model C', value: 12 },
  { label: 'Model D', value: 10 },
  { label: 'Model E', value: 9 },
  { label: 'Model F', value: 8 },
  { label: 'Model G', value: 6 },
];

/**
 * More segments than the multi-level ramp has distinct tokens — the ramp
 * repeats (level-3, level-2, level-1, level-3, ...) rather than the
 * component breaking or silently dropping segments past 4.
 */
export const ManySegments: Story = {
  args: { theme: 'light', title: 'Market Share — 7 Models', segments: manySegments },
};
