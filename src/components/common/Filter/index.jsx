import { Container, Button } from "./index.styled";

export default function Filter(props) {
  // console.log(props);

  return (
    <Container>
      <Button className={props.activeFilter === false ? "active" : ""} onClick={() => props.filterItem(false)}>
        ALL
      </Button>
      {props.data.map((item) => {
        return (
          <Button className={props.activeFilter === item.id ? "active" : ""} key={item.id} onClick={() => props.filterItem(item.id)}>
            {item.attributes.color.toUpperCase()}
          </Button>
        );
      })}
    </Container>
  );
}
