// Components
import Heading from "../Heading";
import ScrollToButton from "../Buttons/ScrollToButton";

// Styles
import { Section, Hero, Container } from "./HeroBanner.styled";

export default function HeroBanner({ data, onClick }) {
  return (
    <Section className="bgC50">
      {data.map((item) => {
        const title = item.title;
        const desktopImg = "http://localhost:1337" + item.desktop.data.attributes.url;
        // console.log(item.desktop.data.attributes.url);
        return (
          <Hero key={item.id}>
            <img src={desktopImg} alt="" />
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
