import { useParams } from 'react-router-dom';
import { useGetPostsByUserQuery } from '../entities/post/api/postsApi';
import { PostListWithLoading } from '../shared/lib/hoc/PostListWithLoading';

export default function UserPostPage() {
    const { id } = useParams();
    const { data: posts, isLoading } = useGetPostsByUserQuery(Number(id));

    return (
        <>
            <PostListWithLoading isLoading={isLoading} posts={posts ?? []} />
        </>
    );
}
