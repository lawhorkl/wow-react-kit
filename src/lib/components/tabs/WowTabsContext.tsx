import { createContext, useContext } from "react";

export interface WowTabsContextValue {
  value: string;
  setValue: (value: string) => void;
}

export const WowTabsContext = createContext<WowTabsContextValue | null>(null);

export function useWowTabs() {
  const context = useContext(WowTabsContext);
  if (!context) {
    throw new Error("WowTabs components must be rendered inside WowTabs.Root.");
  }
  return context;
}
