import { useGetCommentsQuery } from '../../../entities/comments/api/commentsApi';
import type { CommentType } from '../../../entities/comments/model/commentType';
import Comments from '../../../entities/comments/ui/Comments';
import { ItemList } from '../../../shared/ui/ItemList/ItemList';

export type IProps = {
    postId: number;
    toggleComments: boolean;
};

export default function Commentlist(props: IProps) {
    const { postId, toggleComments } = props;
    const { data: comments } = useGetCommentsQuery(String(postId));

    const renderComments = (comment: CommentType) => {
        return <Comments key={comment.id} comment={comment} />;
    };

    return (
        <>
            {toggleComments &&
                (comments.length === 0 ? (
                    <div>Нет комментариев</div>
                ) : (
                    <ItemList items={comments} renderItem={renderComments} />
                ))}
        </>
    );
}
