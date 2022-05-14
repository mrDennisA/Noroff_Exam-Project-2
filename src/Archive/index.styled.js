import styled from "styled-components";

export const Section = styled.section`
  display: grid;
  gap: 2rem;
  padding: 2rem 0;

  h1,
  h2,
  h3 {
    text-align: center;
  }
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(265px, 1fr));
  gap: 1rem;
  padding: 0 1rem;

  @media only screen and (min-width: 576px) {
    padding: unset;
  }
`;
