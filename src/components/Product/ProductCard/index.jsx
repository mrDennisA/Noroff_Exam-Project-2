import { Link } from "react-router-dom";
import ResponsiveImage from "../../common/ResponsiveImage";
import Heading from "../../common/Heading";

import { Card, Info, Description } from "./index.styled";

export default function ProductCard(props) {
  // console.log(props);
  return (
    <>
      {props.data.map((item) => {
        const id = item.id;
        const title = item.attributes.title;
        const slug = item.attributes.slug;
        const info = item.attributes.info;

        const Container = ({ children }) => {
          if (props.link) {
            return <Link to={slug}>{children}</Link>;
          } else {
            return <div>{children}</div>;
          }
        };

        // console.log(item);
        return (
          <Card key={id}>
            <Container>
              <div>
                {item.attributes.cover.data.map((item) => {
                  const imgID = item.id;

                  return <ResponsiveImage key={imgID} data={item.attributes} />;
                })}
              </div>
              <Info>
                <div>
                  <Heading element="h4">{title}</Heading>
                  <Description>{info}</Description>
                </div>
              </Info>
            </Container>
          </Card>
        );
      })}
    </>
  );
}
