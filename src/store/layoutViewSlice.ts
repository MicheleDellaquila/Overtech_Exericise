import type { StateCreator } from "zustand";

export type LayoutViewSlice = {
  layoutView: "list" | "cards";
  changeLayoutView: (view: "list" | "cards") => void;
};

export const layoutViewSlice: StateCreator<LayoutViewSlice> = (set) => ({
  layoutView: "list",
  changeLayoutView: (view: "list" | "cards") => set({ layoutView: view }),
});
