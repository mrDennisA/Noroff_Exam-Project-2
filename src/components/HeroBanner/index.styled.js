import styled from "styled-components";

export const Section = styled.section`
  position: relative;
  padding-bottom: 4rem;
`;

export const Hero = styled.div`
  position: relative;
  height: calc(100vh - 88px);
  /* height: calc(${(props) => props.dimensions + "px"} - 88px); */
  max-height: 900px;
  transition: max-height var(--timer) ease;

  display: flex;

  @media only screen and (min-width: 768px) {
    height: calc(100vh - 184px);
    /* height: calc(${(props) => props.dimensions + "px"} - 184px); */
  }

  h1 {
    padding: 0 0.5rem;
  }

  img {
    object-position: center 33%;
  }
`;

export const HeadingContainer = styled.div`
  position: absolute;
  inset: 0 0 33% 0;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

export const ButtonContainer = styled.div`
  position: absolute;
  inset: 0 0 1rem 0;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;
