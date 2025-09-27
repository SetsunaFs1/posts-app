import { useEffect, useState } from 'react';
import Commentslist from '../../../widgets/CommentsList/ui/CommentsList';
import styles from './PostCard.module.css';
import { useTheme } from '../../../shared/lib/theme/useTheme';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUserById } from '../../user/model/slice/userSlice';
import type { RootState } from '../../../app/providers/store';
import type { PostType } from '../model/slice/postTypes';
import type { UserType } from '../../user/model/slice/userType';

type CardProps = {
    post: PostType;
};

export default function PostCard(props: CardProps) {
    const { theme } = useTheme();
    const { post } = props;
    const { userId, id, title, body } = post;

    const currentUser = useSelector((state: RootState) =>
        selectUserById(state, userId)
    );
    const [toggleComments, setToggleComments] = useState(false);
    const [user, setUser] = useState<UserType | null>(null);
    useEffect(() => {
        if (currentUser) setUser(currentUser);
    }, [currentUser]);

    function handleToggleComments() {
        setToggleComments((prev) => !prev);
    }

    return (
        <div id={String(id)} className={styles.post}>
            <div className={styles.titleLayout}>
                <h2 className={styles.title}>{title}</h2>
            </div>
            <p className={styles.content}>{body}</p>
            <div className={styles.description}>
                <span>
                    <Link
                        to={`/users/${userId}`}
                        className={`${
                            theme === 'light'
                                ? `${styles.linkLight}`
                                : `${styles.linkDark}`
                        } ${styles.link}`}
                    >
                        Автор: {user?.username}
                    </Link>
                </span>
                <span>{user?.email}</span>
            </div>
            <button
                onClick={handleToggleComments}
                className={`${
                    theme === 'light'
                        ? `${styles.buttonLight}`
                        : `${styles.buttonDark}`
                } ${styles.button}`}
            >
                {toggleComments ? 'Закрыть комментарии' : 'Открыть комментарии'}
            </button>
            <Commentslist postId={id} toggleComments={toggleComments} />
        </div>
    );
}
