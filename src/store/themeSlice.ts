import type { StateCreator } from "zustand";

export type ThemeSlice = {
  theme: "light" | "dark";
  changeTheme: () => void;
};

export const themeSlice: StateCreator<ThemeSlice> = (set, get) => ({
  theme: "dark",
  changeTheme: () => {
    const newTheme = get().theme === "light" ? "dark" : "light";
    set({ theme: newTheme });
  },
});
