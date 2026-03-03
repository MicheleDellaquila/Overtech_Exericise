import { Link } from "react-router-dom";

interface UserInfoRowProps {
  label: string;
  value: string;
  isLink?: boolean;
}

export function UserInfoRow({
  label,
  value,
  isLink = false,
}: UserInfoRowProps) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4">
      <span className="text-muted text-xs uppercase tracking-wider min-w-28">
        {label}
      </span>
      {isLink ? (
        <Link
          to={`https://${value}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent hover:underline text-sm"
        >
          {value}
        </Link>
      ) : (
        <span className="text-main text-sm">{value}</span>
      )}
    </div>
  );
}
