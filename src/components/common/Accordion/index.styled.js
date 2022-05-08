import styled from "styled-components";

export const Section = styled.section`
  display: grid;
  background-color: var(--white);
  overflow: hidden;
  border-radius: var(--radius);
  box-shadow: 0 4px 8px var(--shadow);
  padding: 0 0.5rem;

  & > :last-child p {
    border-bottom: unset;
  }
`;
