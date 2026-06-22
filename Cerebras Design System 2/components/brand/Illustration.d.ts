import * as React from "react";

export type IllustrationName =
  | "custom" | "education" | "process" | "solutions" | "strategy"
  | "wafer" | "high-throughput" | "wafer-scale-architecture";

export interface IllustrationProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  /** Which illustration from the library. @default "wafer" */
  name?: IllustrationName;
  /** Rendered width in px. @default 220 */
  size?: number;
  /** Asset folder relative to the consuming page. @default "assets/illustrations" */
  basePath?: string;
}

export declare const ILLUSTRATIONS: IllustrationName[];
/** Isometric brand illustration (PNG by name). */
export declare function Illustration(props: IllustrationProps): JSX.Element;
