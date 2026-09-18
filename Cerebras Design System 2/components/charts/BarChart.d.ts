import * as React from "react";

export interface BarChartCategory {
  label: string;
  cerebrasValue: number;
  /**
   * Omit to render this category as a single Cerebras-only bar (no
   * competitor series) — a chart can mix single- and dual-bar categories,
   * or omit it on every category for an all-orange/gradient chart.
   */
  competitorValue?: number;
  /** Rendered value label; falls back to the raw number. */
  cerebrasDisplay?: string;
  competitorDisplay?: string;
  /**
   * Override the theme's Cerebras fill for this category's bar with any
   * CSS color/gradient — e.g. a distinct color per category, or the same
   * flat color everywhere for a monochrome chart. Falls back to the
   * theme default (`--graph-cerebras-fill`) when omitted.
   */
  cerebrasFill?: string;
  /** Same as `cerebrasFill`, but for the competitor bar. Falls back to `--graph-competitor-fill`. */
  competitorFill?: string;
  /**
   * Provider/model logo shown above this category's label (e.g. a ranked
   * single-series chart like "Output Speed by Provider"). Either an image
   * URL, or an actual `File`/`Blob` — e.g. straight from an
   * `<input type="file">` the caller's own UI collected — which is
   * converted to an object URL internally. Omit for no logo.
   */
  logo?: string | File | Blob;
}

export interface BarChartProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Which of the three graph themes to render.
   * @default "dark-gradient"
   */
  theme?: "dark-gradient" | "dark-orange" | "light";
  title?: string;
  /** Substring of `title` to highlight in brand orange (e.g. "on Cerebras"). */
  titleAccent?: string;
  subtitle?: string;
  /** @default "Cerebras" */
  cerebrasLabel?: string;
  /** @default "Competitor" */
  competitorLabel?: string;
  /** Any number of categories — 2 or 20, the chart adapts either way. */
  categories: BarChartCategory[];
  /** Chart plot area height in px. @default 260 */
  height?: number;
  /** Bars never grow past this width in px, however few categories there are. @default 60 */
  barMaxWidth?: number;
  /**
   * Floor width per category (its bars + gap) in px before the chart
   * switches from shrinking bars to fit, to scrolling horizontally instead.
   * Raise this if category labels need more room to stay legible.
   * @default 56
   */
  minCategoryWidth?: number;
  /**
   * Show the Cerebras/competitor legend. Defaults to hidden automatically
   * when any category has a `logo` — each bar is already self-identified,
   * so the legend would be redundant. Pass explicitly to override.
   */
  showLegend?: boolean;
}

/** Vertical grouped bar chart — the primary graph-library chart type. */
export declare function BarChart(props: BarChartProps): JSX.Element;
