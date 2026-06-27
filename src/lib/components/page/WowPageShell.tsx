import type { HTMLAttributes } from "react";
import { cx } from "../../utils";

export function WowPageShell(props: HTMLAttributes<HTMLDivElement>) {
  return <div {...props} className={cx("wk-shell", props.className)} />;
}
