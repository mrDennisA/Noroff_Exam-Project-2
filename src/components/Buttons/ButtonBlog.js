import { Container, Button } from "./ButtonBlog.styled";

export default function ButtonBlog({ to, children }) {
  return (
    <Container>
      <Button to={to}>{children}</Button>
    </Container>
  );
}
