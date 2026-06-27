import type { CSSProperties, ReactNode } from "react";
import { createContext, useContext, useMemo } from "react";
import type { WowTheme, WowThemeAssets } from "./types";
import { cx } from "./utils";

export interface WowThemeProviderProps {
  theme?: WowTheme;
  assets?: WowThemeAssets;
  className?: string;
  children: ReactNode;
}

export interface WowThemeContextValue {
  theme: WowTheme;
  assets?: WowThemeAssets;
}

const WowThemeContext = createContext<WowThemeContextValue>({
  theme: "frost"
});

const assetVarNames: Record<keyof WowThemeAssets, string> = {
  pageBackground: "--wk-body-bg",
  edgeFrame: "--wk-edge-bg",
  shellTexture: "--wk-shell-bg",
  headerImage: "--wk-header-bg",
  buttonSprite: "--wk-button-bg",
  titleBar: "--wk-title-bg",
  panelTexture: "--wk-panel-bg",
  bulletImage: "--wk-bullet-bg"
};

export function createAssetStyle(assets?: WowThemeAssets): CSSProperties | undefined {
  if (!assets) {
    return undefined;
  }

  const style: Record<string, string> = {};

  for (const [key, value] of Object.entries(assets) as Array<[keyof WowThemeAssets, string]>) {
    if (!value) {
      continue;
    }

    const cssValue =
      key === "bulletImage"
        ? `url("${value}") 0 5px no-repeat`
        : key === "buttonSprite" || key === "headerImage"
          ? `url("${value}") no-repeat`
          : `url("${value}")`;

    style[assetVarNames[key]] = cssValue;
  }

  return style as CSSProperties;
}

export function WowThemeProvider({
  theme = "frost",
  assets,
  className,
  children
}: WowThemeProviderProps) {
  const value = useMemo(() => ({ theme, assets }), [theme, assets]);

  return (
    <WowThemeContext.Provider value={value}>
      <div className={cx("wk-theme-provider", `wk-theme-${theme}`, className)} style={createAssetStyle(assets)}>
        {children}
      </div>
    </WowThemeContext.Provider>
  );
}

export function useWowTheme() {
  return useContext(WowThemeContext);
}
