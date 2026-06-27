import { WowTabsList } from "./WowTabsList";
import { WowTabsPanel } from "./WowTabsPanel";
import { WowTabsRoot } from "./WowTabsRoot";
import { WowTabsTrigger } from "./WowTabsTrigger";

export { WowTabsList, WowTabsPanel, WowTabsRoot, WowTabsTrigger };
export type { WowTabsPanelProps } from "./WowTabsPanel";
export type { WowTabsRootProps } from "./WowTabsRoot";
export type { WowTabsTriggerProps } from "./WowTabsTrigger";

export const WowTabs = {
  Root: WowTabsRoot,
  List: WowTabsList,
  Trigger: WowTabsTrigger,
  Panel: WowTabsPanel
};
