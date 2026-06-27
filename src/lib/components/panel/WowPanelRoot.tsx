import type { HTMLAttributes } from "react";
import { cx } from "../../utils";

export function WowPanelRoot(props: HTMLAttributes<HTMLElement>) {
  return <section {...props} className={cx("wk-panel", props.className)} />;
}
