import type { HTMLAttributes } from "react";
import { cx } from "../../utils";

export function WowPageEdge(props: HTMLAttributes<HTMLDivElement>) {
  return <div {...props} className={cx("wk-edge", props.className)} />;
}
