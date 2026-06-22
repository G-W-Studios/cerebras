import * as React from "react";

export type ButtonVariant = "primary" | "dark" | "light" | "outline" | "ghost";
export type ButtonSize = "sm" | "md" | "lg";
export type IconName =
  | "arrow-right" | "chevron-down" | "close" | "copy" | "download"
  | "menu" | "minus" | "plus" | "search" | "triangle-up";

/**
 * Primary Cerebras action button — mono uppercase label, sharp 2px corners.
 * @startingPoint section="Core" subtitle="Mono-label CTA button" viewport="700x200"
 */
export interface ButtonProps extends React.HTMLAttributes<HTMLElement> {
  /** Visual style. Primary is the electric-orange CTA. @default "primary" */
  variant?: ButtonVariant;
  /** @default "md" */
  size?: ButtonSize;
  /** Trailing/leading line icon. */
  icon?: IconName;
  /** @default "right" */
  iconPosition?: "left" | "right";
  /** Render as an anchor instead of a button. */
  href?: string;
  disabled?: boolean;
  children?: React.ReactNode;
}

export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: IconName;
  /** @default "dark" */
  variant?: "dark" | "light" | "outline" | "primary";
  /** Square px size. @default 44 */
  size?: number;
  disabled?: boolean;
}

/**
 * Primary Cerebras action button — mono uppercase label, sharp 2px corners.
 */
export declare function Button(props: ButtonProps): JSX.Element;
export declare function IconButton(props: IconButtonProps): JSX.Element;
