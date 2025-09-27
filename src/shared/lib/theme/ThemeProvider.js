import { jsx as _jsx } from "react/jsx-runtime";
import { useState } from 'react';
import { ThemeContext } from './useTheme';
export default function ThemeProvider(props) {
    const { children } = props;
    const [theme, setTheme] = useState('light');
    return (_jsx(ThemeContext.Provider, { value: { theme, setTheme }, children: children }));
}
