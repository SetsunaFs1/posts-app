import Footer from "../../widgets/LayoutFooter/Footer";
import Header from "../../widgets/LayoutHeader/Header";
import PostList from "../../widgets/PostList/PostList";

export default function MainLayout() {
  return (
    <>
      <Header />
      <PostList />
      <Footer />
    </>
  );
}
