// Styles
import { Button, Link } from "./ButtonCTA.styled";

export default function ButtonCTA({ to, children }) {
  return (
    <Button>
      <Link to={to}>
        <span>{children}</span>
      </Link>
    </Button>
  );
}
