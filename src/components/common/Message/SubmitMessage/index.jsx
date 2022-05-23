import { useState, useEffect, useRef } from "react";

import { Container, Content } from "./index.styled";
import { BARCLOSED_ICON } from "../../Icons";

export default function SubmitMessage(props) {
  const [delay, setDelay] = useState(false);
  const timeout = useRef(null);
  // console.log(props);

  const close = () => {
    setDelay(false);
    setTimeout(() => {
      props.onClick();
    }, props.timer);
  };

  useEffect(() => {
    if (props.respons) {
      timeout.delay = setTimeout(() => {
        setDelay(true);
      }, 10);

      timeout.delay = setTimeout(() => {
        setDelay(false);
      }, props.delay);

      return () => timeout.delay && clearTimeout(timeout.delay);
    }
  }, [props]);

  return (
    <>
      {props.respons && (
        <Container className={delay ? "active " + props.respons.validation : props.respons.validation}>
          <Content>
            <div>
              <button onClick={close}>{BARCLOSED_ICON}</button>
            </div>
            <div>{props.respons.message}</div>
          </Content>
        </Container>
      )}
    </>
  );
}
