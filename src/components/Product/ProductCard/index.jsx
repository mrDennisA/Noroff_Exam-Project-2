// import { useState } from "react";

import { Link } from "react-router-dom";
import ResponsiveImage from "../../common/ResponsiveImage";
import Heading from "../../common/Heading";

import { Card, Info, Description } from "./index.styled";

export default function ProductCard(props) {
  return props.data.map((item, index) => {
    const id = item.id;
    const { title, slug, info } = item.attributes;

    const Container = ({ children }) => {
      if (props.link) {
        return <Link to={slug}>{children}</Link>;
      } else {
        return <div>{children}</div>;
      }
    };

    return (
      <Card key={id} delay={index * 100}>
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
  });
}
