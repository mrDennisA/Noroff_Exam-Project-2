import { useState } from "react";

// Componenets
import Heading from "../../Heading";
import { ARROW_ICON } from "../../Icons";

// Styles
import { Title, Content } from "./index.styled";

export default function AccordionItem({ data }) {
  const [isActive, setIsActive] = useState(false);
  const { title, content } = data;

  function handleChange() {
    setIsActive(!isActive);
  }

  return (
    <div>
      <Title onClick={handleChange}>
        <Heading style={isActive ? "active" : ""} element="h4">
          <span>{title}</span>
        </Heading>
        <div className={isActive ? "active" : ""}>{ARROW_ICON}</div>
      </Title>
      <Content className={isActive ? "" : "closed"}>{content}</Content>
    </div>
  );
}
