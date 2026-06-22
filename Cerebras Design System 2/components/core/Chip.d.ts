import * as React from "react";
export interface ChipProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Filled-ink selected state. @default false */
  selected?: boolean;
  /** Optional leading icon. */
  icon?: "arrow-right" | "chevron-down" | "close" | "plus" | "search";
  children?: React.ReactNode;
}
/** Selectable filter chip. */
export declare function Chip(props: ChipProps): JSX.Element;
