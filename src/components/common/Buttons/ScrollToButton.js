import { Button } from "./ScrollToButton.styled";
import { ARROW_ICON } from "../Icons";

export default function ScrollToButton(props) {
  // console.log(props);
  return <Button onClick={props.onClick}>{ARROW_ICON}</Button>;
}
