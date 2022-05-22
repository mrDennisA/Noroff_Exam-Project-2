import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  flex-direction: column;
`;

export const Article = styled.article`
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  gap: 2rem;
  text-align: center;
  margin-bottom: 4rem;
  padding: 2rem 1rem;
  background-color: var(--white);
  overflow: hidden;
  border-radius: var(--radius);
  box-shadow: 0 4px 8px var(--shadow);

  @media only screen and (min-width: 576px) {
    text-align: unset;
    padding: 2rem;
  }

  @media only screen and (min-width: 992px) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: unset;
    text-align: center;
  }
`;

export const Ingredient = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  /* text-align: center; */

  @media only screen and (min-width: 576px) {
    flex-direction: row;
    display: flex;
  }

  @media only screen and (min-width: 992px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  display: flex;

  img {
    max-width: 150px;
    max-height: 150px;
  }

  ::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    border-radius: 50%;
    box-shadow: 0 4px 8px var(--shadowMiddle) inset;
  }
`;

export const Info = styled.div`
  display: grid;
  gap: 1rem;
  @media only screen and (min-width: 576px) {
    flex: 1;
  }

  @media only screen and (min-width: 992px) {
    flex: unset;
  }
`;
