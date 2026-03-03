import type { Dispatch, SetStateAction } from "react";

interface SearchBarProps {
  searchTerm: string;
  onChange: Dispatch<SetStateAction<string>>;
}

export function SearchBar({ searchTerm, onChange }: SearchBarProps) {
  return (
    <label htmlFor="search">
      <input
        type="search"
        name="search"
        placeholder="Cerca per titolo o autore del post"
        className="input input-md placeholder-shown:text-muted not-placeholder-shown:text-black w-full block"
        onChange={(e) => onChange(e.target.value)}
        value={searchTerm}
      />
    </label>
  );
}
