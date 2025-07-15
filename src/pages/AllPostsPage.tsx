import { PostListWithLoading } from '../shared/lib/hoc/withLoading';
import { usePosts } from '../features/PostList/model/hooks/usePosts';

export default function AllPostsPage() {
    const { posts, isLoading } = usePosts(undefined);

    return <PostListWithLoading isLoading={isLoading} posts={posts ?? []} />;
}
