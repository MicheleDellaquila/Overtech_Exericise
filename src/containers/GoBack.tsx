import { Link } from "react-router-dom";

export function GoBack() {
  return (
    <Link
      to="/"
      className="text-sm text-muted hover:text-accent transition-colors font-semibold block"
    >
      ← Torna indietro
    </Link>
  );
}
