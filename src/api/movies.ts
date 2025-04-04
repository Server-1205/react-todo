﻿const baseUrl = "http://localhost:3004/";

export interface Response<T> {
  data: T[] | null;
  hasMore?: boolean;
}

export const fetchData = async <T>(
  endpoint: string,
  page?: number,
  query?: string
): Promise<Response<T>> => {
  const pageString = page ? `page=${page}` : "";
  const queryString = query ? `&q=${query}` : "";

  try {
    const response = await fetch(
      `${baseUrl}${endpoint}?_limit=8?${pageString}${queryString}`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch movies");
    }

    const data: T[] = await response.json();
    const hasMore = data.length > 7;
    return { data, hasMore };
  } catch (error) {
    console.error("Error fetching movies:", error);
    throw error;
  }
};

export const deleteMovie = async (movieId: string) => {
  try {
    const response = await fetch(`${baseUrl}movies/${movieId}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error("Failed to delete movie");
    }
  } catch (error) {
    console.error("Error deleting movie:", error);
    throw error;
  }
};
