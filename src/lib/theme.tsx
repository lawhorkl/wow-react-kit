import type { CSSProperties } from "react";
import type { WowThemeAssets } from "./types";

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
