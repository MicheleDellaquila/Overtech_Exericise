import { memo, type Dispatch, type SetStateAction } from "react";

interface SearchBarProps {
  className?: string;
  searchTerm: string;
  onChange: Dispatch<SetStateAction<string>>;
}

export const SearchBar = memo(function SearchBar({
  className = "",
  searchTerm,
  onChange,
}: SearchBarProps) {
  return (
    <label className={className} htmlFor="search">
      <input
        type="search"
        id="search"
        name="search"
        placeholder="Cerca per titolo o autore del post"
        className="input input-md placeholder-shown:text-muted not-placeholder-shown:text-black focus:outline-none focus:ring-2 focus:text-accent"
        onChange={(e) => onChange(e.target.value)}
        value={searchTerm}
      />
    </label>
  );
});
