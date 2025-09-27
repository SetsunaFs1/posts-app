import { useNavigate, useParams } from 'react-router-dom';
import { useTheme } from '../../shared/lib/theme/useTheme';
import styles from './Photos.module.css';
import { useGetPhotosQuery } from '../../entities/albums/api/albumsApi';
import type { PhotoType } from '../../entities/photos/model/photoType';
import { ItemList } from '../../shared/ui/ItemList/ItemList';

export default function Photos() {
    const { theme } = useTheme();
    const navigate = useNavigate();
    const { id } = useParams();
    const { data: photos, isLoading } = useGetPhotosQuery(Number(id));

    if (isLoading) return <p>Загрузка...</p>;

    const renderPhotos = (photo: PhotoType) => {
        return (
            <div key={photo.id} className={styles.flex}>
                <img id={String(photo.id)} src={photo.url} alt={photo.title} />
            </div>
        );
    };

    return (
        <div className={styles.box}>
            <div className={styles.photos}>
                <ItemList items={photos} renderItem={renderPhotos} />
            </div>
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
        </div>
    );
}
