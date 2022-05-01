import { useState, useRef } from "react";

// Componenets
import Heading from "../Heading";
import { ARROW_ICON } from "../Icons/Icons";

// Styles
import { Title, Content } from "./AccordionItem.styled";

export default function AccordionItem({ data }) {
  const [isActive, setIsActive] = useState(false);
  const [dimensions, setDimensions] = useState(0);
  const contentHeight = useRef();

  const { title, content } = data;

  function handleChange() {
    setIsActive(!isActive);

    setDimensions(contentHeight.current.scrollHeight + 16);

    window.addEventListener("resize", () => {
      setDimensions(null);
      setTimeout(() => {
        setDimensions(contentHeight.current.scrollHeight + 16);
      }, 20);
    });
  }

  return (
    <div>
      <Title onClick={handleChange}>
        <Heading style={isActive ? "active" : ""} element="h4">
          <span>{title}</span>
        </Heading>
        <div className={isActive ? "active" : ""}>{ARROW_ICON}</div>
      </Title>
      <Content ref={contentHeight} isActive={isActive} height={isActive ? dimensions : 0}>
        {content}
      </Content>
    </div>
  );
}
