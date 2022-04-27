import Heading from "../Heading";
import ButtonBlog from "../Buttons/ButtonBlog";
import ResponsiveImage from "../ResponsiveImage";

// Styles
import { Card, Info } from "./BlogCard.styled";

export default function BlogPostCard({ data }) {
  return (
    <>
      {data.map((item) => {
        const id = item.id;
        const title = item.attributes.title;
        const description = item.attributes.description.substring(0, 64) + "...";

        return (
          <Card key={id}>
            <ResponsiveImage data={item.attributes.cover.data.attributes.formats} />
            <Info>
              <Heading element="h3">{title}</Heading>
              <p>{description}</p>
              <ButtonBlog to="/">read more</ButtonBlog>
            </Info>
          </Card>
        );
      })}
    </>
  );
}
