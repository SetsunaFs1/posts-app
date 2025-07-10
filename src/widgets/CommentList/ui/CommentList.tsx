import CommentPost from "../../../entities/comment/ui/CommentPost";
import type { CommentType } from "../../../entities/comment/ui/CommentPostType";

export type IProps = {
  comments: CommentType[];
  toggleComments: boolean;
};

export default function Commentlist(props: IProps) {
  const { comments, toggleComments } = props;

  return (
    <>
      {toggleComments &&
        (comments.length === 0 ? (
          <div>Нет комментариев</div>
        ) : (
          comments.map((comment) => {
            return <CommentPost key={comment.id} comment={comment} />;
          })
        ))}
    </>
  );
}
