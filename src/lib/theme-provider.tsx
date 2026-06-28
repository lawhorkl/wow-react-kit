"use client";

import type { ReactNode } from "react";
import { createContext, useContext, useMemo } from "react";
import { createAssetStyle } from "./theme";
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
