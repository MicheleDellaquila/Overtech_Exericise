import { ThemeController } from "@/components/ThemeController";

export function Header() {
  return (
    <header className="sticky top-0 md:static py-6 border-b border-border/30 z-50 bg-bg/95 md:bg-transparent backdrop-blur-md md:backdrop-blur-none">
      <div className="flex items-center justify-between">
        <div className="ff-heading font-semibold text-xl tracking-[-0.5px] text-main">
          Feed <em className="text-accent">Editoriale</em>
        </div>
        <ThemeController />
      </div>
    </header>
  );
}
