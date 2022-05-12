import { useEffect, useState, useRef } from "react";

import ResponsiveImage from "../ResponsiveImage";

import { Container } from "./index.styled";

export default function Carousel({ data }) {
  const [current, setCurrent] = useState(0);
  const length = data.length;
  const timeout = useRef(null);

  // console.log(data);

  useEffect(() => {
    const nextImage = () => {
      setCurrent((current) => (current === length - 1 ? 0 : current + 1));
    };

    timeout.current = setTimeout(nextImage, 4000);

    return function () {
      if (timeout.current) {
        clearTimeout(timeout.current);
      }
    };
  }, [current, length]);

  // if (!Array.isArray(data) || data.length <= 0) {
  //   return null;
  // }

  return (
    <>
      {data.map((imgList, index) => {
        // console.log(imgList);
        return (
          <Container key={index} className={index === current ? "active" : ""}>
            {imgList.image.data.map((img) => {
              return (
                <div key={img.id}>
                  <ResponsiveImage data={img.attributes} />
                </div>
              );
            })}
          </Container>
        );
      })}
    </>
  );
}
