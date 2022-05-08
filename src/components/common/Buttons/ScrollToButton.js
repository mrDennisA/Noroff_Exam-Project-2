import { Button } from "./ScrollToButton.styled";
import { ARROW_ICON } from "../Icons";

export default function ScrollToButton({ onClick }) {
  // console.log(props);
  return <Button onClick={onClick}>{ARROW_ICON}</Button>;
}
