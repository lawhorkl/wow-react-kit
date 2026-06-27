import type { HTMLAttributes } from "react";
import type { WowControlVariant } from "../../types";
import { cx } from "../../utils";

export interface WowBadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: WowControlVariant;
}

export function WowBadge({ variant = "secondary", className, ...props }: WowBadgeProps) {
  return <span {...props} className={cx("wk-badge", `wk-badge-${variant}`, className)} />;
}
