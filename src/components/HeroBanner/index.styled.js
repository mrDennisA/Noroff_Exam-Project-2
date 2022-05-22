import styled from "styled-components";

export const Section = styled.section`
  position: relative;
  padding-bottom: 4rem;
`;

export const Hero = styled.div`
  position: relative;
  width: 100%;
  height: calc(100vh - 88px);
  /* height: calc(${(props) => props.dimensions + "px"} - 88px); */
  /* max-height: 900px; */
  /* max-height: 1080px; */

  @media only screen and (min-width: 768px) {
    height: calc(100vh - 184px);
    /* height: calc(${(props) => props.dimensions + "px"} - 184px); */
  }
`;

export const MediaContainer = styled.div`
  position: absolute;
  overflow: hidden;
  width: 100%;
  height: 100%;

  img {
    position: absolute;
    object-position: center 33%;
  }

  iframe {
    position: absolute;
    top: 55%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100vw;
    /* height: 56.25vw; */

    aspect-ratio: 16/9;
    min-height: 100vh;
    min-width: 177.77vh;
  }
`;

export const HeadingContainer = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 33%;

  display: flex;
  justify-content: center;

  h1 {
    padding: 0 0.5rem;
  }
`;

export const ButtonContainer = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);

  display: flex;
  align-items: flex-end;

  height: calc(${(props) => props.dimensions + "px"} - 112px);
  /* max-height: 900px; */
  /* max-height: 1080px; */

  @media only screen and (min-width: 768px) {
    /* height: calc(100vh - 184px); */
    height: calc(${(props) => props.dimensions + "px"} - 208px);
  }
`;
