import { useEffect, useState } from 'react';
import type { PostType } from '../../../../entities/post/ui/PostCardType';
import { posts as data } from '../../../../mocks/posts';

export function usePosts(id: string | undefined) {
    const [posts, setPosts] = useState<PostType[] | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (data) {
            if (id) {
                const filterPosts = data.filter((post) => post.authorId === id);
                setPosts(filterPosts);
            } else {
                setPosts(data);
            }
            setIsLoading(false);
        }
    }, []);

    return { posts, isLoading };
}
