import type { CommentType } from "../../comment/ui/CommentPostType";

export type PostType = {
  id: string;
  title: string;
  content: string;
  author: string;
  date: string;
  comments: CommentType[];
};

export type ICardProps = {
  post: PostType;
  handleDeletePost: (id: string) => void;
};
