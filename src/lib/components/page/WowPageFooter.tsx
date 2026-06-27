import type { HTMLAttributes } from "react";
import { cx } from "../../utils";

export function WowPageFooter(props: HTMLAttributes<HTMLElement>) {
  return <footer {...props} className={cx("wk-footer", props.className)} />;
}
