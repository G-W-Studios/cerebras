import * as React from "react";
export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** @default "light" */
  tone?: "light" | "cream" | "dark" | "darker";
  /** Lift + shadow on hover. @default false */
  interactive?: boolean;
  /** Inner padding px. @default 24 */
  padding?: number;
  children?: React.ReactNode;
}
/** Base surface container with sharp 2px corners. */
export declare function Card(props: CardProps): JSX.Element;
