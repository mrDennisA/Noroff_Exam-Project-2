import ReactMarkdown from "react-markdown";

// Components
import Heading from "../Heading";
import ButtonCTA from "../Buttons/ButtonCTA";
import ResponsiveImage from "../ResponsiveImage";

// Styles
import { Section, Article } from "./Article.styled";

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
              <div>
                <ReactMarkdown>{text}</ReactMarkdown>
              </div>
              {pageLink.data ? <ButtonCTA to={pageLink.data.attributes.slug}>Learn more</ButtonCTA> : ""}
            </div>
            <div className={imagePercent}>
              {item.imagegroup[0].image.data.map((item) => {
                return (
                  <div key={item.id}>
                    <ResponsiveImage data={item.attributes.formats} />
                  </div>
                );
              })}
            </div>
          </Article>
        );
      })}
    </Section>
  );
}
