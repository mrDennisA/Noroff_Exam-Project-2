import styled from "styled-components";

export const Card = styled.article`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;
  background-color: var(--white);
  overflow: hidden;
  border-radius: var(--radius);
  box-shadow: 0 4px 8px var(--shadow);

  @media only screen and (min-width: 576px) {
    grid-template-columns: 1fr 2fr;
    grid-template-rows: 1fr;
  }

  @media only screen and (min-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr;
  }

  img {
    max-height: 300px;
    aspect-ratio: 1/1;
  }
`;

export const Info = styled.div`
  display: grid;
  grid-template-rows: 1fr auto auto;
  gap: 1rem;
  padding: 1rem;

  @media only screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  @media only screen and (min-width: 768px) {
    display: grid;
    grid-template-rows: 1fr auto auto;
  }
`;
