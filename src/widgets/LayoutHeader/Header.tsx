import ThemeSwitcher from "../../features/ThemeSwitcher/ui/ThemeSwitcher";
import ButtonModalInfo from "../../shared/ui/Button/ButtonModalInfo";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <div className={styles.flexContainer}>
      <ButtonModalInfo />
      <ThemeSwitcher />
    </div>
  );
}
