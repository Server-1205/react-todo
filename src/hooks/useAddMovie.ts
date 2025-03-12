import { useMutation, useQueryClient } from '@tanstack/react-query';
import { RefObject } from 'react';

export const useAddMovie = (formRef: RefObject<HTMLFormElement>) => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: async (newMovie: FormData) => {
            const response = await fetch('http://localhost:3004/movies', {
                method: 'POST',
                body: JSON.stringify(Object.fromEntries(newMovie.entries())),
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            return await response.json();
        },

        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['movies'] });
            formRef.current?.reset();
        },

        onError: () => {
            console.error('Error');
        },
    });
};
