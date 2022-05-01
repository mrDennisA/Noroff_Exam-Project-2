import styled from "styled-components";

export const Section = styled.section`
  display: grid;
  margin: 2rem 1rem;

  h3 {
    margin-top: 2rem;
  }

  & > div {
    margin-top: 1rem;
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;

    @media only screen and (min-width: 576px) {
      flex-direction: row;
    }
  }

  p,
  strong {
    margin-top: 1rem;
  }

  span {
  }

  img {
    max-height: 600px;
  }
`;
