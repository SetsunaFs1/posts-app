import PostCard from "../../entities/post/ui/PostCard";
import { posts } from "../../utils/posts";
import styles from './PostList.module.css';

function PostList() {
  return (
    <ul className={styles.list}>
      {posts.map((post) => {
        return (
          <li key={post.id}>
            <PostCard post={post} />
          </li>
        );
      })}
    </ul>
  );
}

export default PostList;
