import { Link, useParams } from 'react-router-dom';
import styles from './Albums.module.css';
import { useTheme } from '../../shared/lib/theme/useTheme';
import { useGetAlbumsByUserIdQuery } from '../../entities/albums/api/albumsApi';

type AlbumType = {
    userId: number;
    id: number;
    title: string;
};

export default function Albums() {
    const { theme } = useTheme();
    const { id } = useParams();
    const { data: albums, isLoading } = useGetAlbumsByUserIdQuery(Number(id));

    if (isLoading) return <p>Загрузка...</p>;

    return (
        <div className={styles.box}>
            <div className={styles.albums}>
                {albums.map((album: AlbumType) => {
                    return (
                        <div key={album.id} className={styles.flex}>
                            <Link
                                to={`/albums/${id}/photos`}
                                className={`${
                                    theme === 'light'
                                        ? `${styles.linkLight}`
                                        : `${styles.linkDark}`
                                } ${styles.link}`}
                            >
                                <div className={styles.albumElement}></div>
                                <p className={styles.albumName}>
                                    {album.title}
                                </p>
                            </Link>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
