import { useEffect, useState, useRef } from "react";

import ResponsiveImage from "../ResponsiveImage";
import { ARROW_ICON } from "../Icons";

import { Container, ButtonContainer, Arrows, Dots, PrevButton, NextButton, SelectButton } from "./index.styled";

export default function Carousel(props) {
  const [current, setCurrent] = useState(0);
  const [last, setLast] = useState(0);
  const length = props.data.length;
  const timeout = useRef(null);

  // console.log(data);

  const nextSlide = () => {
    setLast(current);
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setLast(current);
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  const selectSlide = (index) => {
    setLast(current);
    setCurrent(index);
  };

  useEffect(() => {
    const forwardSlide = () => {
      setLast(current);
      setCurrent(current === length - 1 ? 0 : current + 1);
    };

    if (props.timer !== null) {
      timeout.current = setTimeout(forwardSlide, props.timer);
      return () => timeout.current && clearTimeout(timeout.current);
    }
  }, [current, props, length]);

  return (
    <>
      {props.data.map((imgList, index) => {
        return (
          <Container key={index} className={index === current ? "active" : index === last ? "out" : ""}>
            {imgList.image.data.map((img) => {
              return (
                <div key={img.id}>
                  <ResponsiveImage data={img.attributes} />
                </div>
              );
            })}
          </Container>
        );
      })}
      {props.arrows || props.dots ? (
        <ButtonContainer>
          {props.arrows && (
            <Arrows>
              <PrevButton onClick={prevSlide}>{ARROW_ICON}</PrevButton>
              <NextButton onClick={nextSlide}>{ARROW_ICON}</NextButton>
            </Arrows>
          )}
          {props.dots && (
            <Dots>
              {Array(props.data.length)
                .fill()
                .map((_, index) => {
                  return (
                    <SelectButton
                      key={index}
                      onClick={() => {
                        selectSlide(index);
                      }}
                      className={index === current ? "active" : ""}
                    ></SelectButton>
                  );
                })}
            </Dots>
          )}
        </ButtonContainer>
      ) : null}
    </>
  );
}
