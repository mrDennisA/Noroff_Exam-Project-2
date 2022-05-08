import Heading from "../../Heading";
import ButtonBlog from "../../common/Buttons/ButtonBlog";
import ResponsiveImage from "../../common/ResponsiveImage";

// Styles
import { Card, Info } from "./index.styled";

export default function BlogPostCard({ data }) {
  return (
    <>
      {data.map((item) => {
        // console.log(item);
        const id = item.id;
        const title = item.attributes.title;
        const slug = item.attributes.slug;
        const description = item.attributes.description.substring(0, 64) + "...";

        return (
          <Card key={id}>
            <ResponsiveImage data={item.attributes.cover.data.attributes.formats} />
            <Info>
              <Heading element="h3">{title}</Heading>
              <p>{description}</p>
              <ButtonBlog to={`blog/${slug}`}>read more</ButtonBlog>
            </Info>
          </Card>
        );
      })}
    </>
  );
}
