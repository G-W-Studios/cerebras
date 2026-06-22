import * as React from "react";

export type LabelCategory =
  | "blog" | "news" | "press-release" | "event" | "whitepaper"
  | "publication" | "spotlight" | "techtalk" | "award" | "default";

export interface LabelProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Editorial category — drives the fixed accent color. @default "default" */
  category?: LabelCategory;
  children?: React.ReactNode;
}

export interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** @default "neutral" */
  tone?: "neutral" | "dark" | "orange" | "outline";
  children?: React.ReactNode;
}

/** Colored editorial category label (Blog, News, Press Release, …). */
export declare function Label(props: LabelProps): JSX.Element;
/** Neutral mono metadata tag. */
export declare function Tag(props: TagProps): JSX.Element;
