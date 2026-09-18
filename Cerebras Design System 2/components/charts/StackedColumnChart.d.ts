import * as React from "react";

export interface StackedColumnSegment {
  value: number;
  /** Rendered value inside the segment; falls back to `$value.toFixed(2)`. */
  display?: string;
}

export interface StackedColumnData {
  label: string;
  /** Any number of segments, in top-to-bottom stacking order (first = darkest/top). */
  segments: StackedColumnSegment[];
  /** Override the computed total (sum of segment values) shown above the bar. */
  total?: number;
  totalDisplay?: string;
  /**
   * Renders this column's whole stack in the neutral ramp instead of the
   * default orange family — e.g. a competitor's column in a
   * Cerebras-vs-competitor cost comparison. Columns are orange by
   * default since this chart type is almost always Cerebras' own data.
   */
  competitor?: boolean;
}

export interface StackedColumnChartProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Which of the three graph themes to render.
   * @default "dark-gradient"
   */
  theme?: "dark-gradient" | "dark-orange" | "light";
  title?: string;
  titleAccent?: string;
  subtitle?: string;
  /** Legend labels, top-to-bottom stacking order — same order as each column's `segments`. */
  segmentLabels?: string[];
  /** Any number of columns — 2 or 20, the chart adapts either way. */
  columns: StackedColumnData[];
  /** Chart plot area height in px. @default 260 */
  height?: number;
  /** Bars never grow past this width in px. @default 90 */
  barMaxWidth?: number;
  /** Floor width per column before the chart scrolls instead of squeezing bars thin. @default 72 */
  minColumnWidth?: number;
}

/** Stacked column chart — cost/composition breakdown format, the sixth graph-library chart type. */
export declare function StackedColumnChart(props: StackedColumnChartProps): JSX.Element;
