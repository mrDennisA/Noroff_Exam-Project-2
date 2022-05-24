import Heading from "../../common/Heading";
import ButtonBlog from "../../common/Buttons/ButtonBlog";
import ResponsiveImage from "../../common/ResponsiveImage";

// Styles
import { Card, Info } from "./index.styled";

export default function BlogCard(props) {
  return (
    <>
      {props.data.map((item) => {
        // console.log(item);
        const { title, slug } = item.attributes;
        const description = item.attributes.description.substring(0, 64) + "...";

        return (
          <Card key={item.id}>
            <ResponsiveImage data={item.attributes.cover.data.attributes} />
            <Info>
              <Heading element="h3">{title}</Heading>
              <p>{description}</p>
              <ButtonBlog to={slug}>read more</ButtonBlog>
            </Info>
          </Card>
        );
      })}
    </>
  );
}
