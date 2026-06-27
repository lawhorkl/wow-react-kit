import type { HTMLAttributes } from "react";
import { cx } from "../../utils";

export function WowPageSidebar(props: HTMLAttributes<HTMLElement>) {
  return <aside {...props} className={cx("wk-sidebar", props.className)} />;
}
