import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useNavigate, useParams } from 'react-router-dom';
import { useTheme } from '../../shared/lib/theme/useTheme';
import styles from './Photos.module.css';
import { useGetPhotosQuery } from '../../entities/albums/api/albumsApi';
import { ItemList } from '../../shared/ui/ItemList/ItemList';
export default function Photos() {
    const { theme } = useTheme();
    const navigate = useNavigate();
    const { id } = useParams();
    const { data: photos, isLoading } = useGetPhotosQuery(Number(id));
    if (isLoading)
        return _jsx("p", { children: "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430..." });
    const renderPhotos = (photo) => {
        return (_jsx("div", { className: styles.flex, children: _jsx("img", { id: String(photo.id), src: photo.url, alt: photo.title }) }, photo.id));
    };
    return (_jsxs("div", { className: styles.box, children: [_jsx("div", { className: styles.photos, children: _jsx(ItemList, { items: photos, renderItem: renderPhotos }) }), _jsx("button", { onClick: () => navigate(-1), className: `${theme === 'light'
                    ? `${styles.buttonLight}`
                    : `${styles.buttonDark}`} ${styles.button}`, children: "\u041D\u0430\u0437\u0430\u0434" })] }));
}
