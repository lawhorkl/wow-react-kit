import type { AnchorHTMLAttributes } from "react";
import { cx } from "../../utils";

export interface WowNavItemProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  active?: boolean;
}

export function WowNavItem({ active = false, className, ...props }: WowNavItemProps) {
  return (
    <a
      {...props}
      aria-current={active ? "page" : props["aria-current"]}
      className={cx("wk-nav-item", active && "wk-is-active", className)}
    />
  );
}
