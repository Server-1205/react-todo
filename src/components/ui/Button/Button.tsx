import React from 'react';
import './Button.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'danger';
}

export const Button: React.FC<ButtonProps> = ({
    variant = 'primary',
    className = '',
    ...props
}) => {
    const classNames = `button ${variant} ${className}`;
    return <button className={classNames} {...props} />;
};
