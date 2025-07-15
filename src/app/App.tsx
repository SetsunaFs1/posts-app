import styles from './App.module.css';
import { useTheme } from '../shared/lib/theme/useTheme';
import { RouterProvider } from 'react-router-dom';
import { router } from './providers/router';

export default function App() {
    const { theme } = useTheme();

    return (
        <div
            className={theme === 'light' ? `${styles.light}` : `${styles.dark}`}
        >
            <RouterProvider router={router} />
        </div>
    );
}
