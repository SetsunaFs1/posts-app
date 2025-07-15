import { NavLink, useParams } from 'react-router-dom';
import styles from './UserTabs.module.css';
import { useTheme } from '../../shared/lib/theme/useTheme';

export default function UserTabs() {
    const { theme } = useTheme();
    const { id } = useParams();
    const getClassNames = (isActive: boolean) => {
        const defaultClasses = styles.link;
        let additionalClasses = '';
        if (!isActive)
            additionalClasses =
                theme === 'light' ? styles.link : styles.linkDark;
        else additionalClasses = styles.linkActive;
        return `${defaultClasses} ${additionalClasses}`;
    };

    return (
        <nav>
            <div>
                <NavLink
                    to={`/users/${id}/posts`}
                    className={({ isActive }) => getClassNames(isActive)}
                >
                    Посты
                </NavLink>
            </div>
            <div>
                <NavLink
                    to={`/users/${id}/albums`}
                    className={({ isActive }) => getClassNames(isActive)}
                >
                    Альбомы
                </NavLink>
            </div>
            <div>
                <NavLink
                    to={`/users/${id}/todos`}
                    className={({ isActive }) => getClassNames(isActive)}
                >
                    Заметки
                </NavLink>
            </div>
        </nav>
    );
}
