import { Link, useParams } from 'react-router-dom';
import { albums as data } from '../../mocks/albums';
import styles from './Albums.module.css';
import { useTheme } from '../../shared/lib/theme/useTheme';

export default function Albums() {
    const { theme } = useTheme();
    const { id } = useParams();
    const albums = data.filter((album) => album.authorId === id);

    return (
        <div className={styles.box}>
            <div className={styles.albums}>
                <Link
                    to={`/albums/${id}/photos`}
                    className={`${
                        theme === 'light'
                            ? `${styles.linkLight}`
                            : `${styles.linkDark}`
                    } ${styles.link}`}
                >
                    {albums.map((album) => {
                        return (
                            <div key={album.id} className={styles.flex}>
                                <div className={styles.albumElement}></div>
                                <p className={styles.albumName}>
                                    {album.title}
                                </p>
                            </div>
                        );
                    })}
                </Link>
            </div>
        </div>
    );
}
