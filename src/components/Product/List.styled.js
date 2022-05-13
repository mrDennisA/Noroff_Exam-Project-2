import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  margin: 2rem 0 0;

  @media only screen and (min-width: 576px) {
    align-items: unset;
  }
`;

export const HeadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
`;

export const GridContainer = styled.div`
  display: grid;
  gap: 2rem;
  margin: 0 1rem 2rem;

  @media only screen and (min-width: 576px) {
    margin: 0 0 2rem;
  }

  & > h2,
  h3 {
    text-align: center;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(210px, 1fr));
  gap: 3rem 2rem;
`;
