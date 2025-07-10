import { useCallback, useMemo, useState } from "react";
import PostCard from "../../entities/post/ui/PostCard";
import type { PostType } from "../../entities/post/ui/PostCardType";
import PostLengthFilter from "../../features/PostLengthFilter/ui/PostLengthFilter";
import { filterByLength } from "../../features/PostLengthFilter/lib/filterByLength";

export type IProps = {
  posts: PostType[];
};

export default function PostList(props: IProps) {
  const { posts } = props;
  const [allPosts, setPosts] = useState(posts);
  const [filterData, setFilterData] = useState<{
    min: number;
    max: number;
  } | null>(null);
  const filteredPosts = useMemo(
    () => allPosts.filter((post) => filterByLength(post, filterData)),
    [allPosts, filterData]
  );

  const handleDeletePost = useCallback(
    (id: string) => {
      const removePost = filteredPosts.filter((post) => post.id !== id);
      setPosts(removePost);
    },
    [filteredPosts]
  );

  return (
    <>
      <PostLengthFilter setFilterData={setFilterData} />
      {filteredPosts.map((post) => {
        return (
          <div key={post.id}>
            <PostCard post={post} handleDeletePost={handleDeletePost} />
          </div>
        );
      })}
    </>
  );
}
