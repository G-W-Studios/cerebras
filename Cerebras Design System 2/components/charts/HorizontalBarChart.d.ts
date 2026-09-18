import * as React from "react";

export interface HorizontalBarChartRow {
  label: string;
  value: number;
  /** Rendered value label; falls back to the raw number. */
  display?: string;
  /** Paints this row with the theme's Cerebras fill instead of the competitor fill. Ignored if `fill` is set. */
  cerebras?: boolean;
  /**
   * Override this row's bar color entirely — any CSS color/gradient, or
   * one of the multi-level ramp tokens (`var(--graph-level-1)` / `-2` / `-3`)
   * for a chart with more than two distinct series. Set the same value on
   * every row for a monochrome chart, a distinct value per row for a
   * ranked multi-color list, or omit it everywhere to fall back to the
   * default `cerebras` / competitor two-tone behavior.
   */
  fill?: string;
}

export interface HorizontalBarChartProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Which of the three graph themes to render.
   * @default "light"
   */
  theme?: "dark-gradient" | "dark-orange" | "light";
  title?: string;
  /** Substring of `title` to highlight in brand orange (e.g. "Cerebras"). */
  titleAccent?: string;
  subtitle?: string;
  /** Any number of rows, ranked in the order given — bar length is relative to the largest value. */
  rows: HorizontalBarChartRow[];
  /** Row track height in px. @default 57 */
  rowHeight?: number;
}

/** Horizontal ranked-list bar chart — the second graph-library chart type. */
export declare function HorizontalBarChart(props: HorizontalBarChartProps): JSX.Element;
