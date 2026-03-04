import { Loading } from "@/components/ui/Loading";
import { Avatar } from "@/containers/Avatar";
import type { Post } from "@/interfaces/post.interface";
import type { User } from "@/interfaces/user.interface";
import getInitials from "@/utils/getInitials";
import { Link } from "react-router-dom";

interface CardsPostItemProps
  extends
    Pick<Post, "title" | "id" | "userId">,
    Pick<User, "name" | "username"> {
  isUsersLoading: boolean;
}

export function CardsPostItem({
  title,
  id,
  userId,
  name,
  username,
  isUsersLoading,
}: CardsPostItemProps) {
  const initials = getInitials(name);
  const avatar = isUsersLoading ? (
    <Avatar loader={<Loading size="loading-md" />} />
  ) : (
    <Link to={`/post/${id}`}>
      <Avatar name={initials} />
    </Link>
  );

  return (
    <div className="card border bg-main rounded-md p-4 transition-transform hover:scale-[1.02]">
      <article className="flex flex-col gap-4 text-inherit">
        {avatar}
        <div className="flex flex-col gap-2">
          <h2 className="font-heading text-[2rem] leading-none mb-2 text-muted font-semibold">
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
    </div>
  );
}
