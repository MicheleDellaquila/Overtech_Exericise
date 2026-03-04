import { Loading } from "@/components/ui/Loading";
import { Avatar } from "@/containers/Avatar";
import type { Post } from "@/interfaces/post.interface";
import type { User } from "@/interfaces/user.interface";
import getInitials from "@/utils/getInitials";
import { Link } from "react-router-dom";

interface PostItemProps
  extends
    Pick<Post, "title" | "id" | "userId">,
    Pick<User, "name" | "username"> {
  isUsersLoading: boolean;
}

export function PostItem({
  id,
  title,
  userId,
  name,
  username,
  isUsersLoading,
}: PostItemProps) {
  const initials = getInitials(name);
  const avatar = isUsersLoading ? (
    <Avatar loader={<Loading size="loading-md" />} />
  ) : (
    <Link to={`/post/${id}`}>
      <Avatar name={initials} />
    </Link>
  );

  return (
    <article className="flex flex-col gap-4 md:flex-row md:gap-6 md:items-center py-6 border-b border-border/30 no-underline text-inherit">
      {avatar}
      <div className="flex flex-col gap-2">
        <h2 className="font-heading text-[2rem] leading-none mb-2 text-main font-semibold">
          {title}
        </h2>
        <p className="text-muted text-[0.75rem]">
          Pubblicato da:{" "}
          {isUsersLoading ? (
            <Loading variant="loading-dots" />
          ) : (
            <Link className="underline text-accent" to={`/user/${userId}`}>
              {username}
            </Link>
          )}
        </p>
      </div>
    </article>
  );
}
