import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  margin: 0 0.5rem;
  padding: 2rem 0;
  gap: 2rem;

  h1 {
    text-align: center;
  }

  @media only screen and (min-width: 576px) {
    margin: unset;
  }
`;
