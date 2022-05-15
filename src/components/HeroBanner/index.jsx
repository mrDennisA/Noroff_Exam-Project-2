import { useLayoutEffect } from "react";

// Components
import Heading from "../common/Heading";
import ResponsiveImage from "../common/ResponsiveImage";
import ScrollToButton from "../common/Buttons/ScrollToButton";

// Styles
import { Section, Hero, HeadingContainer, ButtonContainer } from "./index.styled";
import { useState } from "react";

export default function HeroBanner({ data, onClick }) {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  const handleSize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useLayoutEffect(() => {
    handleSize();

    window.addEventListener("resize", handleSize);
    return () => window.removeEventListener("resize", handleSize);
  }, []);

  return (
    <Section className="bgC50">
      {data.map((item) => {
        const title = item.title;
        const cover = item.desktop.data.attributes;

        return (
          <Hero key={item.id} dimensions={windowSize.height}>
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
