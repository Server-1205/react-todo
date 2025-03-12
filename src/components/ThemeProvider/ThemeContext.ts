import { createContext } from "react";

export const enum Theme {
    DARK = 'app_dark_theme',
    LIGHT = 'app_light_theme'
}

export interface ThemeContextProps {
    theme?: Theme;
    setTheme?: (theme: Theme) => void;
}

export const ThemeContext = createContext<ThemeContextProps>({})