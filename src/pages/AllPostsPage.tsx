import { useAllPosts } from '../features/PostList/model/hooks/useAllPosts';
import { PostListWithLoading } from '../shared/lib/hoc/PostListWithLoading';

export default function AllPostsPage() {
    const { posts, isLoading } = useAllPosts();

    return <PostListWithLoading isLoading={isLoading} posts={posts ?? []} />;
}
