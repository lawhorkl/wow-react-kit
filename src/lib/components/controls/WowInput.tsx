import { useId, type InputHTMLAttributes, type ReactNode } from "react";
import { cx } from "../../utils";

export interface WowInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: ReactNode;
}

export function WowInput({ label, id, className, ...props }: WowInputProps) {
  const fallbackId = useId();
  const inputId = id ?? fallbackId;

  return (
    <label className="wk-field" htmlFor={inputId}>
      {label ? <span className="wk-field-label">{label}</span> : null}
      <input {...props} id={inputId} className={cx("wk-input", className)} />
    </label>
  );
}
