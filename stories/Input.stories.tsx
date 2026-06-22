import type { Meta, StoryObj } from '@storybook/react';
import { expect } from 'storybook/test';
import { Input } from '../Cerebras Design System 2/components/core/Input.jsx';

const meta = {
  component: Input,
  tags: ['ai-generated'],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = { args: { placeholder: 'Enter text...' } };
export const WithSearchIcon: Story = { args: { icon: 'search', placeholder: 'Search...' } };
export const EmailType: Story = { args: { type: 'email', placeholder: 'name@example.com' } };
export const WithDefaultValue: Story = { args: { defaultValue: 'Cerebras Cloud' } };
export const Disabled: Story = { args: { placeholder: 'Disabled input', disabled: true } };

export const SmokePlay: Story = {
  args: { placeholder: 'Type here' },
  play: async ({ canvasElement, userEvent }) => {
    const input = canvasElement.querySelector('input');
    expect(input).toBeTruthy();
    await userEvent.type(input!, 'Hello');
    expect(input!.value).toBe('Hello');
  },
};
