import type { HTMLAttributes } from "react";
import type { WowLayoutVariant } from "../../types";
import { cx } from "../../utils";

export interface WowPageMainProps extends HTMLAttributes<HTMLElement> {
  variant?: WowLayoutVariant;
}

export function WowPageMain({ variant = "three-column", className, ...props }: WowPageMainProps) {
  return <main {...props} className={cx("wk-main", `wk-layout-${variant}`, className)} />;
}
