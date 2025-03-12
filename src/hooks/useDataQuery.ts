import {
    keepPreviousData,
    useQuery,
    useQueryClient,
} from '@tanstack/react-query';
import { useEffect } from 'react';
import { fetchData } from '../api/movies';
import { MovieType } from '../types/types';

export const useDataQuery = <T>(andpoint: string, page?: number) => {
    const queryClient = useQueryClient();

    const query = useQuery({
        queryKey: [andpoint, page],
        queryFn: () => fetchData<T>(andpoint, page),
        placeholderData: keepPreviousData,
        staleTime: 5000,
    });

    useEffect(() => {
        if (!query.isPlaceholderData) {
            queryClient.prefetchQuery({
                queryKey: [andpoint, page],
                queryFn: () => fetchData<T>(andpoint, page),
            });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [query.isPlaceholderData, queryClient]);

    return query;
};

export const useMoviesQuery = (page: number) => {
    const queryClient = useQueryClient();

    const query = useQuery({
        queryKey: ['movies', page],
        queryFn: () => fetchData<MovieType>('movies', page),
        placeholderData: keepPreviousData,
        staleTime: 5000,
    });

    useEffect(() => {
        if (!query.isPlaceholderData) {
            queryClient.prefetchQuery({
                queryKey: ['movies', page + 1],
                queryFn: () => fetchData<MovieType>('movies', page + 1),
            });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [query.isPlaceholderData, queryClient]);

    return query;
};
