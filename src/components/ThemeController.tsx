import useSharedPreferences from "@/store/useSharedPreferences";
import { Sun, Moon } from "lucide-react";
import { useEffect } from "react";
import { useShallow } from "zustand/shallow";

export function ThemeController() {
  const { theme, changeTheme } = useSharedPreferences(
    useShallow((state) => ({
      theme: state.theme,
      changeTheme: state.changeTheme,
    })),
  );

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  return (
    <label className="swap swap-rotate group">
      <input
        type="checkbox"
        className="theme-controller"
        checked={theme === "light"}
        onChange={changeTheme}
      />
      <Moon className="swap-off h-6 w-6 fill-current transition-all duration-200 group-hover:scale-125 group-hover:text-accent" />
      <Sun className="swap-on h-6 w-6 fill-current transition-all duration-200 group-hover:scale-125 group-hover:text-accent" />
    </label>
  );
}
