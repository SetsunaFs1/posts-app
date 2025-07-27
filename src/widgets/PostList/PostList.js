import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from 'react';
import PostCard from '../../entities/post/ui/PostCard';
import PostLengthFilter from '../../features/PostLengthFilter/ui/PostLengthFilter';
import { filterByLength } from '../../features/PostLengthFilter/lib/filterByLength';
import { Link } from 'react-router-dom';
import styles from './PostList.module.css';
import { useTheme } from '../../shared/lib/theme/useTheme';
import { ItemList } from '../../shared/ui/ItemList/ItemList';
export default function PostList(props) {
    const { theme } = useTheme();
    const { posts } = props;
    const [filterData, setFilterData] = useState(null);
    const filteredPosts = posts.filter((post) => filterByLength(post, filterData));
    const renderPosts = (post) => {
        return (_jsxs("div", { className: styles.postBox, children: [_jsx(PostCard, { post: post }), _jsx("button", { className: `${theme === 'light'
                        ? `${styles.buttonLight}`
                        : `${styles.buttonDark}`} ${styles.button}`, children: _jsx(Link, { to: `/posts/${post.id}`, className: `${theme === 'light'
                            ? `${styles.linkLight}`
                            : `${styles.linkDark}`} ${styles.link}`, children: "\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u043F\u043E\u0441\u0442" }) })] }, post.id));
    };
    return (_jsxs(_Fragment, { children: [_jsx(PostLengthFilter, { setFilterData: setFilterData }), _jsx(ItemList, { items: filteredPosts, renderItem: renderPosts })] }));
}
