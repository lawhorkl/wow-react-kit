import type { HTMLAttributes } from "react";
import { cx } from "../../utils";

export function WowTabsList(props: HTMLAttributes<HTMLDivElement>) {
  return <div {...props} role="tablist" className={cx("wk-tabs-list", props.className)} />;
}
