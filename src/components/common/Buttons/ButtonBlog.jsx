import { Container, Button } from "./ButtonBlog.styled";

export default function ButtonBlog(props) {
  return (
    <Container>
      <Button to={props.to}>{props.children}</Button>
    </Container>
  );
}
