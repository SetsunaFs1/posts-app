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
        } else if (theme === 'dark') {
            document.body.style.backgroundColor = '#242424';
        }
    }, [theme]);

    return (
        <div className={styles.toggleThemeWrapper}>
            <span>☀️</span>
            <label className={styles.toggleTheme} htmlFor="checkbox">
                <input
                    type="checkbox"
                    onChange={handleToogleTheme}
                    checked={theme === 'dark'}
                    id="checkbox"
                />
                <span className={`${styles.slider} ${styles.round}`} />
            </label>
            <span>🌒</span>
        </div>
    );
}
