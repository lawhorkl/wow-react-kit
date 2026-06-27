import type { InputHTMLAttributes, ReactNode } from "react";
import { cx } from "../../utils";

export interface WowCheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  label: ReactNode;
}

export function WowCheckbox({ label, className, ...props }: WowCheckboxProps) {
  return (
    <label className={cx("wk-check", className)}>
      <input {...props} type="checkbox" />
      <span>{label}</span>
    </label>
  );
}
