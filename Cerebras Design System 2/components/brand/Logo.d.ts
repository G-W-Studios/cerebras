import * as React from "react";
export interface LogoProps extends React.SVGProps<SVGSVGElement> {
  /** "lockup" = spiral symbol + wordmark; "wordmark" = text only. @default "lockup" */
  variant?: "lockup" | "wordmark";
  /** Rendered height in px (width derives from aspect ratio). @default 28 */
  height?: number;
  /** Paints via currentColor. @default "var(--ink)" */
  color?: string;
}
/** The Cerebras logo (verbatim brand vector). */
export declare function Logo(props: LogoProps): JSX.Element;
