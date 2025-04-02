import { useContext } from "react";
import { SearchContext } from "./search";

interface UseSearchResult {
  search: string;
  setSearch: (search: string) => void;
}

export const useSearch = (): UseSearchResult => {
  const { search, setSearch } = useContext(SearchContext);

  return { search, setSearch };
};
