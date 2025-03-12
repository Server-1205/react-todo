import { FC, ReactNode, useEffect, useMemo, useState } from 'react';
import { Theme, ThemeContext } from '../ThemeContext';

const defaulTheme = (localStorage.getItem('theme') as Theme) || Theme.LIGHT;

interface ThemeProviderProps {
    children: ReactNode;
    initialTheme?: Theme;
}

export const ThemeProvider: FC<ThemeProviderProps> = ({ children, initialTheme }) => {
    const [theme, setTheme] = useState<Theme>(defaulTheme || initialTheme);

    useEffect(() => {
        document.body.className = theme;
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const defaulProps = useMemo(
        () => ({
            theme,
            setTheme,
        }),
        [theme]
    );
    return (
        <ThemeContext.Provider value={defaulProps}>
            {children}
        </ThemeContext.Provider>
    );
};
