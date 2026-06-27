import type { ButtonHTMLAttributes } from "react";
import type { WowControlSize, WowControlVariant } from "../../types";
import { cx } from "../../utils";

export interface WowButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: WowControlVariant;
  size?: WowControlSize;
}

export function WowButton({
  variant = "primary",
  size = "md",
  className,
  type = "button",
  ...props
}: WowButtonProps) {
  return (
    <button
      {...props}
      type={type}
      className={cx("wk-button", `wk-button-${variant}`, `wk-control-${size}`, className)}
    />
  );
}
