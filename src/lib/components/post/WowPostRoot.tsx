import type { HTMLAttributes } from "react";
import { cx } from "../../utils";

export function WowPostRoot(props: HTMLAttributes<HTMLElement>) {
  return <article {...props} className={cx("wk-post", props.className)} />;
}
