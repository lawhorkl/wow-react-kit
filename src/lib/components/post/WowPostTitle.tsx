import type { HTMLAttributes } from "react";
import { cx } from "../../utils";

export function WowPostTitle(props: HTMLAttributes<HTMLHeadingElement>) {
  return <h2 {...props} className={cx("wk-post-title", props.className)} />;
}
