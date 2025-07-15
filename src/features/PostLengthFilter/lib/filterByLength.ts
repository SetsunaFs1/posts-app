import type { PostType } from '../../../entities/post/ui/PostCardType';

export const filterByLength = (
    post: PostType,
    filterData: { min: number; max: number } | null
) => {
    if (filterData === null) return true;
    const { min, max } = filterData;
    return post.title.length >= min && post.title.length <= max;
};
