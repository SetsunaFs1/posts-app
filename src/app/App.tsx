import styles from "./App.module.css";
import { useTheme } from "../shared/lib/theme/useTheme";
import MainLayout from "../shared/layouts/MainLayout";
import PostList from "../widgets/PostList/PostList";

export default function App() {
  const { theme } = useTheme();

  return (
    <div className={theme === "light" ? `${styles.light}` : `${styles.dark}`}>
      <MainLayout children={<PostList />} />
    </div>
  );
}
