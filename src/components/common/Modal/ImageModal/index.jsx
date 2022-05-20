import { useEffect, useState } from "react";

import ResponsiveImage from "../../ResponsiveImage";
import { BARCLOSED_ICON } from "../../Icons";

import { ModalContainer, Content, ButtonContainer } from "./index.styled";

export default function ImageModal(props) {
  const [display, setDisplay] = useState(false);

  const displayToggle = () => {
    setDisplay(!display);
    document.body.style.overflow = document.body.style.overflow ? null : "hidden";
  };

  const closeOnKey = (e) => {
    if (e.keyCode === 27) {
      displayToggle();
    }
  };

  useEffect(() => {
    document.body.addEventListener("keydown", closeOnKey);
    return () => {
      document.body.removeEventListener("keydown", closeOnKey);
    };
  });

  return (
    <>
      {props.data.map((item) => {
        return (
          <button key={item.id} onClick={displayToggle}>
            <ResponsiveImage data={item.attributes} />
          </button>
        );
      })}
      {display && (
        <ModalContainer>
          <Content>
            {props.data.map((item) => {
              return (
                <div key={item.id}>
                  <ResponsiveImage data={item.attributes} />
                </div>
              );
            })}
            <ButtonContainer>
              <button onClick={displayToggle}>{BARCLOSED_ICON}</button>
            </ButtonContainer>
          </Content>
        </ModalContainer>
      )}
    </>
  );
}
