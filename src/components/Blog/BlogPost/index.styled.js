import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  flex-direction: column;

  margin: 2rem 1rem;
  gap: 1rem;

  h3 {
    margin-top: 1rem;
  }

  & > div {
    /* margin-top: 2rem; */
  }

  & > div {
    display: flex;
    flex-direction: column;

    gap: 1rem;
    width: 100%;

    margin: 1rem 0 2rem;

    @media only screen and (min-width: 576px) {
      flex-direction: row;
    }
  }

  p,
  strong {
    /* margin-top: 1rem; */
  }

  span {
  }

  img {
    max-height: 600px;
  }
`;
