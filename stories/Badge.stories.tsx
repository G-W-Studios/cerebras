import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from '../Cerebras Design System 2/components/core/Badge.jsx';

const meta = {
  component: Badge,
  tags: ['ai-generated'],
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Orange: Story = { args: { tone: 'orange', children: '3' } };
export const Dark: Story = { args: { tone: 'dark', children: '12' } };
export const Green: Story = { args: { tone: 'green', children: '✓' } };
export const Neutral: Story = { args: { tone: 'neutral', children: '99+' } };

export const AllTones: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
      <Badge tone="orange">1</Badge>
      <Badge tone="dark">2</Badge>
      <Badge tone="green">3</Badge>
      <Badge tone="neutral">4</Badge>
    </div>
  ),
};
