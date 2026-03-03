interface ErrorProps {
  text: string;
}

export function Error({ text }: ErrorProps) {
  return <p className="text-red-600">{text}</p>;
}
