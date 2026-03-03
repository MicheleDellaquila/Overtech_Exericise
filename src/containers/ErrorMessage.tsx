interface ErrorProps {
  text: string;
}

export function ErrorMessage({ text }: ErrorProps) {
  return <p className="text-red-600">{text}</p>;
}
