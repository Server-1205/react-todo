import {
  keepPreviousData,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { useEffect } from "react";
import { fetchData } from "../api/movies";

export const useDataQuery = <T>(
  andpoint: string,
  page?: number,
  searchQuery: string = ""
) => {
  const queryClient = useQueryClient();

  const query = useQuery({
    queryKey: [andpoint, page, searchQuery],
    queryFn: () => fetchData<T>(andpoint, page, searchQuery),
    placeholderData: keepPreviousData,
    staleTime: 5000,
  });

  useEffect(() => {
    if (!query.isPlaceholderData) {
      queryClient.prefetchQuery({
        queryKey: [andpoint, page, searchQuery],
        queryFn: () => fetchData<T>(andpoint, page, searchQuery),
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query.isPlaceholderData, queryClient]);

  return query;
};
