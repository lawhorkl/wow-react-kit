import type { InputHTMLAttributes, ReactNode } from "react";
import { cx } from "../../utils";

export interface WowToggleProps extends InputHTMLAttributes<HTMLInputElement> {
  label: ReactNode;
}

export function WowToggle({ label, className, ...props }: WowToggleProps) {
  return (
    <label className={cx("wk-toggle", className)}>
      <input {...props} type="checkbox" />
      <span className="wk-toggle-track" />
      <span>{label}</span>
    </label>
  );
}
