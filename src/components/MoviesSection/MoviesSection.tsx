import { MovieType } from '../../types/types';
// import { MovieList } from '../MoviesList/MovieList';
import { Loader } from '../ui/Loader/Loader';
import { ListRenderer } from '../ui/ListRenderer/ListRenderer';
import { MoviesItem } from '../MoviesItem/MoviesItem';
import { useDataQuery } from '../../hooks/useDataQuery';

export const MoviesSection = () => {
    const { data: movies, isFetching } = useDataQuery<MovieType>('movies');

    return (
        <div className='movies-section'>
            <ListRenderer<MovieType>
                items={movies?.data || []}
                render={(item) => <MoviesItem key={item.id} movie={item} />}
            />
            {/* <MovieList movies={data} /> */}
            {isFetching && <Loader />}
        </div>
    );
};
