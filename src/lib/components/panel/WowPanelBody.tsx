import type { HTMLAttributes } from "react";
import { cx } from "../../utils";

export function WowPanelBody(props: HTMLAttributes<HTMLDivElement>) {
  return <div {...props} className={cx("wk-panel-body", props.className)} />;
}
