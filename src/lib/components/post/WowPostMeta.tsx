import type { HTMLAttributes, ReactNode } from "react";
import { cx } from "../../utils";

export interface WowPostMetaProps extends HTMLAttributes<HTMLElement> {
  author?: ReactNode;
  time?: ReactNode;
}

export function WowPostMeta({ author, time, children, className, ...props }: WowPostMetaProps) {
  return (
    <footer {...props} className={cx("wk-post-meta", className)}>
      {author ? <span>{author}</span> : <span />}
      {time ? <span>{time}</span> : null}
      {children}
    </footer>
  );
}
