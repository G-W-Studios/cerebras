import React from 'react';
import { expect } from 'storybook/test';
import { Button, IconButton } from '../Cerebras Design System 2/components/core/Button.jsx';

export default {
  component: Button,
  tags: ['ai-generated'],
};

export const Primary = {
  args: {
    variant: 'primary',
    children: 'Get Started',
  },
};

export const Dark = {
  args: {
    variant: 'dark',
    children: 'Learn More',
  },
};

export const Light = {
  args: {
    variant: 'light',
    children: 'Read Docs',
  },
};

export const Outline = {
  args: {
    variant: 'outline',
    children: 'View All',
  },
};

export const Ghost = {
  args: {
    variant: 'ghost',
    children: 'Cancel',
  },
};

export const WithIcon = {
  args: {
    variant: 'primary',
    icon: 'arrow-right',
    iconPosition: 'right',
    children: 'Explore',
  },
};

export const SmallSize = {
  args: {
    variant: 'primary',
    size: 'sm',
    children: 'Small',
  },
};

export const LargeSize = {
  args: {
    variant: 'primary',
    size: 'lg',
    children: 'Large',
  },
};

export const Disabled = {
  args: {
    variant: 'primary',
    disabled: true,
    children: 'Disabled',
  },
};

export const AsLink = {
  args: {
    variant: 'dark',
    href: 'https://cerebras.ai',
    children: 'Cerebras.ai',
  },
};

export const IconButtonDark = {
  render: () => <IconButton icon="arrow-right" variant="dark" />,
};

export const CssCheck = {
  args: {
    variant: 'primary',
    children: 'CSS Check',
  },
  play: async ({ canvasElement }) => {
    const button = canvasElement.querySelector('button');
    // The primary button uses --orange which resolves to #F15A29 (rgb 241, 90, 41)
    const bg = getComputedStyle(button).backgroundColor;
    expect(bg).toBe('rgb(241, 90, 41)');
  },
};
