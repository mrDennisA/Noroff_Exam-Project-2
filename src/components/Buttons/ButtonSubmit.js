import { Container, Button } from "./ButtonSubmit.styled";

export default function ButtonSubmit({ children }) {
  return (
    <Container>
      <Button>
        <span>{children}</span>
      </Button>
    </Container>
  );
}
