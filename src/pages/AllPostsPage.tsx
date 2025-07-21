import { PostListWithLoading } from '../shared/lib/hoc/withLoading';
import { useAllPosts } from '../features/PostList/model/hooks/useAllPosts';

export default function AllPostsPage() {
    const { posts, isLoading } = useAllPosts();

    return <PostListWithLoading isLoading={isLoading} posts={posts ?? []} />;
}
