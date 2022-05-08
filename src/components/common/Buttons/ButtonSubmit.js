import { Container, Button } from "./ButtonSubmit.styled";

export default function ButtonSubmit(props) {
  return (
    <Container>
      <Button className={props.className}>
        <span>{props.children}</span>
      </Button>
    </Container>
  );
}
