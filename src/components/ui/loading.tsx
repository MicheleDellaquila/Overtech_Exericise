type LoadingStyle =
  | "loading-spinner"
  | "loading-dots"
  | "loading-ring"
  | "loading-ball"
  | "loading-bars"
  | "loading-infinity";

type LoadingSize =
  | "loading-xs"
  | "loading-sm"
  | "loading-md"
  | "loading-lg"
  | "loading-xl";

interface LoadingProps {
  variant?: LoadingStyle;
  size?: LoadingSize;
  className?: string;
}

export function Loading({
  variant = "loading-spinner",
  size = "loading-lg",
  className = "",
}: LoadingProps) {
  return <span className={`loading ${variant} ${size} ${className}`.trim()} />;
}
