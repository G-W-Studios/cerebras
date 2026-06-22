import type { Meta, StoryObj } from '@storybook/react';
import { Label, Tag } from '../Cerebras Design System 2/components/core/Label.jsx';

const meta = {
  component: Label,
  tags: ['ai-generated'],
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Blog: Story = { args: { category: 'blog' } };
export const News: Story = { args: { category: 'news' } };
export const PressRelease: Story = { args: { category: 'press-release' } };
export const Event: Story = { args: { category: 'event' } };
export const Whitepaper: Story = { args: { category: 'whitepaper' } };
export const Default: Story = { args: { category: 'default', children: 'Custom Label' } };

export const AllCategories: Story = {
  render: () => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
      <Label category="blog" />
      <Label category="news" />
      <Label category="press-release" />
      <Label category="event" />
      <Label category="whitepaper" />
      <Label category="publication" />
      <Label category="spotlight" />
    </div>
  ),
};

export const TagNeutral: Story = { render: () => <Tag tone="neutral">5 min read</Tag> };
export const TagDark: Story = { render: () => <Tag tone="dark">Model Name</Tag> };
export const TagOrange: Story = { render: () => <Tag tone="orange">New</Tag> };
export const TagOutline: Story = { render: () => <Tag tone="outline">Cerebras-3</Tag> };
