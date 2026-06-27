import type { HTMLAttributes } from "react";
import { cx } from "../../utils";

export function WowListRoot(props: HTMLAttributes<HTMLUListElement>) {
  return <ul {...props} className={cx("wk-list", props.className)} />;
}
