import type { Meta, StoryObj } from '@storybook/react';
import { expect } from 'storybook/test';
import { Button, IconButton } from '../Cerebras Design System 2/components/core/Button.jsx';

const meta = {
  component: Button,
  tags: ['ai-generated'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: { variant: 'primary', children: 'Get Started' },
};

export const Dark: Story = {
  args: { variant: 'dark', children: 'Learn More' },
};

export const Light: Story = {
  args: { variant: 'light', children: 'Read Docs' },
};

export const Outline: Story = {
  args: { variant: 'outline', children: 'View All' },
};

export const Ghost: Story = {
  args: { variant: 'ghost', children: 'Cancel' },
};

export const WithIcon: Story = {
  args: { variant: 'primary', icon: 'arrow-right', iconPosition: 'right', children: 'Explore' },
};

export const SmallSize: Story = {
  args: { variant: 'primary', size: 'sm', children: 'Small' },
};

export const LargeSize: Story = {
  args: { variant: 'primary', size: 'lg', children: 'Large' },
};

export const Disabled: Story = {
  args: { variant: 'primary', disabled: true, children: 'Disabled' },
};

export const AsLink: Story = {
  args: { variant: 'dark', href: 'https://cerebras.ai', children: 'Cerebras.ai' },
};

export const IconButtonStory: Story = {
  render: () => <IconButton icon="arrow-right" variant="dark" />,
};

export const CssCheck: Story = {
  args: { variant: 'primary', children: 'CSS Check' },
  play: async ({ canvasElement }) => {
    const button = canvasElement.querySelector('button');
    // Primary button uses --orange: #F15A29 = rgb(241, 90, 41)
    expect(getComputedStyle(button!).backgroundColor).toBe('rgb(241, 90, 41)');
  },
};
