import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useNavigate, useParams } from 'react-router-dom';
import PostCard from '../../entities/post/ui/PostCard';
import { useTheme } from '../../shared/lib/theme/useTheme';
import styles from './SinglePost.module.css';
import { useGetOnePostQuery } from '../../entities/post/api/postsApi';
export default function SinglePost() {
    const { theme } = useTheme();
    const { id } = useParams();
    const navigate = useNavigate();
    const { data: post, isLoading } = useGetOnePostQuery(Number(id));
    const getClassName = () => {
        const defaultClasses = `${styles.button} `;
        return `${defaultClasses} ${theme === 'light' ? `${styles.buttonLight}` : `${styles.buttonDark}`} `;
    };
    if (isLoading)
        return _jsx("p", { children: "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430..." });
    return (_jsx(_Fragment, { children: post && (_jsxs(_Fragment, { children: [_jsx(PostCard, { post: post }), _jsx("button", { onClick: () => navigate(-1), className: getClassName(), children: "\u041D\u0430\u0437\u0430\u0434" })] })) }));
}
