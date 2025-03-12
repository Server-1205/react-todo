import clsx from 'clsx';
import {
    DetailedHTMLProps,
    FC,
    FormEvent,
    HTMLAttributes,
    useRef,
} from 'react';
import { useAddMovie } from '../../hooks/useAddMovie';
import { AddMovieForm } from '../AddMovieForm/AddMovieForm';

interface AddMovieProps
    extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    className?: string;
}

export const AddMovie: FC<AddMovieProps> = ({ className }) => {
    const formRef = useRef<HTMLFormElement>(null);
    const { mutate } = useAddMovie(formRef);

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
        const data = new FormData(form);
        mutate(data);
    };

    return (
        <div className={clsx([className])} accessKey=''>
            <AddMovieForm onSubmit={onSubmit} formRef={formRef} />
        </div>
    );
};
