import type { HTMLAttributes } from "react";
import { cx } from "../../utils";

export function WowMediaFrame({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div {...props} className={cx("wk-media-frame", className)} />;
}
