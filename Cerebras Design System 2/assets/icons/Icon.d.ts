import * as React from 'react';

/** Valid Cerebras icon names. */
export type IconName =
  | "arrow-right"
  | "chevron-down"
  | "close"
  | "copy"
  | "download"
  | "menu"
  | "minus"
  | "plus"
  | "search"
  | "triangle-up";

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  /** Icon glyph name. */
  name: IconName;
  /** Pixel size of the square icon. Default 24. */
  size?: number | string;
}

export declare const Icon: React.FC<IconProps>;
export default Icon;
