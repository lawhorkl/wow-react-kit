import type { ReactNode } from "react";

export type WowTheme = "classic" | "frost" | "horde";
export type WowLayoutVariant = "three-column" | "two-column" | "horizontal";
export type WowControlVariant = "primary" | "secondary" | "ghost" | "danger";
export type WowControlSize = "sm" | "md" | "lg";

export interface WowThemeAssets {
  pageBackground?: string;
  edgeFrame?: string;
  shellTexture?: string;
  headerImage?: string;
  buttonSprite?: string;
  titleBar?: string;
  panelTexture?: string;
  bulletImage?: string;
}

export interface WowNavLinkData {
  label: string;
  href: string;
}

export interface WowSidebarBox {
  title: string;
  children?: ReactNode;
}

export interface WowPostData {
  title: string;
  date?: string;
  author?: string;
  timestamp?: string;
  children: ReactNode;
}
