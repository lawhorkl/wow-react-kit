import type { TimeHTMLAttributes } from "react";
import { cx } from "../../utils";

export function WowPostTime(props: TimeHTMLAttributes<HTMLTimeElement>) {
  return <time {...props} className={cx("wk-post-time", props.className)} />;
}
