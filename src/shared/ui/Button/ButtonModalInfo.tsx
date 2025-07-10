import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type MouseEventHandler,
} from "react";
import { createPortal } from "react-dom";
import styles from "./ButtonModalInfo.module.css";
import { useTheme } from "../../lib/theme/useTheme";
import { Modal } from "../Modal/Modal";

export default function ButtonModalInfo() {
  const { theme } = useTheme();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  const openModal = () => setIsModalOpen(true);

  const closeModal = () => setIsModalOpen(false);



  useEffect(() => {
    const handleWrapperClick = (event: MouseEvent) => {
      const { target } = event;

      if (target instanceof Node && rootRef.current === target) {
        closeModal();
      }
    };
    const handleEscapePress = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };

    window.addEventListener("click", handleWrapperClick);
    window.addEventListener("keydown", handleEscapePress);

    return () => {
      window.removeEventListener("click", handleWrapperClick);
      window.removeEventListener("keydown", handleEscapePress);
    };
  }, [isModalOpen]);



  useEffect(() => {
    const handleWrapperClick = () => {};
    const handleEscapePress = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };

    window.addEventListener("click", handleWrapperClick);
    window.addEventListener("keydown", handleEscapePress);

    return () => {
      window.removeEventListener("click", handleWrapperClick);
      window.removeEventListener("keydown", handleEscapePress);
    };
  }, [isModalOpen]);

  const handleClose: MouseEventHandler<HTMLDivElement | HTMLButtonElement> =
    useCallback(() => {
      closeModal();
    }, []);

  return (
    <>
      <button
        className={`${
          theme === "light" ? `${styles.buttonLight}` : `${styles.buttonDark}`
        } ${styles.button}`}
        onClick={openModal}
      >
        О проекте
      </button>
      {isModalOpen &&
        createPortal(
          <Modal ref={rootRef}>
            <Modal.Header>Описание проекта-приложения</Modal.Header>
            <Modal.Body>
              Это приложение для просмотра постов и комментариев, реализованное
              с помощью React + TypeScript.
            </Modal.Body>
            <Modal.Footer>
              <button
                type="button"
                className={`${
                  theme === "light"
                    ? `${styles.buttonLight}`
                    : `${styles.buttonDark}`
                } ${styles.button}`}
                onClick={handleClose}
              >
                Закрыть
              </button>
            </Modal.Footer>
          </Modal>,
          document.getElementById("modal-root")!
        )}
    </>
  );
}
