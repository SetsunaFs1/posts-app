import type { CommentType } from '../model/commentType';
import styles from './Comments.module.css';

type CommentsProps = {
    comment: CommentType;
};

export default function Comments(props: CommentsProps) {
    const { comment } = props;

    return (
        <>
            <div id={String(comment.id)} className={styles.commentBox}>
                <p>{comment.body}</p>
                <div className={styles.description}>
                    <span>{comment.name},</span>
                    <span>{comment.email}</span>
                </div>
            </div>
        </>
    );
}
