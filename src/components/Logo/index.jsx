import VokeLogo from "../../assets/images/Voke_logo.svg";

// Styles
import { Link, Img } from "./index.styled";

export default function Logo() {
  return (
    <Link to="/">
      <Img src={VokeLogo} alt="Voke Hair Logo" />
    </Link>
  );
}
