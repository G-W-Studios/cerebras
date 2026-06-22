import * as React from "react";
export interface NavItem { label: string; href?: string; hasMenu?: boolean; }
/**
 * Cerebras site header.
 * @startingPoint section="Navigation" subtitle="Floating site header bar" viewport="1280x120"
 */
export interface NavigationProps extends React.HTMLAttributes<HTMLElement> {
  /** Menu items. Defaults to the Cerebras site nav. */
  items?: NavItem[];
  onGetStarted?: () => void;
  /** Floating blurred pill vs flush bar. @default true */
  floating?: boolean;
}
/** Cerebras site header. */
export declare function Navigation(props: NavigationProps): JSX.Element;
