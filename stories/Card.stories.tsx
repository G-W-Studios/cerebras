import type { Meta, StoryObj } from '@storybook/react';
import { Card } from '../Cerebras Design System 2/components/cards/Card.jsx';

const meta = {
  component: Card,
  tags: ['ai-generated'],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = { args: { tone: 'light', children: 'Light card content' } };
export const Cream: Story = { args: { tone: 'cream', children: 'Cream card content' } };
export const Dark: Story = { args: { tone: 'dark', children: 'Dark card content' } };
export const Darker: Story = { args: { tone: 'darker', children: 'Darker card content' } };
export const Interactive: Story = { args: { tone: 'light', interactive: true, children: 'Hover me for lift effect' } };
export const CustomPadding: Story = { args: { tone: 'cream', padding: 48, children: 'More breathing room' } };

export const WithContent: Story = {
  render: () => (
    <Card tone="light" style={{ maxWidth: '320px' }}>
      <h3 style={{ margin: '0 0 8px', fontFamily: 'sans-serif' }}>Card Title</h3>
      <p style={{ margin: 0, fontFamily: 'sans-serif', fontSize: '14px', color: '#666' }}>
        Example content showing how the card renders with real children.
      </p>
    </Card>
  ),
};
