import type { Meta, StoryObj } from '@storybook/react';
import { expect } from 'storybook/test';
import { Chip } from '../Cerebras Design System 2/components/core/Chip.jsx';

const meta = {
  component: Chip,
  tags: ['ai-generated'],
} satisfies Meta<typeof Chip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Idle: Story = { args: { selected: false, children: 'All Models' } };
export const Selected: Story = { args: { selected: true, children: 'All Models' } };
export const WithIcon: Story = { args: { icon: 'cpu', children: 'Inference' } };

export const FilterGroup: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '8px' }}>
      <Chip selected>All</Chip>
      <Chip>Blog</Chip>
      <Chip>News</Chip>
      <Chip>Events</Chip>
    </div>
  ),
};

export const TogglePlay: Story = {
  args: { children: 'Toggle Me' },
  play: async ({ canvasElement }) => {
    const button = canvasElement.querySelector('button');
    expect(button).toBeTruthy();
    expect(button!.textContent).toContain('Toggle Me');
  },
};
