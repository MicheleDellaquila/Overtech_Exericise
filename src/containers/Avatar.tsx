import type { PropsWithChildren } from "react";

export function Avatar({ children }: PropsWithChildren) {
  return (
    <div className="avatar w-12.5 h-12.5 bg-accent rounded-sm cursor-pointer">
      <div className="flex items-center justify-center">{children}</div>
    </div>
  );
}
