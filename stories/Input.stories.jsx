import React from 'react';
import { expect } from 'storybook/test';
import { Input } from '../Cerebras Design System 2/components/core/Input.jsx';

export default {
  component: Input,
  tags: ['ai-generated'],
};

export const Default = {
  args: {
    placeholder: 'Enter text...',
  },
};

export const WithSearchIcon = {
  args: {
    icon: 'search',
    placeholder: 'Search...',
  },
};

export const EmailType = {
  args: {
    type: 'email',
    placeholder: 'name@example.com',
  },
};

export const WithDefaultValue = {
  args: {
    defaultValue: 'Cerebras Cloud',
  },
};

export const Disabled = {
  args: {
    placeholder: 'Disabled input',
    disabled: true,
  },
};

export const SmokePlay = {
  args: {
    placeholder: 'Type here',
    'data-testid': 'smoke-input',
  },
  play: async ({ canvasElement, userEvent }) => {
    const input = canvasElement.querySelector('input');
    expect(input).toBeTruthy();
    await userEvent.type(input, 'Hello');
    expect(input.value).toBe('Hello');
  },
};
