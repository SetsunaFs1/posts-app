import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Outlet, useNavigate, useParams } from 'react-router-dom';
import Footer from '../../../widgets/LayoutFooter/Footer';
import Header from '../../../widgets/LayoutHeader/Header';
import UserTabs from '../../../widgets/UserTabs/UserTabs';
import { useTheme } from '../../lib/theme/useTheme';
import styles from './UsersLayout.module.css';
import { useSelector } from 'react-redux';
import { selectUserById } from '../../../entities/user/model/slice/userSlice';
export default function UsersLayout() {
    const { theme } = useTheme();
    const navigate = useNavigate();
    const { id } = useParams();
    const currentUser = useSelector((state) => selectUserById(state, Number(id)));
    return (_jsxs(_Fragment, { children: [_jsx(Header, {}), currentUser ? (_jsxs(_Fragment, { children: [_jsxs("h3", { children: ["\u0421\u0442\u0440\u0430\u043D\u0438\u0446\u0430 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F - ", currentUser.name] }), _jsx(UserTabs, {}), _jsx(Outlet, {}), _jsx("button", { onClick: () => navigate(-1), className: `${theme === 'light'
                            ? `${styles.buttonLight}`
                            : `${styles.buttonDark}`} ${styles.button}`, children: "\u041D\u0430\u0437\u0430\u0434" })] })) : (_jsxs(_Fragment, { children: [_jsx("h3", { children: "\u041D\u0435\u0442 \u0442\u0430\u043A\u043E\u0433\u043E \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F" }), _jsx("button", { onClick: () => navigate('/'), className: `${theme === 'light'
                            ? `${styles.buttonLight}`
                            : `${styles.buttonDark}`} ${styles.button}`, children: "\u041D\u0430 \u0433\u043B\u0430\u0432\u043D\u0443\u044E" })] })), _jsx(Footer, {})] }));
}
