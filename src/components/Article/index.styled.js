import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  flex-direction: column;
`;

export const Article = styled.article`
  display: flex;
  flex-direction: column;
  margin: 2rem 0;
  background-color: var(--white);
  overflow: hidden;
  border-radius: var(--radius);
  box-shadow: 0 4px 8px var(--shadow);

  @media only screen and (min-width: 768px) {
    &.imageLeft {
      flex-direction: row-reverse;
      h1,
      h2,
      h3,
      h4 {
        text-align: start;
      }
    }

    &.imageRight {
      flex-direction: row;
      h1,
      h2,
      h3,
      h4 {
        text-align: end;
      }
    }
  }

  /* TEXT */
  & > div:nth-child(1) {
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    gap: 2rem;
    padding: 2rem 1rem;

    @media only screen and (min-width: 768px) {
      padding: 2rem;
    }

    div {
      display: grid;
      gap: 1rem;
    }
  }

  /* IMAGE */
  & > div:nth-child(2) {
    display: flex;

    div {
      display: flex;
      width: 100%;
    }

    &.p30 {
      flex-basis: 30%;
    }
    &.p40 {
      flex-basis: 40%;
    }
    &.p50 {
      flex-basis: 50%;
    }
    &.p60 {
      flex-basis: 60%;
    }
    &.p70 {
      flex-basis: 70%;
    }

    img {
      min-height: 250px;
      max-height: 500px;

      @media only screen and (min-width: 768px) {
        max-height: unset;
      }
    }
  }
`;

export const RichText = styled.div`
  img {
    float: right;
    width: 150px;
    height: 150px;
  }
`;

export const ImageContainer = styled.div`
  /* display: flex;
  justify-content: flex-end; */
`;
