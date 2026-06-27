import { useMemo, useState, type HTMLAttributes } from "react";
import { cx } from "../../utils";
import { WowTabsContext } from "./WowTabsContext";

export interface WowTabsRootProps extends HTMLAttributes<HTMLDivElement> {
  defaultValue: string;
  value?: string;
  onValueChange?: (value: string) => void;
}

export function WowTabsRoot({ defaultValue, value, onValueChange, className, ...props }: WowTabsRootProps) {
  const [internalValue, setInternalValue] = useState(defaultValue);
  const activeValue = value ?? internalValue;
  const contextValue = useMemo(
    () => ({
      value: activeValue,
      setValue: (nextValue: string) => {
        setInternalValue(nextValue);
        onValueChange?.(nextValue);
      }
    }),
    [activeValue, onValueChange]
  );

  return (
    <WowTabsContext.Provider value={contextValue}>
      <div {...props} className={cx("wk-tabs", className)} />
    </WowTabsContext.Provider>
  );
}
