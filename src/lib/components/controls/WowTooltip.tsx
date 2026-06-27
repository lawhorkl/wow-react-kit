import type { HTMLAttributes, ReactNode } from "react";
import { cx } from "../../utils";

export interface WowTooltipProps extends Omit<HTMLAttributes<HTMLSpanElement>, "content"> {
  content: ReactNode;
}

export function WowTooltip({ content, children, className, ...props }: WowTooltipProps) {
  return (
    <span {...props} className={cx("wk-tooltip", className)}>
      {children}
      <span className="wk-tooltip-content" role="tooltip">
        {content}
      </span>
    </span>
  );
}
