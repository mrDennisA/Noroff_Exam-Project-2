import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  flex-direction: column;

  margin: 2rem 1rem;
  gap: 1rem;

  h3 {
    margin-top: 2rem;
  }

  & > div {
    display: flex;
    flex-direction: column;

    gap: 1rem;
    width: 100%;

    @media only screen and (min-width: 576px) {
      flex-direction: row;
    }

    button {
      width: 100%;
      cursor: zoom-in;

      img {
        display: flex;
        max-height: 600px;
      }
    }
  }
`;

export const MediaContainer = styled.div`
  img {
    overflow: hidden;
    border-radius: var(--radius);
  }
`;
