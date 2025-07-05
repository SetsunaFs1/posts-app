import Footer from "../../widgets/LayoutFooter/Footer";
import Header from "../../widgets/LayoutHeader/Header";
import type { MainLayoutProps } from "./MainLayoutType";

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
