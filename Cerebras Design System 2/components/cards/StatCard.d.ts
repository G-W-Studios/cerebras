import * as React from "react";
export interface StatCardProps extends React.HTMLAttributes<HTMLDivElement> {
  value: React.ReactNode;
  unit?: React.ReactNode;
  label: React.ReactNode;
  /** @default "light" */
  tone?: "light" | "dark";
  /** Paint the figure orange. @default false */
  accent?: boolean;
}
/** Big performance metric card. */
export declare function StatCard(props: StatCardProps): JSX.Element;
