import type { CommentsType } from './CommentsType';
import styles from './Comments.module.css';

type IProps = {
    comment: CommentsType;
};

export default function Comments(props: IProps) {
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
