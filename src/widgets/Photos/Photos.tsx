import { useNavigate, useParams } from 'react-router-dom';
import { useTheme } from '../../shared/lib/theme/useTheme';
import styles from './Photos.module.css';
import { useGetPhotosQuery } from '../../entities/albums/api/albumsApi';

type PhotoType = {
    albumId: number;
    id: number;
    title: string;
    url: string;
    thumbnailUrl: string;
};

export default function Photos() {
    const { theme } = useTheme();
    const navigate = useNavigate();
    const { id } = useParams();
    const { data: photos, isLoading } = useGetPhotosQuery(Number(id));

    if (isLoading) return <p>Загрузка...</p>;

    return (
        <div className={styles.box}>
            <div className={styles.photos}>
                {photos.map((photo: PhotoType) => {
                    return (
                        <div key={photo.id} className={styles.flex}>
                            <img
                                id={String(photo.id)}
                                src={photo.url}
                                alt={photo.title}
                            />
                        </div>
                    );
                })}
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
