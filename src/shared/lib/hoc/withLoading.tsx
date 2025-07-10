import type { JSX } from "react";
import type { PostType } from "../../../entities/post/ui/PostCardType";
import PostList, { type IProps } from "../../../widgets/PostList/PostList";
import styles from "./withLoading.module.css";

type HocProps = {
  isLoading: boolean;
  posts: PostType[];
};

function withLoading(WrappedComponent: (props: IProps) => JSX.Element) {
  return function ComponentWithLoading({ isLoading, ...posts }: HocProps) {
    if (!isLoading) return <WrappedComponent {...posts} />;
    return <div className={styles.loader}>Загрузка...</div>;
  };
}

export const PostListWithLoading = withLoading(PostList);
