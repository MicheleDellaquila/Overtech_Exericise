import { Rows4, Columns4 } from "lucide-react";
import useSharedPreferences from "@/store/useSharedPreferences";

export function DisplayMode() {
  const layoutView = useSharedPreferences((s) => s.layoutView);
  const changeLayoutView = useSharedPreferences((s) => s.changeLayoutView);

  return (
    <div className="join bg-main/15 rounded-md p-2">
      <button
        type="button"
        className="join-item pr-2 border-r cursor-pointer"
        onClick={() => changeLayoutView("list")}
      >
        <Rows4
          size={24}
          className={`${layoutView === "list" ? "text-accent" : "text-muted"}`}
        />
      </button>
      <button
        type="button"
        className="join-item pl-2 cursor-pointer"
        onClick={() => changeLayoutView("cards")}
      >
        <Columns4
          size={24}
          className={`${layoutView === "cards" ? "text-accent" : "text-muted"}`}
        />
      </button>
    </div>
  );
}
