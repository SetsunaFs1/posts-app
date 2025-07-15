import type { CommentType } from './CommentPostType';
import styles from './CommentPost.module.css';

type IProps = {
    comment: CommentType;
};

export default function CommentPost(props: IProps) {
    const { comment } = props;

    return (
        <>
            <div id={comment.id} className={styles.commentBox}>
                <p>{comment.content}</p>
                <div className={styles.description}>
                    <span>{comment.author},</span>
                    <span>{comment.date}</span>
                </div>
            </div>
        </>
    );
}
