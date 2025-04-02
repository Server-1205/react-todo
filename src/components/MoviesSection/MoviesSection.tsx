import clsx from "clsx";
import { useSearch } from "../../context/Search/useSearch.ts";
import { useDebounce } from "../../hooks/debounse.ts";
import { useDataQuery } from "../../hooks/useDataQuery";
import { MovieType } from "../../types/types";
import { MoviesItem } from "../MoviesItem/MoviesItem";
import { ListRenderer } from "../ui/ListRenderer/ListRenderer";
import { Loader } from "../ui/Loader/Loader.tsx";

interface MoviesSectionProps {
  className?: string;
}

export const MoviesSection = ({ className }: MoviesSectionProps) => {
  const { search } = useSearch();
  const debouncedSearch = useDebounce(search, 500);

  const { data: movies, isLoading } = useDataQuery<MovieType>(
    "movies",
    1,
    debouncedSearch
  );

  if (isLoading) {
    return <Loader />;
  }

  if (!isLoading && !movies?.data?.length) {
    return (
      <div className={clsx("movies-section h-full text-red-600 text-4xl" , className)}>
        No movies found
      </div>
    );
  }

  return (
    <div className={clsx("movies-section", className)}>
      <ListRenderer<MovieType>
        items={movies?.data ?? []}
        render={(item) => <MoviesItem key={item.id} movie={item} />}
      />
    </div>
  );
};
