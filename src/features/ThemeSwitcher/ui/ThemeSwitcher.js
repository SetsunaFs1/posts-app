import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect } from 'react';
import { useTheme } from '../../../shared/lib/theme/useTheme';
import styles from './ThemeSwitcher.module.css';
export default function ThemeSwitcher() {
    const { theme, setTheme } = useTheme();
    const handleToogleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };
    useEffect(() => {
        if (theme === 'light') {
            document.body.style.backgroundColor = '#ffffff';
        }
        else if (theme === 'dark') {
            document.body.style.backgroundColor = '#242424';
        }
    }, [theme]);
    return (_jsxs("div", { className: styles.toggleThemeWrapper, children: [_jsx("span", { children: "\u2600\uFE0F" }), _jsxs("label", { className: styles.toggleTheme, htmlFor: "checkbox", children: [_jsx("input", { type: "checkbox", onChange: handleToogleTheme, checked: theme === 'dark', id: "checkbox" }), _jsx("span", { className: `${styles.slider} ${styles.round}` })] }), _jsx("span", { children: "\uD83C\uDF12" })] }));
}
