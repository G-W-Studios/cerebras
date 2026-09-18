import * as React from "react";

export interface GanttTask {
  label: string;
  /** Start position on the shared time axis, in the same unit as `unit` (e.g. weeks). */
  start: number;
  /** End position on the shared time axis. */
  end: number;
  /** Override this task's own bar color; falls back to its group's color. */
  color?: string;
  /** Override this task's label color; falls back to an automatic contrast pick against the bar fill. */
  textColor?: string;
  /**
   * Renders this task as a neutral "marker" chip instead of its group's
   * ramp color — for a bookend/reference bar (e.g. the very first or last
   * step of the whole process) that isn't itself a working phase.
   * @default "default"
   */
  tone?: "default" | "meta";
}

export interface GanttGroup {
  /** Phase/stage label, shown once and vertically centered against all of this group's rows. */
  label: string;
  /** Override this group's default ramp color — applies to every task in it unless a task sets its own `color`. */
  color?: string;
  /**
   * Rows of tasks stacked vertically under this group. Tasks within the
   * same row must not overlap in time — pack non-overlapping tasks (e.g.
   * two sequential sub-steps) into one row to save vertical space, or put
   * them on separate rows.
   */
  rows: GanttTask[][];
}

export interface GanttChartProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Which of the three graph themes to render.
   * @default "light"
   */
  theme?: "dark-gradient" | "dark-orange" | "light";
  title?: string;
  titleAccent?: string;
  subtitle?: string;
  /** Singular label for one axis unit (e.g. "week", "day") — the tick labels pluralize it automatically. @default "week" */
  unit?: string;
  /** Any number of phase groups, each with any number of rows/tasks — the axis domain and tick step are computed from the data. */
  groups: GanttGroup[];
  /** Row track height in px. @default 40 */
  rowHeight?: number;
  /** Gap between rows within the same group, in px. @default 8 */
  rowGap?: number;
  /** Gap between different groups, in px. @default 20 */
  groupGap?: number;
  /** Width of the group-label column in px. @default 130 */
  labelColWidth?: number;
}

/** Gantt/cascading-timeline chart — the seventh graph-library chart type, built from a screenshot reference rather than a Figma spec. */
export declare function GanttChart(props: GanttChartProps): JSX.Element;
