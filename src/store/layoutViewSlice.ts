export type LayoutViewSlice = {
  layoutView: "list" | "cards";
  changeLayoutView: (view: "list" | "cards") => void;
};

export const layoutViewSlice = (set: any): LayoutViewSlice => ({
  layoutView: "list",
  changeLayoutView: (view: "list" | "cards") => set({ layoutView: view }),
});
