import { jsx as _jsx } from "react/jsx-runtime";
import { useAllPosts } from '../features/PostList/model/hooks/useAllPosts';
import { PostListWithLoading } from '../shared/lib/hoc/PostListWithLoading';
export default function AllPostsPage() {
    const { posts, isLoading } = useAllPosts();
    return _jsx(PostListWithLoading, { isLoading: isLoading, posts: posts ?? [] });
}
