import { useLayoutEffect } from "react";

// Components
import Heading from "../common/Heading";
import ResponsiveImage from "../common/ResponsiveImage";
import ScrollToButton from "../common/Buttons/ScrollToButton";

// Styles
import { Section, Hero, MediaContainer, HeadingContainer, ButtonContainer } from "./index.styled";
import { useState } from "react";

export default function HeroBanner({ data, onClick }) {
  const [windowSize, setWindowSize] = useState({ width: window.innerWidth, height: window.innerHeight });

  useLayoutEffect(() => {
    const handleSize = () => {
      // setWindowSize({
      //   width: window.innerWidth,
      //   height: window.innerHeight,
      // });

      if (windowSize.width !== window.innerWidth) {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }

      // if (window.innerWidth >= 768) {
      //   setWindowSize({
      //     width: window.innerWidth,
      //     height: window.innerHeight,
      //   });
      // }
    };

    window.addEventListener("resize", handleSize);
    return () => window.removeEventListener("resize", handleSize);
  }, [windowSize]);

  return (
    <Section className="bgC50">
      {data.map((item) => {
        const title = item.title;
        const cover = item.desktop.data.attributes;

        return (
          <Hero key={item.id} dimensions={windowSize.height}>
            <MediaContainer>
              <ResponsiveImage data={cover} />
              <iframe
                src="https://player.vimeo.com/video/691752226?h=6771f74db7&amp;muted=1&amp;autoplay=1&amp;loop=1&amp;transparent=&amp;background=1&amp;app_id=122963"
                frameBorder={0}
                webkitallowfullscreen="true"
                mozallowfullscreen="true"
                allowFullScreen
                title="Voke-Alle_02"
                data-ready={true}
              ></iframe>
            </MediaContainer>
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
