import type { PropsWithChildren } from "react";

interface UserInfoColProps {
  title: string;
}

export function UserInfoCol({
  title,
  children,
}: PropsWithChildren<UserInfoColProps>) {
  return (
    <section className="flex flex-col gap-2 not-last:mb-8">
      <h3 className="ff-heading text-muted uppercase tracking-wider text-sm">
        {title}
      </h3>
      <div className="flex flex-col gap-3 border-t border-border/30 pt-4">
        {children}
      </div>
    </section>
  );
}
