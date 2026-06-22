import * as React from "react";
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Leading icon (e.g. "search"). */
  icon?: "search" | "arrow-right";
  /** Style overrides for the bordered wrapper. */
  wrapStyle?: React.CSSProperties;
}
/** Text / search input with orange focus ring. */
export declare function Input(props: InputProps): JSX.Element;
