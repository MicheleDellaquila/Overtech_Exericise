import { Avatar } from "@/containers/Avatar";
import getInitials from "@/utils/getInitials";
import { Loading } from "./ui/Loading";

interface UserProfileProps {
  name: string;
  username: string;
  isLoading?: boolean;
}

export function UserProfile({
  name,
  username,
  isLoading = false,
}: UserProfileProps) {
  const initials = getInitials(name);

  return (
    <div className="flex gap-6 mb-6">
      {isLoading && <Avatar loader={<Loading size="loading-md" />} />}
      {!isLoading && <Avatar name={initials} />}
      <div className="flex flex-col gap-1">
        <h2 className="ff-heading text-[2rem] leading-none text-main font-semibold">
          {isLoading ? "Caricamento..." : name}
        </h2>
        <p className="text-muted text-sm">
          {isLoading ? "Caricamento..." : `@${username}`}
        </p>
      </div>
    </div>
  );
}
