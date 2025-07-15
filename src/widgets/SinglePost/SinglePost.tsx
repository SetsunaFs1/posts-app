import { useNavigate, useParams } from 'react-router-dom';
import { posts } from '../../mocks/posts';
import type { PostType } from '../../entities/post/ui/PostCardType';
import PostCard from '../../entities/post/ui/PostCard';
import { useTheme } from '../../shared/lib/theme/useTheme';
import styles from './SinglePost.module.css';

export default function SinglePost() {
    const { theme } = useTheme();
    const { id } = useParams();
    const navigate = useNavigate();
    const post = posts.find((item) => item.id === id) as PostType;
    const getClassName = () => {
        const defaultClasses = `${styles.button} `;
        return `${defaultClasses} ${
            theme === 'light' ? `${styles.buttonLight}` : `${styles.buttonDark}`
        } `;
    };
    return (
        <>
            <PostCard post={post} />
            <button onClick={() => navigate(-1)} className={getClassName()}>
                Назад
            </button>
        </>
    );
}
