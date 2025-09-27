export const filterByLength = (post, filterData) => {
    if (filterData === null)
        return true;
    const { min, max } = filterData;
    return post.title.length >= min && post.title.length <= max;
};
