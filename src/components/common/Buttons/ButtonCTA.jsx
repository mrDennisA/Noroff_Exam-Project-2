// Styles
import { Button, Link } from "./ButtonCTA.styled";

export default function ButtonCTA(props) {
  return (
    <Button>
      <Link to={props.to}>
        <span>{props.children}</span>
      </Link>
    </Button>
  );
}
