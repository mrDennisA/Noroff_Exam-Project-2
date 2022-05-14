// Components
import Heading from "../common/Heading";
import ResponsiveImage from "../common/ResponsiveImage";
import ScrollToButton from "../common/Buttons/ScrollToButton";

// Styles
import { Section, Hero, HeadingContainer, ButtonContainer } from "./index.styled";
import { useEffect, useState } from "react";

export default function HeroBanner({ data, onClick }) {
  const [dimensions, setDimensions] = useState(window.innerHeight);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setDimensions(window.innerHeight);
    });
  });

  return (
    <Section className="bgC50">
      {data.map((item) => {
        const title = item.title;
        const cover = item.desktop.data.attributes;
        // console.log(item.desktop.data.attributes);
        return (
          <Hero key={item.id} dimensions={dimensions}>
            <ResponsiveImage data={cover} />
            <HeadingContainer>
              <Heading>{title}</Heading>
            </HeadingContainer>
            <ButtonContainer>
              <ScrollToButton onClick={onClick} />
            </ButtonContainer>
          </Hero>
        );
      })}
    </Section>
  );
}
