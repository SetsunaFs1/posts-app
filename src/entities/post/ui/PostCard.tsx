import type { ICardProps } from "../../../utils/postCard";
import styles from "./PostCard.module.css";

function PostCard(props: ICardProps) {
  const { id, title, content, author, date } = props.post;
  return (
    <div id={id} className={styles.post}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.content}>{content}</p>
      <div className={styles.description}>
        <span className={styles.author}>Автор: {author}</span>
        <span className={styles.date}>{date}</span>
      </div>
    </div>
  );
}

export default PostCard;
