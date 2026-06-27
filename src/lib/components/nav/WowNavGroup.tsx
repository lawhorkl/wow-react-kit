import type { HTMLAttributes, ReactNode } from "react";
import { cx } from "../../utils";

export interface WowNavGroupProps extends Omit<HTMLAttributes<HTMLDivElement>, "title"> {
  title?: ReactNode;
}

export function WowNavGroup({ title, children, className, ...props }: WowNavGroupProps) {
  return (
    <div {...props} className={cx("wk-nav-group", className)}>
      {title ? <div className="wk-nav-group-title">{title}</div> : null}
      {children}
    </div>
  );
}
