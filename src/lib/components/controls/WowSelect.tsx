import { useId, type ReactNode, type SelectHTMLAttributes } from "react";
import { cx } from "../../utils";

export interface WowSelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: ReactNode;
}

export function WowSelect({ label, id, className, children, ...props }: WowSelectProps) {
  const fallbackId = useId();
  const selectId = id ?? fallbackId;

  return (
    <label className="wk-field" htmlFor={selectId}>
      {label ? <span className="wk-field-label">{label}</span> : null}
      <select {...props} id={selectId} className={cx("wk-select", className)}>
        {children}
      </select>
    </label>
  );
}
