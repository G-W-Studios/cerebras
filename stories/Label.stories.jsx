import React from 'react';
import { Label, Tag } from '../Cerebras Design System 2/components/core/Label.jsx';

export default {
  component: Label,
  tags: ['ai-generated'],
};

export const Blog = {
  args: { category: 'blog' },
};

export const News = {
  args: { category: 'news' },
};

export const PressRelease = {
  args: { category: 'press-release' },
};

export const Event = {
  args: { category: 'event' },
};

export const Whitepaper = {
  args: { category: 'whitepaper' },
};

export const Default = {
  args: { category: 'default', children: 'Custom Label' },
};

export const AllCategories = {
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

export const TagNeutral = {
  render: () => <Tag tone="neutral">5 min read</Tag>,
};

export const TagDark = {
  render: () => <Tag tone="dark">Model Name</Tag>,
};

export const TagOrange = {
  render: () => <Tag tone="orange">New</Tag>,
};

export const TagOutline = {
  render: () => <Tag tone="outline">Cerebras-3</Tag>,
};
