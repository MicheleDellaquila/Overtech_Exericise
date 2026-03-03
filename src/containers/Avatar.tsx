import type { JSX } from "react";

type AvatarProps = { name: string } | { loader: JSX.Element };

export function Avatar(props: AvatarProps) {
  return (
    <div className="avatar w-12.5 h-12.5 bg-accent rounded-sm cursor-pointer">
      <div className="flex items-center justify-center">
        {"name" in props ? (
          <p className="text-2xl font-semibold leading-none">{props.name}</p>
        ) : (
          props.loader
        )}
      </div>
    </div>
  );
}
