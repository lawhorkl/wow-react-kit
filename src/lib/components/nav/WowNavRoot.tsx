import type { HTMLAttributes } from "react";
import { cx } from "../../utils";

export interface WowNavRootProps extends HTMLAttributes<HTMLElement> {
  orientation?: "vertical" | "horizontal";
  "aria-label"?: string;
}

export function WowNavRoot({
  orientation = "vertical",
  "aria-label": ariaLabel = "Primary",
  className,
  ...props
}: WowNavRootProps) {
  return (
    <nav
      {...props}
      aria-label={ariaLabel}
      className={cx("wk-nav", `wk-nav-${orientation}`, className)}
    />
  );
}
