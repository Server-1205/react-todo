import { createContext } from "react";

interface SearchContextProps {
  search: string;
  setSearch: (search: string) => void;
}
export const SearchContext = createContext<SearchContextProps>({
  search: "",
  setSearch: () => {},
});
