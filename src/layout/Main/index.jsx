import Breadcrumbs from "../../components/common/Breadcrumbs";
import ScrollToTop from "../../components/common/Buttons/ScrollToTop";

export default function Main({ children }) {
  return (
    <main>
      <Breadcrumbs />
      {children}
      <ScrollToTop />
    </main>
  );
}
