import ReactMarkdown from "react-markdown";

// Components
import Heading from "../common/Heading";
import ButtonCTA from "../common/Buttons/ButtonCTA";
import Carousel from "../common/Carousel";
import ResponsiveImage from "../common/ResponsiveImage";

// Styles
import { Section, Article, RichText } from "./index.styled";

export default function ArticleComp({ data }) {
  return (
    <Section>
      {data.map((item) => {
        const { id, title, text, pageLink, imageDirections, imagePercent, heading } = item;
        // console.log(item);

        return (
          <Article key={id} className={imageDirections}>
            <div>
              {title ? <Heading element={heading}>{title}</Heading> : ""}
              <RichText>
                <ReactMarkdown>{text}</ReactMarkdown>
              </RichText>
              {pageLink.data ? <ButtonCTA to={pageLink.data.attributes.slug}>Learn more</ButtonCTA> : ""}
            </div>
            <div className={item.imagegroup.length > 1 ? imagePercent + " carousel" : imagePercent}>
              {item.imagegroup.length > 1 ? (
                <Carousel data={item.imagegroup} />
              ) : (
                item.imagegroup.map((item) => {
                  return item.image.data.map((img) => (
                    <div key={img.id}>
                      <ResponsiveImage data={img.attributes} />
                    </div>
                  ));
                })
              )}
            </div>
          </Article>
        );
      })}
    </Section>
  );
}
