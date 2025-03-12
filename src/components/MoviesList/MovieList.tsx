import { MovieType } from '../../types/types';
import { MoviesItem } from '../MoviesItem/MoviesItem';
import { GridContainer } from '../ui/GridContainer/GridContainer';

interface MovieListProps {
    movies: MovieType[];
}

export const MovieList = ({ movies }: MovieListProps) => {
    return (
        <GridContainer>
            {movies?.map((movie) => (
                <MoviesItem key={movie.id} movie={movie} />
            ))}
        </GridContainer>
    );
};
