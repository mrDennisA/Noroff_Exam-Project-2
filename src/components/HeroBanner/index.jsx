// Components
import Heading from "../common/Heading";
import ResponsiveImage from "../common/ResponsiveImage";
import ScrollToButton from "../common/Buttons/ScrollToButton";

// Styles
import { Section, Hero, Container } from "./index.styled";

export default function HeroBanner({ data, onClick }) {
  return (
    <Section className="bgC50">
      {data.map((item) => {
        const title = item.title;
        const cover = item.desktop.data.attributes;
        // console.log(item.desktop.data.attributes);
        return (
          <Hero key={item.id}>
            <ResponsiveImage data={cover} />
            <Heading>{title}</Heading>
          </Hero>
        );
      })}
      <Container>
        <ScrollToButton onClick={onClick} />
      </Container>
    </Section>
  );
}
