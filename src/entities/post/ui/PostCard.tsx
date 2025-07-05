import styles from "./PostCard.module.css";
import type { ICardProps } from "./PostCardType";

function PostCard(props: ICardProps) {
  const { id, title, content, author, date } = props.post;
  return (
    <div id={id} className={styles.post}>
      <div className={styles.titleLayout}>
        <h2 className={styles.title}>{title}</h2>
        <button>delete</button>
      </div>
      <p className={styles.content}>{content}</p>
      <div className={styles.description}>
        <span className={styles.author}>Автор: {author}</span>
        <span className={styles.date}>{date}</span>
      </div>
      <button className={styles.button}>comments</button>
    </div>
  );
}

export default PostCard;
