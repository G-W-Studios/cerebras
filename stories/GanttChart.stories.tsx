import type { Meta, StoryObj } from '@storybook/react';
import { GanttChart } from '../Cerebras Design System 2/components/charts/GanttChart.jsx';

const meta = {
  title: 'Charts/GanttChart',
  component: GanttChart,
  tags: ['ai-generated'],
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 900 }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof GanttChart>;

export default meta;
type Story = StoryObj<typeof meta>;

// Structurally similar to the "Development process" reference, but the
// reference's own bookend chips (pale "kickoff"/"handoff" markers) and
// progress-tinted phase bars are the part worth keeping — not its literal
// copy/labels. Colors default to the auto orange ramp (lighter earlier,
// full-strength for the final phase); the two bookends opt into the
// neutral `tone: "meta"` chip instead of the ramp.
const productDesignGroups = [
  {
    label: 'Discovery',
    rows: [[{ label: 'Competitive analysis', start: 0, end: 1.4, tone: 'meta' as const }]],
  },
  {
    label: 'Define',
    rows: [[{ label: 'Research synthesis', start: 1.6, end: 2.6 }]],
  },
  {
    label: 'Ideate',
    rows: [[
      { label: 'Map', start: 2.6, end: 3.4 },
      { label: 'Journey', start: 3.6, end: 4.9 },
    ]],
  },
  {
    label: 'Prototyping',
    rows: [
      [{ label: 'Wireframe', start: 5.1, end: 6.3 }],
      [
        { label: 'Style reference', start: 5.1, end: 6.3 },
        { label: 'Design UI', start: 6.5, end: 7.9 },
      ],
      [{ label: 'Prototyping', start: 8.1, end: 9, tone: 'meta' as const }],
    ],
  },
];

export const ProductDesignProcess: Story = {
  args: {
    theme: 'light',
    title: 'Development process in the application journey to prototype',
    unit: 'week',
    groups: productDesignGroups,
  },
};

export const Dark: Story = {
  args: {
    theme: 'dark-gradient',
    title: 'Development process in the application journey to prototype',
    unit: 'week',
    groups: productDesignGroups,
  },
};

// Structurally similar to the "Design Process" reference (day axis, a
// group spanning several sub-task rows) — but each group takes an
// explicit `color` override here instead of the reference's arbitrary
// per-phase hues, demonstrating that a caller can fully opt out of the
// auto ramp when a chart calls for distinct per-group colors.
export const DesignSprint: Story = {
  args: {
    theme: 'dark-gradient',
    title: 'Design Process',
    unit: 'day',
    groups: [
      {
        label: 'Empathize',
        color: 'var(--graph-level-1)',
        rows: [
          [{ label: 'Business research, competitor analysis', start: 0, end: 4 }],
          [{ label: 'User interviews', start: 1, end: 4 }],
          [{ label: 'User modeling, JTBD', start: 2, end: 4 }],
        ],
      },
      {
        label: 'Define',
        rows: [
          [{ label: 'Jobs to be done', start: 4, end: 6 }],
          [{ label: 'Product architecture', start: 4, end: 7 }],
        ],
      },
      {
        label: 'Ideate',
        rows: [
          [{ label: 'User flow', start: 6, end: 7 }],
          [{ label: 'Lo-fi wireframes', start: 6, end: 8 }],
        ],
      },
      {
        label: 'Design',
        color: 'var(--orange-400)',
        rows: [
          [{ label: 'Hi-fi screens', start: 8, end: 10 }],
          [{ label: 'Design system', start: 8.5, end: 10.5 }],
        ],
      },
      {
        label: 'Test',
        color: 'var(--graph-level-3)',
        rows: [
          [{ label: 'Usability test', start: 6, end: 7 }],
          [{ label: 'Usability test', start: 11, end: 12.5 }],
          [{ label: 'Outcome analysis, update', start: 12.5, end: 14.5 }],
        ],
      },
    ],
  },
};

// Same "arbitrary data size" test every chart type gets — 8 phases, most
// with several short sub-tasks whose bars are too narrow for an inline
// label, so their labels spill outside the bar instead of being clipped.
export const ManyPhases: Story = {
  args: {
    theme: 'light',
    title: 'Full program timeline',
    unit: 'week',
    groups: Array.from({ length: 8 }, (_, gi) => ({
      label: `Phase ${gi + 1}`,
      rows: [
        Array.from({ length: gi % 3 === 0 ? 1 : 2 }, (_, ti) => {
          const start = gi * 2 + ti * 0.9;
          return { label: `Task ${gi + 1}.${ti + 1}`, start, end: start + 0.7 };
        }),
      ],
    })),
  },
};
