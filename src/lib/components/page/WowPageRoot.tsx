import type { HTMLAttributes } from "react";
import { createAssetStyle, useWowTheme } from "../../theme";
import type { WowTheme, WowThemeAssets } from "../../types";
import { cx } from "../../utils";

export interface WowPageRootProps extends HTMLAttributes<HTMLDivElement> {
  theme?: WowTheme;
  assets?: WowThemeAssets;
}

export function WowPageRoot({ theme, assets, className, style, ...props }: WowPageRootProps) {
  const inherited = useWowTheme();
  const resolvedTheme = theme ?? inherited.theme;
  const resolvedAssets = assets ?? inherited.assets;

  return (
    <div
      {...props}
      className={cx("wk-page", `wk-theme-${resolvedTheme}`, className)}
      style={{ ...createAssetStyle(resolvedAssets), ...style }}
    />
  );
}
