// Components
import Heading from "../../common/Heading";
import ResponsiveImage from "../../common/ResponsiveImage";

// Styles
import { Section, Article, Ingredient, ImageContainer, Info } from "./index.styled";

export default function ArticleIngredients(props) {
  // console.log(props);
  return (
    <Section>
      <Article>
        {props.data.map((item) => {
          // console.log(item);
          const { id, title, description } = item;
          const cover = item.cover.data.attributes;

          return (
            <Ingredient key={id}>
              <ImageContainer>
                <ResponsiveImage data={cover} />
              </ImageContainer>
              <Info>
                <Heading element="h3">{title}</Heading>
                <p>{description}</p>
              </Info>
            </Ingredient>
          );
        })}
      </Article>
    </Section>
  );
}
