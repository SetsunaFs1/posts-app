import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import Commentslist from '../../../widgets/CommentsList/ui/CommentsList';
import styles from './PostCard.module.css';
import { useTheme } from '../../../shared/lib/theme/useTheme';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUserById } from '../../user/model/slice/userSlice';
export default function PostCard(props) {
    const { theme } = useTheme();
    const { post } = props;
    const { userId, id, title, body } = post;
    const currentUser = useSelector((state) => selectUserById(state, userId));
    const [toggleComments, setToggleComments] = useState(false);
    const [user, setUser] = useState(null);
    useEffect(() => {
        if (currentUser)
            setUser(currentUser);
    }, [currentUser]);
    function handleToggleComments() {
        setToggleComments((prev) => !prev);
    }
    return (_jsxs("div", { id: String(id), className: styles.post, children: [_jsx("div", { className: styles.titleLayout, children: _jsx("h2", { className: styles.title, children: title }) }), _jsx("p", { className: styles.content, children: body }), _jsxs("div", { className: styles.description, children: [_jsx("span", { children: _jsxs(Link, { to: `/users/${userId}`, className: `${theme === 'light'
                                ? `${styles.linkLight}`
                                : `${styles.linkDark}`} ${styles.link}`, children: ["\u0410\u0432\u0442\u043E\u0440: ", user?.username] }) }), _jsx("span", { children: user?.email })] }), _jsx("button", { onClick: handleToggleComments, className: `${theme === 'light'
                    ? `${styles.buttonLight}`
                    : `${styles.buttonDark}`} ${styles.button}`, children: toggleComments ? 'Закрыть комментарии' : 'Открыть комментарии' }), _jsx(Commentslist, { postId: id, toggleComments: toggleComments })] }));
}
