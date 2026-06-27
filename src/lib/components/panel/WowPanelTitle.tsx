import type { HTMLAttributes } from "react";
import { cx } from "../../utils";

export function WowPanelTitle(props: HTMLAttributes<HTMLHeadingElement>) {
  return <h2 {...props} className={cx("wk-panel-title", props.className)} />;
}
