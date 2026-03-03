import { Avatar } from "@/containers/Avatar";
import getInitials from "@/utils/getInitials";

interface UserHeaderProps {
  name: string;
  username: string;
}

export function UserHeader({ name, username }: UserHeaderProps) {
  const initials = getInitials(name);

  return (
    <div className="flex gap-6 mb-6">
      <Avatar name={initials} />
      <div className="flex flex-col gap-1">
        <h2 className="ff-heading text-[2rem] leading-none text-main font-semibold">
          {name}
        </h2>
        <p className="text-muted text-sm">@{username}</p>
      </div>
    </div>
  );
}
