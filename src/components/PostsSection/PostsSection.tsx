import { Post } from '../../types/types';

import { Loader } from '../ui/Loader/Loader';
import { ListRenderer } from '../ui/ListRenderer/ListRenderer';
import { MoviesItem } from '../MoviesItem/MoviesItem';
import { useDataQuery } from '../../hooks/useDataQuery';
import clsx from 'clsx';

interface PostsSectionProps {
    className?: string;
}

export const PostsSection = ({ className }: PostsSectionProps) => {
    const { data: movies, isFetching } = useDataQuery<Post>('posts');

    return (
        <div className={clsx(className)}>
            <ListRenderer<Post>
                items={movies?.data || []}
                render={(item) => <MoviesItem key={item.id} movie={item} />}
            />
            {isFetching && <Loader />}
        </div>
    );
};
