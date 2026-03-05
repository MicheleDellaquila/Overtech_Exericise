import { create } from "zustand";
import { layoutViewSlice, type LayoutViewSlice } from "./layoutViewSlice";
import { themeSlice, type ThemeSlice } from "./themeSlice";

type SharedPreferencesState = LayoutViewSlice & ThemeSlice;
const useSharedPreferences = create<SharedPreferencesState>(
  (set, get, api) => ({
    ...layoutViewSlice(set, get, api),
    ...themeSlice(set, get, api),
  }),
);

export default useSharedPreferences;
