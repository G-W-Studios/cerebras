import * as React from "react";

export interface ScatterChartPoint {
  label: string;
  x: number;
  y: number;
  /** Rendered value under the label; falls back to the raw `value` if set, else nothing. */
  value?: number | string;
  valueDisplay?: string;
  /** Paints this point (and its label) brand orange. */
  cerebras?: boolean;
  /** Override this point's color entirely — any CSS color. */
  color?: string;
  /**
   * Nudge this point's label away from its dot in px, e.g. to dodge an
   * overlap. The label's name line is vertically centered on the dot by
   * default (dy: 0) — only override dy to move it off that line.
   * @default {dx: 12, dy: 0}
   */
  labelOffset?: { dx?: number; dy?: number };
}

export interface ScatterChartProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Which of the three graph themes to render.
   * @default "light"
   */
  theme?: "dark-gradient" | "dark-orange" | "light";
  title?: string;
  /** Substring of `title` to highlight in brand orange. */
  titleAccent?: string;
  xAxisLabel?: string;
  yAxisLabel?: string;
  /** Any number of points — the axis range is computed from the data unless xDomain/yDomain are given. */
  points: ScatterChartPoint[];
  xDomain?: [number, number];
  yDomain?: [number, number];
}

/** Scatter chart — "Intelligence vs. Speed" format, the fifth graph-library chart type. */
export declare function ScatterChart(props: ScatterChartProps): JSX.Element;
