import { ReactNode } from 'react';
import { GridContainer } from '../GridContainer/GridContainer';

interface ListRendererProps<T> {
    items: T[];
    render: (item: T) => ReactNode;
}

export const ListRenderer = <T,>({ items, render }: ListRendererProps<T>) => {
    return <GridContainer>{items.map((item) => render(item))}</GridContainer>;
};
