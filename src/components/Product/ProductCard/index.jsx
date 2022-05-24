// import { useState } from "react";

import { Link } from "react-router-dom";
import ResponsiveImage from "../../common/ResponsiveImage";
import Heading from "../../common/Heading";

import { Card, Media, Info, Description } from "./index.styled";

export default function ProductCard(props) {
  return props.data.map((item, index) => {
    const id = item.id;
    const { title, slug, info } = item.attributes;

    const Element = ({ children }) => {
      return props.link ? <Link to={slug}>{children}</Link> : <div>{children}</div>;
    };

    return (
      <Card key={id} delay={index * 100}>
        <Element>
          <Media>
            {item.attributes.cover.data.map((item) => {
              const imgID = item.id;
              return <ResponsiveImage key={imgID} data={item.attributes} />;
            })}
          </Media>
          <Info>
            <div>
              <Heading element="h4">{title}</Heading>
              <Description>{info}</Description>
            </div>
          </Info>
        </Element>
      </Card>
    );
  });
}
