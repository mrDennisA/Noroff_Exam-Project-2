import ScrollToTop from "../../components/common/Buttons/ScrollToTop";

export default function Main({ children }) {
  return (
    <main>
      {children}
      <ScrollToTop />
    </main>
  );
}
