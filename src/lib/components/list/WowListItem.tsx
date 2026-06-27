import type { HTMLAttributes } from "react";
import { cx } from "../../utils";

export function WowListItem(props: HTMLAttributes<HTMLLIElement>) {
  return <li {...props} className={cx("wk-list-item", props.className)} />;
}
