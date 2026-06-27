import type { HTMLAttributes } from "react";
import { cx } from "../../utils";

export function WowPostBody(props: HTMLAttributes<HTMLDivElement>) {
  return <div {...props} className={cx("wk-post-body", props.className)} />;
}
