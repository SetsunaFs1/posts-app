import { useParams } from 'react-router-dom';
import { usePosts } from '../features/PostList/model/hooks/usePosts';
import { PostListWithLoading } from '../shared/lib/hoc/withLoading';

export default function UserPostPage() {
    const { id } = useParams();
    const { posts, isLoading } = usePosts(id);

    return (
        <>
            <PostListWithLoading isLoading={isLoading} posts={posts ?? []} />
        </>
    );
}
