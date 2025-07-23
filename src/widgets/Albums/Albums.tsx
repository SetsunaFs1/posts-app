import { Link, useParams } from 'react-router-dom';
import { albums as data } from '../../mocks/albums';
import styles from './Albums.module.css';
import { useTheme } from '../../shared/lib/theme/useTheme';
import React from 'react';

export default function Albums() {
    const { theme } = useTheme();
    const { id } = useParams();
    const albums = data.filter((album) => album.authorId === id);

    return (
        <div className={styles.box}>
            <div className={styles.albums}>
                {albums.map((album) => {
                    return (
                        <React.Fragment key={album.id}>
                            <Link
                                to={`/albums/${album.id}/photos`}
                                className={`${
                                    theme === 'light'
                                        ? `${styles.linkLight}`
                                        : `${styles.linkDark}`
                                } ${styles.link}`}
                            >
                                <div key={album.id} className={styles.flex}>
                                    <div className={styles.albumElement}></div>
                                    <p className={styles.albumName}>
                                        {album.title}
                                    </p>
                                </div>
                            </Link>
                        </React.Fragment>
                    );
                })}
            </div>
        </div>
    );
}
