import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link, useParams } from 'react-router-dom';
import styles from './Albums.module.css';
import { useTheme } from '../../shared/lib/theme/useTheme';
import { useGetAlbumsByUserIdQuery } from '../../entities/albums/api/albumsApi';
import { ItemList } from '../../shared/ui/ItemList/ItemList';
export default function Albums() {
    const { theme } = useTheme();
    const { id } = useParams();
    const { data: albums, isLoading } = useGetAlbumsByUserIdQuery(Number(id));
    const renderAlbums = (album) => {
        return (_jsx("div", { className: styles.flex, children: _jsxs(Link, { to: `/albums/${album.id}/photos`, className: `${theme === 'light'
                    ? `${styles.linkLight}`
                    : `${styles.linkDark}`} ${styles.link}`, children: [_jsx("div", { className: styles.albumElement }), _jsx("p", { className: styles.albumName, children: album.title })] }) }, album.id));
    };
    if (isLoading)
        return _jsx("p", { children: "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430..." });
    return (_jsx("div", { className: styles.box, children: _jsx("div", { className: styles.albums, children: _jsx(ItemList, { items: albums, renderItem: renderAlbums }) }) }));
}
