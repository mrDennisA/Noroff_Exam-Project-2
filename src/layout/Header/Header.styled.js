import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: var(--warmGray1C50);
  padding: 0.5rem 1rem;

  @media only screen and (min-width: 768px) {
    gap: 1rem;
    padding: 0.5rem 1rem 1rem;
  }
`;
