import { FormEvent } from 'react';
import {Button} from '../ui/Button/Button';

export const AddMovieForm = ({
    onSubmit,
    formRef,
}: {
    onSubmit: (e: FormEvent<HTMLFormElement>) => void;
    formRef: React.RefObject<HTMLFormElement>;
}) => (
    <form onSubmit={onSubmit} ref={formRef} className='space-y-4'>
        <input
            type='text'
            name='title'
            className='w-full px-4 py-2 border border-gray-300 rounded text-black text-lg'
            placeholder='Введите название'
        />
        <input
            type='text'
            name='body'
            className='w-full p-4 border border-gray-300 rounded text-black text-lg py-2 px-4'
            placeholder='Body'
        />
        <Button type='submit' className='w-full'>
            Add
        </Button>
    </form>
);
