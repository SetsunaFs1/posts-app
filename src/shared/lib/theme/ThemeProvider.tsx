import { useState, type PropsWithChildren } from 'react';
import { ThemeContext } from './useTheme';
import type { ThemeType } from './themeContextType';

export default function ThemeProvider(props: PropsWithChildren) {
    const { children } = props;
    const [theme, setTheme] = useState<ThemeType>('light');

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}
