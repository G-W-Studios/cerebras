import type { Meta, StoryObj } from '@storybook/react';
import { ScatterChart } from '../Cerebras Design System 2/components/charts/ScatterChart.jsx';

// Reconstructed from the site's own "AI Models: Intelligence vs. Speed"
// example (same model set as the current live chart) — reused here
// instead of inventing a new dataset, per the request. Every point gets
// `value` (its output speed) rendered as the small data label under its
// name, and only the Cerebras-accelerated variant is flagged `cerebras`.
const points = [
  { label: 'GPT-5.6 Sol (max)', x: 50, y: 62, value: 50 },
  { label: 'Claude Opus 4.8 (max)', x: 50, y: 57, value: 50 },
  { label: 'Claude Sonnet 5 (max)', x: 50, y: 54, value: 50 },
  { label: 'Grok 4.5 (high)', x: 50, y: 50, value: 50 },
  { label: 'Qwen3 8 Max', x: 40, y: 42, value: 40 },
  { label: 'Kimi K3 (max)', x: 40, y: 38, value: 40 },
  { label: 'GLM-5.2 (max)', x: 140, y: 42, value: 140 },
  { label: 'DeepSeek V3.1 0725 (max)', x: 140, y: 38, value: 140 },
  { label: 'GPT-5.6 Luna (max)', x: 190, y: 56, value: 190 },
  { label: 'GPT-5.6 Terra (high)', x: 190, y: 53, value: 190 },
  { label: 'Gemini 3.6 Flash', x: 220, y: 50, value: 220 },
  { label: 'GPT-5.6 Sol Ultrafast', x: 750, y: 60, value: 750, cerebras: true },
];

const meta = {
  title: 'Charts/ScatterChart',
  component: ScatterChart,
  tags: ['ai-generated'],
  args: {
    title: 'AI Models: Intelligence vs. Speed',
    titleAccent: 'AI Models:',
    xAxisLabel: 'Output Speed (Output Tokens per Sec)',
    yAxisLabel: 'Artificial Analysis Intelligence Index',
    xDomain: [0, 800],
    yDomain: [10, 70],
    points,
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 900 }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof ScatterChart>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Light card — matches the Figma spec exactly: Cerebras is the only
 * orange point, every other model is the same neutral ink color. Unlike
 * the site's current scatter chart (a different random color per model),
 * this never assigns arbitrary per-point colors by default.
 */
export const Light: Story = { args: { theme: 'light' } };

/** Dark card. */
export const Dark: Story = { args: { theme: 'dark-orange' } };

const manyPoints = Array.from({ length: 20 }, (_, i) => {
  const x = Math.round(20 + Math.random() * 780);
  return { label: `Model ${i + 1}`, x, y: Math.round(1000 + Math.random() * 200), value: x };
});
manyPoints.push({ label: 'Cerebras', x: 60, y: 1190, value: 60, cerebras: true });

/** Works the same for 5 points or 20 — the axis domain is computed from the data either way. */
export const ManyPoints: Story = {
  args: {
    theme: 'light',
    title: 'Market Landscape',
    points: manyPoints,
  },
};
