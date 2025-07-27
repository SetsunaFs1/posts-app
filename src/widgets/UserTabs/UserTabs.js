import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { NavLink, useParams } from 'react-router-dom';
import styles from './UserTabs.module.css';
import { useTheme } from '../../shared/lib/theme/useTheme';
export default function UserTabs() {
    const { theme } = useTheme();
    const { id } = useParams();
    const getClassNames = (isActive) => {
        const defaultClasses = styles.link;
        let additionalClasses = '';
        if (!isActive)
            additionalClasses =
                theme === 'light' ? styles.link : styles.linkDark;
        else
            additionalClasses = styles.linkActive;
        return `${defaultClasses} ${additionalClasses}`;
    };
    return (_jsxs("nav", { className: styles.nav, children: [_jsx("div", { children: _jsx(NavLink, { to: `/users/${id}/posts`, className: ({ isActive }) => getClassNames(isActive), children: "\u041F\u043E\u0441\u0442\u044B" }) }), _jsx("div", { children: _jsx(NavLink, { to: `/users/${id}/albums`, className: ({ isActive }) => getClassNames(isActive), children: "\u0410\u043B\u044C\u0431\u043E\u043C\u044B" }) }), _jsx("div", { children: _jsx(NavLink, { to: `/users/${id}/todos`, className: ({ isActive }) => getClassNames(isActive), children: "\u0417\u0430\u043C\u0435\u0442\u043A\u0438" }) })] }));
}
