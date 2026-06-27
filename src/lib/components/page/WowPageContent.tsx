import type { HTMLAttributes } from "react";
import { cx } from "../../utils";

export function WowPageContent(props: HTMLAttributes<HTMLElement>) {
  return <section {...props} className={cx("wk-content", props.className)} />;
}
