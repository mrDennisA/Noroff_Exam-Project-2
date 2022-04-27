import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding: 2rem 1rem 4rem;

  @media only screen and (min-width: 576px) {
    padding: 2rem 0;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-rows: repeat(3, 1fr);

  gap: 3rem 2rem;

  @media only screen and (min-width: 768px) {
    grid-template-rows: unset;
    grid-template-columns: repeat(3, 1fr);
  }
`;
