import type { HTMLAttributes, ReactNode } from "react";
import { cx } from "../../utils";

export interface WowPageHeaderProps extends Omit<HTMLAttributes<HTMLElement>, "title"> {
  title?: ReactNode;
}

export function WowPageHeader({ title, children, className, ...props }: WowPageHeaderProps) {
  return (
    <header {...props} className={cx("wk-header", className)}>
      {title ? <h1>{title}</h1> : null}
      {children}
    </header>
  );
}
