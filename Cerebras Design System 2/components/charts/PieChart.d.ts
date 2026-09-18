import * as React from "react";

export interface PieChartSegment {
  label: string;
  value: number;
  /**
   * Paints this segment flat brand orange. Defaults to `true` for the
   * first segment in the array if no segment sets it explicitly.
   * Ignored if `fill` is set.
   */
  cerebras?: boolean;
  /**
   * Override this segment's color entirely — any CSS color. Omit to fall
   * back to orange (Cerebras) or the next color in the multi-level ramp
   * (`--graph-level-3/2/1`, repeating past 3 non-Cerebras segments).
   */
  fill?: string;
}

export interface PieChartProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Which of the three graph themes to render.
   * @default "light"
   */
  theme?: "dark-gradient" | "dark-orange" | "light";
  title?: string;
  /** Substring of `title` to highlight in brand orange. */
  titleAccent?: string;
  /** Any number of segments — shares are computed from `value`, they don't need to sum to 100. */
  segments: PieChartSegment[];
}

/** Donut chart — the third graph-library chart type. */
export declare function PieChart(props: PieChartProps): JSX.Element;
