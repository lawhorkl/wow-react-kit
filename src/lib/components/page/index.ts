import { WowPageContent } from "./WowPageContent";
import { WowPageEdge } from "./WowPageEdge";
import { WowPageFooter } from "./WowPageFooter";
import { WowPageHeader } from "./WowPageHeader";
import { WowPageMain } from "./WowPageMain";
import { WowPageNavColumn } from "./WowPageNavColumn";
import { WowPageRoot } from "./WowPageRoot";
import { WowPageShell } from "./WowPageShell";
import { WowPageSidebar } from "./WowPageSidebar";

export { WowPageContent, WowPageEdge, WowPageFooter, WowPageHeader, WowPageMain, WowPageNavColumn, WowPageRoot, WowPageShell, WowPageSidebar };
export type { WowPageHeaderProps } from "./WowPageHeader";
export type { WowPageMainProps } from "./WowPageMain";
export type { WowPageRootProps } from "./WowPageRoot";

export const WowPage = {
  Root: WowPageRoot,
  Edge: WowPageEdge,
  Shell: WowPageShell,
  Header: WowPageHeader,
  Main: WowPageMain,
  NavColumn: WowPageNavColumn,
  Content: WowPageContent,
  Sidebar: WowPageSidebar,
  Footer: WowPageFooter
};
