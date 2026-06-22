import * as React from "react";
export type DisplayAdSize =
  | "leaderboard"          // 728×90
  | "super-leaderboard"    // 970×90
  | "billboard"            // 970×250
  | "medium-rectangle"     // 300×250
  | "half-page"            // 300×600
  | "skyscraper"           // 160×600
  | "large-mobile"         // 320×100
  | "mobile-leaderboard";  // 320×50
/**
 * Cerebras paid web-banner surface (IAB standard units) — orange-glow
 * gradient + bold uppercase headline + white logo.
 * @startingPoint section="Social" subtitle="Web display ad" viewport="780x300"
 */
export interface DisplayAdProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Bold uppercase headline. */
  headline?: string;
  /** IAB ad unit. @default "leaderboard" */
  size?: DisplayAdSize;
  /** Optional foreground image (stacked sizes only — e.g. the wafer). */
  image?: string;
  /** Optional mono uppercase CTA chip, e.g. "Learn more →". */
  cta?: string;
  /** Show the white Cerebras logo. @default true */
  logo?: boolean;
}
export declare function DisplayAd(props: DisplayAdProps): JSX.Element;
