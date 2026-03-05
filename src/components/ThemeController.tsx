import { Sun, Moon } from "lucide-react";
import { useState } from "react";

export function ThemeController() {
  const [theme, setTheme] = useState("dark");

  const handleChangeTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  return (
    <label className="swap swap-rotate group">
      <input
        type="checkbox"
        className="theme-controller"
        value={theme}
        onChange={handleChangeTheme}
      />
      <Moon className="swap-off h-6 w-6 fill-current transition-all duration-200 group-hover:scale-125 group-hover:text-accent" />
      <Sun className="swap-on h-6 w-6 fill-current transition-all duration-200 group-hover:scale-125 group-hover:text-accent" />
    </label>
  );
}
