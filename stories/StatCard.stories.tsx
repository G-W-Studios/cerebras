import type { Meta, StoryObj } from '@storybook/react';
import { StatCard } from '../Cerebras Design System 2/components/cards/StatCard.jsx';

const meta = {
  component: StatCard,
  tags: ['ai-generated'],
} satisfies Meta<typeof StatCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = { args: { value: '2,000', unit: 'tok/s', label: 'Inference Speed' } };
export const DarkTone: Story = { args: { value: '70B', unit: '', label: 'Parameters', tone: 'dark' } };
export const WithAccent: Story = { args: { value: '20×', label: 'Faster than GPU', accent: true } };
export const DarkAccent: Story = { args: { value: '$0.60', unit: '/M tokens', label: 'Price per million', tone: 'dark', accent: true } };

export const StatsBand: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
      <StatCard value="2,000" unit="tok/s" label="Inference Speed" accent />
      <StatCard value="70B" label="Parameters" />
      <StatCard value="20×" label="Faster than GPU" accent />
    </div>
  ),
};
