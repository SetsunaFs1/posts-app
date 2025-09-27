import { useEffect } from 'react';
import { useGetAllPostsQuery } from '../../../../entities/post/api/postsApi';
import { useDispatch } from 'react-redux';
import { setPosts } from '../../../../entities/post/model/slice/postSlice';

export function useAllPosts() {
    const dispatch = useDispatch();
    const { data, isLoading } = useGetAllPostsQuery(null);

    useEffect(() => {
        if (data) {
            dispatch(setPosts(data));
        }
    }, [data]);

    return { posts: data, isLoading };
}
