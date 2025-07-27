import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { useParams } from 'react-router-dom';
import { useGetPostsByUserQuery } from '../entities/post/api/postsApi';
import { PostListWithLoading } from '../shared/lib/hoc/PostListWithLoading';
export default function UserPostPage() {
    const { id } = useParams();
    const { data: posts, isLoading } = useGetPostsByUserQuery(Number(id));
    return (_jsx(_Fragment, { children: _jsx(PostListWithLoading, { isLoading: isLoading, posts: posts ?? [] }) }));
}
