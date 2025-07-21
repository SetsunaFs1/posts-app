import { useParams } from 'react-router-dom';
import { PostListWithLoading } from '../shared/lib/hoc/withLoading';
import { useGetPostsByUserQuery } from '../entities/post/api/postsApi';

export default function UserPostPage() {
    const { id } = useParams();
    const { data: posts, isLoading } = useGetPostsByUserQuery(Number(id));

    return (
        <>
            <PostListWithLoading isLoading={isLoading} posts={posts ?? []} />
        </>
    );
}
