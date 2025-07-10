import PostCard from "../../entities/post/ui/PostCard";
import { posts } from "../../mocks/posts";

export default function PostList() {
  return (
    <>
      <h1>Posts</h1>
      {posts.map((post) => {
        return <PostCard key={post.id} post={post} />;
      })}
    </>
  );
}
