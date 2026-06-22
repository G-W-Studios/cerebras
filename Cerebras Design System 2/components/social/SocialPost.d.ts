import * as React from "react";
export type SocialFormat = "square" | "portrait" | "story" | "landscape" | "wide";
/**
 * Cerebras campaign / social-ad surface — orange-glow gradient + bold
 * uppercase headline + logo.
 * @startingPoint section="Social" subtitle="Campaign / social ad" viewport="600x600"
 */
export interface SocialPostProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Bold uppercase headline. */
  headline?: string;
  /** Aspect-ratio preset. @default "square" */
  format?: SocialFormat;
  /** Optional foreground image (e.g. the wafer). */
  image?: string;
  /** Small mono eyebrow above the headline. */
  eyebrow?: string;
  /** Headline vertical anchor. @default "top" */
  align?: "top" | "center";
  /** Show the white Cerebras logo. @default true */
  logo?: boolean;
}
export declare function SocialPost(props: SocialPostProps): JSX.Element;
