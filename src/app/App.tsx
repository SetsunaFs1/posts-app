import styles from './App.module.css';
import { useTheme } from '../shared/lib/theme/useTheme';
import { RouterProvider } from 'react-router-dom';
import { router } from './providers/router';
import { useDispatch } from 'react-redux';
import { useGetUsersQuery } from '../entities/user/api/userApi';
import { useEffect } from 'react';
import { setUsers } from '../entities/user/model/slice/userSlice';

export default function App() {
    const dispatch = useDispatch();
    const { data } = useGetUsersQuery(null);
    const { theme } = useTheme();

    useEffect(() => {
        if (data) {
            dispatch(setUsers(data));
        }
    }, [data]);

    return (
        <div
            className={theme === 'light' ? `${styles.light}` : `${styles.dark}`}
        >
            <RouterProvider router={router} />
        </div>
    );
}
