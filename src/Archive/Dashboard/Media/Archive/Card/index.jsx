import ResponsiveImage from "../../../../ResponsiveImage";

import { CardContainer, Checkbox, ImgContainer, Description, Name, Size } from "./index.styled";

export default function Card({ data }) {
  const { name, ext, height, width } = data;

  return (
    <CardContainer key={data.id}>
      <Checkbox />
      <ImgContainer>
        <ResponsiveImage data={data.formats} />
      </ImgContainer>
      <Description>
        <Name>{name}</Name>
        <Size>{ext.replace(/\./g, "").toUpperCase() + " - " + height + "X" + width}</Size>
      </Description>
    </CardContainer>
  );
}
