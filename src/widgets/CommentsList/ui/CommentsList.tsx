import { useGetCommentsQuery } from '../../../entities/comments/api/commentsApi';
import Comments from '../../../entities/comments/ui/Comments';
import type { CommentsType } from '../../../entities/comments/ui/CommentsType';

export type IProps = {
    postId: number;
    toggleComments: boolean;
};

export default function Commentlist(props: IProps) {
    const { postId, toggleComments } = props;
    const { data: comments } = useGetCommentsQuery(String(postId));

    return (
        <>
            {toggleComments &&
                (comments.length === 0 ? (
                    <div>Нет комментариев</div>
                ) : (
                    comments.map((comment: CommentsType) => {
                        return <Comments key={comment.id} comment={comment} />;
                    })
                ))}
        </>
    );
}
