import Breadcrumbs from "../../components/common/Breadcrumbs";
import ScrollToTop from "../../components/common/Buttons/ScrollToTop";

import { Container } from "./index.styled";

export default function Main({ children }) {
  return (
    <Container>
      <Breadcrumbs />
      {children}
      <ScrollToTop />
    </Container>
  );
}
