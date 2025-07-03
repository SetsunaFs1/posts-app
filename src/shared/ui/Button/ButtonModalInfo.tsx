import { useState } from "react";
import ModalInfo from "../Modal/ModalInfo";
import { createPortal } from "react-dom";
import styles from "./ButtonModalInfo.module.css";
import { useTheme } from "../../lib/theme/useTheme";

export default function ButtonModalInfo() {
  const { theme } = useTheme();
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button
        className={`${
          theme === "light" ? `${styles.buttonLight}` : `${styles.buttonDark}`
        } ${styles.button}`}
        onClick={() => {
          setShowModal(true);
        }}
      >
        О проекте
      </button>
      {showModal &&
        createPortal(
          <ModalInfo onClose={() => setShowModal(false)} />,
          document.getElementById("modal-root")!
        )}
    </>
  );
}
