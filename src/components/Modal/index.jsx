import Heading from "../Heading";

import { ModalContainer, Container, Content, Header, Body, Footer, Button } from "./index.styled";

export default function Modal(props) {
  if (!props.display) {
    return null;
  }

  return (
    <>
      <ModalContainer onClick={props.onClose} />
      <Container>
        <Content>
          <Header>
            <Heading element="h4">{props.title}</Heading>
          </Header>
          <Body>{props.children}</Body>
          <Footer>
            <Button onClick={props.onClose}>
              <span>Finish</span>
            </Button>
          </Footer>
        </Content>
      </Container>
    </>
  );
}
