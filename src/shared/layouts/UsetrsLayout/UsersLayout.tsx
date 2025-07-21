import { Outlet, useNavigate, useParams } from 'react-router-dom';
import Footer from '../../../widgets/LayoutFooter/Footer';
import Header from '../../../widgets/LayoutHeader/Header';
import UserTabs from '../../../widgets/UserTabs/UserTabs';
import { useTheme } from '../../lib/theme/useTheme';
import styles from './UsersLayout.module.css';
import { useSelector } from 'react-redux';
import type { RootState } from '../../../app/providers/store';
import { selectUserById } from '../../../entities/user/model/slice/userSlice';

export default function UsersLayout() {
    const { theme } = useTheme();
    const navigate = useNavigate();
    const { id } = useParams();
    const currentUser = useSelector((state: RootState) =>
        selectUserById(state, Number(id))
    );

    return (
        <>
            <Header />
            {currentUser ? (
                <>
                    <h3>Страница пользователя - {currentUser.name}</h3>
                    <UserTabs />
                    <Outlet />
                    <button
                        onClick={() => navigate(-1)}
                        className={`${
                            theme === 'light'
                                ? `${styles.buttonLight}`
                                : `${styles.buttonDark}`
                        } ${styles.button}`}
                    >
                        Назад
                    </button>
                </>
            ) : (
                <>
                    <h3>Нет такого пользователя</h3>
                    <button
                        onClick={() => navigate('/')}
                        className={`${
                            theme === 'light'
                                ? `${styles.buttonLight}`
                                : `${styles.buttonDark}`
                        } ${styles.button}`}
                    >
                        На главную
                    </button>
                </>
            )}
            <Footer />
        </>
    );
}
