import { useState } from "react";
import DeleteIcon from "../../../icons/delete-icon";
import Commentlist from "../../../widgets/CommentList/ui/CommentList";
import styles from "./PostCard.module.css";
import type { ICardProps } from "./PostCardType";
import { useTheme } from "../../../shared/lib/theme/useTheme";

export default function PostCard(props: ICardProps) {
  const { theme } = useTheme();
  const { post, handleDeletePost } = props;
  const { id, title, content, author, date } = post;
  const [toggleComments, setToggleComments] = useState(false);

  function handleToggleComments() {
    setToggleComments((prev) => !prev);
  }

  return (
    <div id={id} className={styles.post}>
      <div className={styles.titleLayout}>
        <h2 className={styles.title}>{title}</h2>
        <button
          onClick={() => handleDeletePost(id)}
          className={styles.DeleteButton}
        >
          <DeleteIcon />
        </button>
      </div>
      <p className={styles.content}>{content}</p>
      <div className={styles.description}>
        <span className={styles.author}>Автор: {author}</span>
        <span className={styles.date}>{date}</span>
      </div>
      <button
        onClick={handleToggleComments}
        className={`${
          theme === "light" ? `${styles.buttonLight}` : `${styles.buttonDark}`
        } ${styles.button}`}
      >
        {toggleComments ? "Закрыть комментарии" : "Открыть комментарии"}
      </button>
      <Commentlist comments={post.comments} toggleComments={toggleComments} />
    </div>
  );
}
