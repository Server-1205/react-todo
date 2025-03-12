import { MovieType } from '../../types/types';

interface MoviesItemProps {
    movie: MovieType;
}

export const MoviesItem = (props: MoviesItemProps) => {
    const {
        movie: { title, body },
    } = props;

    // const hendleDelete = () => {
    //     mutation.mutate(String(id));
    // };

    return (
        <div className='bg-purple-600 p-3 min-h-[320px] rounded-md shadow-md shadow-purple-700'>
            <div>{title}</div>
            <div>{body}</div>
            {/* <Button onClick={hendleDelete} variant='danger'>
                Delete
            </Button> */}
        </div>
    );
};
