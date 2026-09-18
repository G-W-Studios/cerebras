import * as React from "react";

export interface LineChartPoint {
  x: number;
  y: number;
}

export interface LineChartSeries {
  label: string;
  points: LineChartPoint[];
  /** Paints this series flat brand orange. Defaults to the last series in the array if none is flagged. */
  cerebras?: boolean;
  /** Override this series' line/legend color entirely — any CSS color. */
  color?: string;
  /** `variant="area"` only: override this series' fill color independently of `color` (which still controls its stroke). */
  areaColor?: string;
}

export interface LineChartProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Which of the three graph themes to render.
   * @default "light"
   */
  theme?: "dark-gradient" | "dark-orange" | "light";
  title?: string;
  /** Substring of `title` to highlight in brand orange (e.g. "CS-4"). */
  titleAccent?: string;
  subtitle?: string;
  xAxisLabel?: string;
  yAxisLabel?: string;
  /** Any number of series, each with any number of points — the axis range is computed from the data. */
  series: LineChartSeries[];
  /** Override the auto-computed y-axis ticks (values, not labels). */
  yTicks?: number[];
  /**
   * `"area"` fills the band between each series and the one before it
   * (lowest series to the baseline) instead of just stroking the lines —
   * for a growth/forecast comparison where the filled gap is the point.
   * Only reads correctly when every series shares the same x values and
   * is given lowest-to-highest, each never crossing the one before it.
   * @default "line"
   */
  variant?: "line" | "area";
}

/** Line chart — trend-over-size format, the fourth graph-library chart type. */
export declare function LineChart(props: LineChartProps): JSX.Element;
