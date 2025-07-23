import { useNavigate, useParams } from 'react-router-dom';
import { photos } from '../../mocks/photos';
import { useTheme } from '../../shared/lib/theme/useTheme';
import styles from './Photos.module.css';

export default function Photos() {
    const { theme } = useTheme();
    const navigate = useNavigate();
    const { id } = useParams();
    const filterPhotos = photos.filter((item) => item.albumId === id);

    return (
        <div className={styles.box}>
            <div className={styles.photos}>
                {filterPhotos.map((photo) => {
                    return (
                        <div key={photo.id} className={styles.photoElement}>
                            {photo.title}
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
