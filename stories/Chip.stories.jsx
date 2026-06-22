import React from 'react';
import { expect } from 'storybook/test';
import { Chip } from '../Cerebras Design System 2/components/core/Chip.jsx';

export default {
  component: Chip,
  tags: ['ai-generated'],
};

export const Idle = {
  args: {
    selected: false,
    children: 'All Models',
  },
};

export const Selected = {
  args: {
    selected: true,
    children: 'All Models',
  },
};

export const WithIcon = {
  args: {
    icon: 'cpu',
    children: 'Inference',
  },
};

export const FilterGroup = {
  render: () => (
    <div style={{ display: 'flex', gap: '8px' }}>
      <Chip selected>All</Chip>
      <Chip>Blog</Chip>
      <Chip>News</Chip>
      <Chip>Events</Chip>
    </div>
  ),
};

export const TogglePlay = {
  args: {
    children: 'Toggle Me',
  },
  play: async ({ canvasElement }) => {
    const button = canvasElement.querySelector('button');
    expect(button).toBeTruthy();
    expect(button.textContent).toContain('Toggle Me');
  },
};
