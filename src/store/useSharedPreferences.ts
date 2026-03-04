import { create } from "zustand";
import { layoutViewSlice, type LayoutViewSlice } from "./layoutViewSlice";

type SharedPreferencesState = LayoutViewSlice;
const useSharedPreferences = create<SharedPreferencesState>((set) => ({
  ...layoutViewSlice(set),
}));

export default useSharedPreferences;
