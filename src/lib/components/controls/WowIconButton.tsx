import { cx } from "../../utils";
import { WowButton, type WowButtonProps } from "./WowButton";

export interface WowIconButtonProps extends WowButtonProps {
  label: string;
}

export function WowIconButton({ label, className, children, ...props }: WowIconButtonProps) {
  return (
    <WowButton {...props} aria-label={label} title={label} className={cx("wk-icon-button", className)}>
      {children}
    </WowButton>
  );
}
