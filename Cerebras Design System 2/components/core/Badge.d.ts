import * as React from "react";
export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** @default "orange" */
  tone?: "orange" | "dark" | "green" | "neutral";
  children?: React.ReactNode;
}
/** Small count / status badge. */
export declare function Badge(props: BadgeProps): JSX.Element;
