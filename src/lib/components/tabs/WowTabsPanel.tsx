import type { HTMLAttributes } from "react";
import { cx } from "../../utils";
import { useWowTabs } from "./WowTabsContext";

export interface WowTabsPanelProps extends HTMLAttributes<HTMLDivElement> {
  value: string;
}

export function WowTabsPanel({ value, className, ...props }: WowTabsPanelProps) {
  const tabs = useWowTabs();
  const active = tabs.value === value;

  return (
    <div
      {...props}
      role="tabpanel"
      hidden={!active}
      className={cx("wk-tabs-panel", className)}
    />
  );
}
