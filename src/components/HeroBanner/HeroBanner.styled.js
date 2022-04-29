import styled from "styled-components";

export const Section = styled.section`
  position: relative;
`;

export const Hero = styled.div`
  position: relative;
  height: calc(100vh - 56px);
  max-height: 900px;

  transition: max-height var(--timer) ease;

  @media only screen and (min-width: 768px) {
    height: calc(100vh - 152px);
  }

  h1 {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    text-align: center;
    transform: translateY(-128px);
    padding: 0 0.5rem;
  }

  img {
    object-position: center 33%;
  }
`;

export const Container = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, -4rem);
`;
