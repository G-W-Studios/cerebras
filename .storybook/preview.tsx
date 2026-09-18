import type { Preview } from '@storybook/react-vite';
import '../Cerebras Design System 2/styles.css';

const preview: Preview = {
  // Every story gets an auto-generated Docs page (component description +
  // prop table from .d.ts JSDoc + a live example per story) with zero
  // per-component opt-in. Every graph type we add is documented for free.
  tags: ['autodocs'],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
