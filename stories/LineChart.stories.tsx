import type { Meta, StoryObj } from '@storybook/react';
import { LineChart } from '../Cerebras Design System 2/components/charts/LineChart.jsx';

const xs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const gpuPoints = xs.map((x, i) => ({ x, y: Number((0.06 + i * 0.058).toFixed(3)) }));
const cs4Points = xs.map((x, i) => ({ x, y: Number((0.02 + i * 0.022).toFixed(3)) }));

const series = [
  { label: 'GPU', points: gpuPoints },
  { label: 'CS-4', points: cs4Points, cerebras: true },
];

const meta = {
  title: 'Charts/LineChart',
  component: LineChart,
  tags: ['ai-generated'],
  args: {
    title: 'CS-4 enables sub-1ms latency (1000 tok/s) for 10T models and beyond',
    titleAccent: 'CS-4',
    subtitle: 'WAFER-TO-WAFER LATENCY VS. MODEL SIZE',
    xAxisLabel: 'MODEL SIZE (TRILLION OF PARAMETERS)',
    yAxisLabel: 'IO LATENCY ACROSS ALL HOPS (MS)',
    series,
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 900 }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof LineChart>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Light card — matches the Figma spec exactly (white bg, ink GPU line, orange CS-4 line). */
export const Light: Story = { args: { theme: 'light' } };

/** Dark card. */
export const Dark: Story = { args: { theme: 'dark-orange' } };

const noisyPoints = [
  { x: 1, y: 0.25 }, { x: 2, y: 0.1 }, { x: 3, y: 0.18 }, { x: 4, y: 0.16 },
  { x: 5, y: 0.22 }, { x: 6, y: 0.35 }, { x: 7, y: 0.28 }, { x: 8, y: 0.38 },
  { x: 9, y: 0.43 }, { x: 10, y: 0.46 },
];
const flatPoints = xs.map((x) => ({ x, y: 0.2 + Math.random() * 0.05 }));

/**
 * A real polyline from real points, not a hardcoded shape — a jagged,
 * non-monotonic series draws exactly as jagged as its data says to.
 */
export const NoisyData: Story = {
  args: {
    theme: 'light',
    title: 'CS-4 holds steady even as GPU latency swings',
    titleAccent: 'CS-4',
    subtitle: 'WAFER-TO-WAFER LATENCY VS. MODEL SIZE',
    series: [
      { label: 'GPU', points: flatPoints },
      { label: 'CS-4', points: noisyPoints, cerebras: true },
    ],
  },
};

// Both series start at the same origin (year 0 = $0) and diverge — the
// growth-comparison shape `variant="area"` exists for. Given lowest-to-
// highest, GPU's own area fills to the baseline and CS-4's area is just
// the "extra" sliver above it, not a second baseline-to-curve fill on top.
const forecastYears = [0, 1, 2, 3, 4, 5];
const gpuSavings = forecastYears.map((x) => ({ x, y: Number((x * 4.2) .toFixed(1)) }));
const cs4Savings = forecastYears.map((x) => ({ x, y: Number((x * x * 2.1 + x * 4.2).toFixed(1)) }));

/**
 * `variant="area"` — for a growth/forecast comparison where the filled
 * gap between two curves is the story, not just their relative slope.
 */
export const AreaComparison: Story = {
  args: {
    theme: 'dark-gradient',
    variant: 'area',
    title: 'Cumulative inference cost savings over 5 years',
    subtitle: undefined,
    xAxisLabel: 'YEARS',
    yAxisLabel: 'CUMULATIVE SAVINGS ($M)',
    series: [
      { label: 'GPU baseline', points: gpuSavings },
      { label: 'CS-4', points: cs4Savings, cerebras: true },
    ],
  },
};

/** The same area comparison on the light theme. */
export const AreaComparisonLight: Story = {
  args: {
    ...AreaComparison.args,
    theme: 'light',
  },
};

const manySeriesPoints = (base: number, slope: number) => xs.map((x, i) => ({ x, y: base + i * slope }));

/** Not limited to two lines — five series here, each independently colored. */
export const ManySeries: Story = {
  args: {
    theme: 'light',
    title: 'Latency across 5 configurations',
    series: [
      { label: 'Config A', points: manySeriesPoints(0.5, 0.04), color: 'var(--graph-level-3)' },
      { label: 'Config B', points: manySeriesPoints(0.4, 0.03), color: 'var(--graph-level-2)' },
      { label: 'Config C', points: manySeriesPoints(0.3, 0.02), color: 'var(--graph-level-1)' },
      { label: 'Config D', points: manySeriesPoints(0.15, 0.01), color: 'var(--grey-400)' },
      { label: 'Cerebras', points: manySeriesPoints(0.02, 0.015), cerebras: true },
    ],
  },
};
