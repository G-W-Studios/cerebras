import type { CSSProperties, HTMLAttributes } from "react";

export interface CodeToken {
  text: string;
  /** "default" = white | "accent" = orange | "dim" = muted gray | "comment" = gray-600 */
  type?: "default" | "accent" | "dim" | "comment";
  /** Override with any CSS color value (takes precedence over `type`). */
  color?: string;
}

export interface CodeBlockProps extends HTMLAttributes<HTMLDivElement> {
  /** Lines of token spans. An empty array [] renders a blank line. */
  tokens?: CodeToken[][];
  /** Show 2-digit line numbers. Defaults to true. */
  showLineNumbers?: boolean;
  /** Show copy-to-clipboard button. Defaults to true. */
  copyButton?: boolean;
  /** First line number. Defaults to 1. */
  startLine?: number;
  style?: CSSProperties;
}

export declare function CodeBlock(props: CodeBlockProps): JSX.Element;

export interface InlineCodeProps extends HTMLAttributes<HTMLElement> {
  style?: CSSProperties;
}

export declare function InlineCode(props: InlineCodeProps): JSX.Element;
