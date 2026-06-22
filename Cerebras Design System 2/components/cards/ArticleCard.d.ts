import * as React from "react";
export type ArticleCategory =
  | "blog" | "news" | "press-release" | "event" | "whitepaper"
  | "publication" | "spotlight" | "techtalk" | "award" | "default";

/**
 * Newsroom / blog tile.
 * @startingPoint section="Cards" subtitle="Newsroom article tile" viewport="420x460"
 */
export interface ArticleCardProps extends React.HTMLAttributes<HTMLAnchorElement> {
  image?: string;
  /** Editorial category (drives label color). @default "news" */
  category?: ArticleCategory;
  /** Override the label text (defaults to category name). */
  categoryLabel?: React.ReactNode;
  title: React.ReactNode;
  date?: React.ReactNode;
  href?: string;
  /** @default "dark" */
  tone?: "dark" | "light";
}
/** Newsroom / blog tile. */
export declare function ArticleCard(props: ArticleCardProps): JSX.Element;
