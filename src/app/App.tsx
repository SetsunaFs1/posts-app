import styles from "./App.module.css";
import { useTheme } from "../shared/lib/theme/useTheme";
import MainLayout from "../shared/layouts/MainLayout";
import { PostListWithLoading } from "../shared/lib/hoc/withLoading";
import { posts } from "../mocks/posts";
import { useEffect, useState } from "react";

export default function App() {
  const { theme } = useTheme();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (posts) {
      setIsLoading(false);
    }
  }, []);

  return (
    <div className={theme === "light" ? `${styles.light}` : `${styles.dark}`}>
      <MainLayout>
        <PostListWithLoading isLoading={isLoading} posts={posts} />
      </MainLayout>
    </div>
  );
}
