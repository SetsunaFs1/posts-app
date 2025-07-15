import { Outlet, useNavigate, useParams } from 'react-router-dom';
import Footer from '../../../widgets/LayoutFooter/Footer';
import Header from '../../../widgets/LayoutHeader/Header';
import UserTabs from '../../../widgets/UserTabs/UserTabs';
import { users } from '../../../mocks/users';
import { useTheme } from '../../lib/theme/useTheme';
import styles from './UsersLayout.module.css';

export default function UsersLayout() {
    const { theme } = useTheme();
    const navigate = useNavigate();
    const { id } = useParams();
    const user = users.find((item) => item.id === id);

    return (
        <>
            <Header />
            {user ? (
                <>
                    <h3>Страница пользователя - {user.name}</h3>
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
