import type { ButtonHTMLAttributes } from "react";
import { cx } from "../../utils";
import { useWowTabs } from "./WowTabsContext";

export interface WowTabsTriggerProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  value: string;
}

export function WowTabsTrigger({ value, className, ...props }: WowTabsTriggerProps) {
  const tabs = useWowTabs();
  const selected = tabs.value === value;

  return (
    <button
      {...props}
      type="button"
      role="tab"
      aria-selected={selected}
      className={cx("wk-tabs-trigger", selected && "wk-is-active", className)}
      onClick={(event) => {
        props.onClick?.(event);
        if (!event.defaultPrevented) {
          tabs.setValue(value);
        }
      }}
    />
  );
}
