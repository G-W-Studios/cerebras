import React from 'react';
import { Card } from '../Cerebras Design System 2/components/cards/Card.jsx';

export default {
  component: Card,
  tags: ['ai-generated'],
};

export const Light = {
  args: {
    tone: 'light',
    children: 'Light card content',
  },
};

export const Cream = {
  args: {
    tone: 'cream',
    children: 'Cream card content',
  },
};

export const Dark = {
  args: {
    tone: 'dark',
    children: 'Dark card content',
  },
};

export const Darker = {
  args: {
    tone: 'darker',
    children: 'Darker card content',
  },
};

export const Interactive = {
  args: {
    tone: 'light',
    interactive: true,
    children: 'Hover me for lift effect',
  },
};

export const CustomPadding = {
  args: {
    tone: 'cream',
    padding: 48,
    children: 'More breathing room',
  },
};

export const WithContent = {
  render: () => (
    <Card tone="light" style={{ maxWidth: '320px' }}>
      <h3 style={{ margin: '0 0 8px', fontFamily: 'sans-serif' }}>Card Title</h3>
      <p style={{ margin: 0, fontFamily: 'sans-serif', fontSize: '14px', color: '#666' }}>
        This card contains some example content to show how it renders with real children.
      </p>
    </Card>
  ),
};
