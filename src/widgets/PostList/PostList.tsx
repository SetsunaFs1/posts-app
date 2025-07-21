import { useMemo, useState } from 'react';
import PostCard from '../../entities/post/ui/PostCard';
import PostLengthFilter from '../../features/PostLengthFilter/ui/PostLengthFilter';
import { filterByLength } from '../../features/PostLengthFilter/lib/filterByLength';
import { Link } from 'react-router-dom';
import styles from './PostList.module.css';
import { useTheme } from '../../shared/lib/theme/useTheme';
import type { PostType } from '../../entities/post/model/slice/postSlice';

export type IProps = {
    posts: PostType[];
};

export default function PostList(props: IProps) {
    const { theme } = useTheme();
    const { posts } = props;
    const [filterData, setFilterData] = useState<{
        min: number;
        max: number;
    } | null>(null);
    const filteredPosts = useMemo(
        () => posts.filter((post) => filterByLength(post, filterData)),
        [posts, filterData]
    );

    return (
        <>
            <PostLengthFilter setFilterData={setFilterData} />
            {filteredPosts.map((post) => {
                return (
                    <div key={post.id} className={styles.postBox}>
                        <PostCard post={post} />
                        <button
                            className={`${
                                theme === 'light'
                                    ? `${styles.buttonLight}`
                                    : `${styles.buttonDark}`
                            } ${styles.button}`}
                        >
                            <Link
                                to={`/posts/${post.id}`}
                                className={`${
                                    theme === 'light'
                                        ? `${styles.linkLight}`
                                        : `${styles.linkDark}`
                                } ${styles.link}`}
                            >
                                Открыть пост
                            </Link>
                        </button>
                    </div>
                );
            })}
        </>
    );
}
