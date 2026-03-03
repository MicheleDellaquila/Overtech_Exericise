import { Loading } from "@/components/ui/Loading";
import { Avatar } from "@/containers/Avatar";
import type { Post } from "@/interfaces/post.interface";
import type { User } from "@/interfaces/user.interface";

type PostItemProps = Pick<Post, "title"> &
  Pick<User, "username" | "name"> & { isUsersLoading: boolean };

const getInitials = (name: string) => {
  const names = name.split(" ");
  const initials = names.map((n) => n.charAt(0).toUpperCase()).join("");
  return initials;
};

export function PostItem({
  title,
  username,
  name,
  isUsersLoading,
}: PostItemProps) {
  const avatar = isUsersLoading ? (
    <Loading size="loading-md" />
  ) : (
    <p className="text-2xl font-semibold leading-none">{getInitials(name)}</p>
  );

  return (
    <article className="flex flex-col gap-4 md:flex-row md:gap-6 md:items-center py-8 border-b border-border/30 no-underline text-inherit">
      <Avatar>{avatar}</Avatar>
      <div className="flex flex-col gap-2">
        <h2 className="font-heading text-[2rem] leading-none mb-2 text-main font-semibold">
          {title}
        </h2>
        <p className="text-muted text-[0.75rem]">
          Pubblicato da:{" "}
          {isUsersLoading ? <Loading variant="loading-dots" /> : username}
        </p>
      </div>
    </article>
  );
}
