import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  flex-direction: column;
`;

export const Article = styled.article`
  display: flex;
  flex-direction: column;
  margin-bottom: 4rem;
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
    position: relative;
    display: flex;
    overflow: hidden;
    background-color: gray;

    & > div,
    & > div > div {
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

    &.carousel {
      min-height: 400px;

      @media only screen and (min-width: 768px) {
        min-height: 500px;
      }
    }

    img {
      max-height: 400px;

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
