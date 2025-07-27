import React, { useContext } from 'react';
export const ThemeContext = React.createContext(null);
export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context)
        console.error('Error Context');
    return context;
};
