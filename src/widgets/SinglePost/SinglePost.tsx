import { useNavigate, useParams } from 'react-router-dom';
import PostCard from '../../entities/post/ui/PostCard';
import { useTheme } from '../../shared/lib/theme/useTheme';
import styles from './SinglePost.module.css';
import { useGetOnePostQuery } from '../../entities/post/api/postsApi';

export default function SinglePost() {
    const { theme } = useTheme();
    const { id } = useParams();
    const navigate = useNavigate();

    const { data: post, isLoading } = useGetOnePostQuery(Number(id));

    const getClassName = () => {
        const defaultClasses = `${styles.button} `;
        return `${defaultClasses} ${
            theme === 'light' ? `${styles.buttonLight}` : `${styles.buttonDark}`
        } `;
    };

    if (isLoading) return <p>Загрузка...</p>;

    return (
        <>
            {post && (
                <>
                    <PostCard post={post} />
                    <button
                        onClick={() => navigate(-1)}
                        className={getClassName()}
                    >
                        Назад
                    </button>
                </>
            )}
        </>
    );
}
