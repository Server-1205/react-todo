import clsx from 'clsx';
import React from 'react';

interface HtagProps {
    tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    children: React.ReactNode;
    className?: string;
}

export const Htag: React.FC<HtagProps> = ({ tag, children, className }) => {
    const baseClasses = clsx(
        {
            'text-4xl font-bold': tag === 'h1',
            'text-3xl font-bold': tag === 'h2',
            'text-2xl font-bold': tag === 'h3',
            'text-xl font-bold': tag === 'h4',
            'text-lg font-bold': tag === 'h5',
            'text-base font-bold': tag === 'h6',
        },
        className
    );

    switch (tag) {
        case 'h1':
            return <h1 className={baseClasses}>{children}</h1>;
        case 'h2':
            return <h2 className={baseClasses}>{children}</h2>;
        case 'h3':
            return <h3 className={baseClasses}>{children}</h3>;
        case 'h4':
            return <h4 className={baseClasses}>{children}</h4>;
        case 'h5':
            return <h5 className={baseClasses}>{children}</h5>;
        case 'h6':
            return <h6 className={baseClasses}>{children}</h6>;
        default:
            return null;
    }
};
