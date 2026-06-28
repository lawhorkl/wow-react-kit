import type { HTMLAttributes } from "react";
import { createAssetStyle } from "../../theme";
import type { WowTheme, WowThemeAssets } from "../../types";
import { cx } from "../../utils";

export interface WowPageRootProps extends HTMLAttributes<HTMLDivElement> {
  theme?: WowTheme;
  assets?: WowThemeAssets;
}

export function WowPageRoot({ theme, assets, className, style, ...props }: WowPageRootProps) {
  const resolvedTheme = theme ?? "frost";

  return (
    <div
      {...props}
      className={cx("wk-page", `wk-theme-${resolvedTheme}`, className)}
      style={{ ...createAssetStyle(assets), ...style }}
    />
  );
}
