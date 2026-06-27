import type { HTMLAttributes } from "react";
import { cx } from "../../utils";

export function WowPageNavColumn(props: HTMLAttributes<HTMLElement>) {
  return <aside {...props} className={cx("wk-nav-column", props.className)} />;
}
