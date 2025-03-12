import clsx from 'clsx';
import React, { ReactNode } from 'react';

type Props = {
    children: ReactNode;
    className?: string;
};

export const Container: React.FC<Props> = ({ children, className }) => {
    return <div className={clsx('max-w-[1200px] mx-auto h-[100%]', className)}>{children}</div>;
};
