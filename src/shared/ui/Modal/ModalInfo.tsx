import { useCallback, useEffect, useRef, type MouseEventHandler } from "react";
import styles from "./ModalInfo.module.css";
import { useTheme } from "../../lib/theme/useTheme";

type ModalInfo = {
  onClose: () => void;
};

export default function ModalInfo(props: ModalInfo) {
  const { theme } = useTheme();
  const { onClose } = props;
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleWrapperClick = (event: MouseEvent) => {
      const { target } = event;

      if (target instanceof Node && rootRef.current === target) {
        onClose?.();
      }
    };
    const handleEscapePress = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose?.();
      }
    };

    window.addEventListener("click", handleWrapperClick);
    window.addEventListener("keydown", handleEscapePress);

    return () => {
      window.removeEventListener("click", handleWrapperClick);
      window.removeEventListener("keydown", handleEscapePress);
    };
  }, [onClose]);

  const handleClose: MouseEventHandler<HTMLDivElement | HTMLButtonElement> =
    useCallback(() => {
      onClose?.();
    }, [onClose]);

  return (
    <div className={styles.wrap} ref={rootRef}>
      <div
        className={`${
          theme === "light" ? `${styles.contentLight}` : `${styles.contentDark}`
        } ${styles.content}`}
      >
        <button
          type="button"
          className={`${
            theme === "light"
              ? `${styles.closeButtonLight}`
              : `${styles.closeButtonDark}`
          } ${styles.closeButton}`}
          onClick={handleClose}
        >
          X
        </button>
        <p
          className={`${
            theme === "light" ? `${styles.titleLight}` : `${styles.titleDark}`
          } ${styles.title}`}
        >
          Описание проекта-приложения
        </p>
        <p>
          Это приложение для просмотра постов и комментариев, реализованное с
          помощью React + TypeScript. Описание проекта будет обновляться.
        </p>
      </div>
    </div>
  );
}
