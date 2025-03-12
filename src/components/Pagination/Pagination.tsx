import React from 'react';
import { Button } from '../ui/Button/Button';
import clsx from 'clsx';

interface PaginationProps {
    page: number;
    setPage: React.Dispatch<React.SetStateAction<number>>;
    hasMore: boolean;
    isPlaceholderData: boolean;
    className?: string;
}

const Pagination: React.FC<PaginationProps> = ({
    page,
    setPage,
    hasMore,
    isPlaceholderData,
    className,
}) => (
    <div className={clsx('pagination flex gap-2', className)}>
        <Button
            onClick={() => setPage((prev) => Math.max(prev - 1, 0))}
            variant='primary'
            disabled={page === 1}>
            Prev page
        </Button>
        <Button
            onClick={() => setPage((prev) => (hasMore ? prev + 1 : prev))}
            variant='primary'
            disabled={isPlaceholderData || !hasMore}>
            Next page
        </Button>
    </div>
);

export default Pagination;
