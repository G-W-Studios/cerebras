import type { Meta, StoryObj } from '@storybook/react';
import { CodeBlock } from '../Cerebras Design System 2/components/code/CodeBlock.jsx';
import containerBg from '../Cerebras Design System 2/assets/imagery/codeblock-container-bg.png';

const meta = {
  component: CodeBlock,
  tags: ['ai-generated'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof CodeBlock>;

export default meta;
type Story = StoryObj<typeof meta>;

const TOKENS = [
  [{ text: 'const ' }, { text: 'username', type: 'accent' as const }, { text: ' = ' }, { text: '"figma_dev"', type: 'accent' as const }, { text: ';' }],
  [{ text: 'function ' }, { text: 'initializeSystem', type: 'accent' as const }, { text: '(config) {' }],
  [{ text: '  console.log(`Starting system for ${' }, { text: 'username', type: 'accent' as const }, { text: '}`);' }],
  [{ text: '  return ' }, { text: 'true', type: 'accent' as const }, { text: ';' }],
  [{ text: '}' }],
  [],
  [{ text: 'initializeSystem', type: 'accent' as const }, { text: '();' }],
];

export const Default: Story = {
  args: { tokens: TOKENS },
  decorators: [
    (Story) => (
      <div style={{ padding: 32, background: '#F7F5F2', width: 560 }}>
        <Story />
      </div>
    ),
  ],
};

export const NoLineNumbers: Story = {
  args: { tokens: TOKENS, showLineNumbers: false },
  decorators: [
    (Story) => (
      <div style={{ padding: 32, background: '#F7F5F2', width: 560 }}>
        <Story />
      </div>
    ),
  ],
};

/** CodeBlock centered in the dark feature container with the orange-glow render backdrop — matches the Figma website section. */
export const WithContainer: Story = {
  render: () => (
    <div style={{
      position: 'relative',
      width: 820,
      height: 520,
      background: '#1A1A1A',
      borderRadius: 5,
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      {/* Orange-glow render backdrop — offset to show the warm highlight region */}
      <img
        src={containerBg}
        alt=""
        aria-hidden
        style={{
          position: 'absolute',
          width: '465.4%',
          height: '284.83%',
          left: '-98.04%',
          top: '-73.29%',
          pointerEvents: 'none',
          userSelect: 'none',
        }}
      />
      <CodeBlock
        tokens={TOKENS}
        style={{ width: 540, position: 'relative', zIndex: 1, flexShrink: 0 }}
      />
    </div>
  ),
};
