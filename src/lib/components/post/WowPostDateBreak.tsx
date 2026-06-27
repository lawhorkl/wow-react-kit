import type { HTMLAttributes } from "react";
import { cx } from "../../utils";

export function WowPostDateBreak(props: HTMLAttributes<HTMLDivElement>) {
  return <div {...props} className={cx("wk-date-break", props.className)} />;
}
