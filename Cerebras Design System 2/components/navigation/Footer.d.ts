import * as React from "react";
export interface FooterColumn { head: string; links: string[]; }
/**
 * Dark site footer with mono column headers + newsletter.
 * @startingPoint section="Navigation" subtitle="Dark site footer" viewport="1280x420"
 */
export interface FooterProps extends React.HTMLAttributes<HTMLElement> {
  /** Link columns. Defaults to the Cerebras footer map. */
  columns?: FooterColumn[];
}
/** Dark site footer with mono column headers + newsletter. */
export declare function Footer(props: FooterProps): JSX.Element;
