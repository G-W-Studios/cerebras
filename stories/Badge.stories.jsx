import React from 'react';
import { Badge } from '../Cerebras Design System 2/components/core/Badge.jsx';

export default {
  component: Badge,
  tags: ['ai-generated'],
};

export const Orange = {
  args: {
    tone: 'orange',
    children: '3',
  },
};

export const Dark = {
  args: {
    tone: 'dark',
    children: '12',
  },
};

export const Green = {
  args: {
    tone: 'green',
    children: '✓',
  },
};

export const Neutral = {
  args: {
    tone: 'neutral',
    children: '99+',
  },
};

export const AllTones = {
  render: () => (
    <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
      <Badge tone="orange">1</Badge>
      <Badge tone="dark">2</Badge>
      <Badge tone="green">3</Badge>
      <Badge tone="neutral">4</Badge>
    </div>
  ),
};
