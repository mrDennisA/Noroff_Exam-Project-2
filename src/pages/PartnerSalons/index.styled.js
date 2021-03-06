import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  margin: 0 1rem;
  padding: 2rem 0 0;

  h1 {
    text-align: center;
  }

  @media only screen and (min-width: 576px) {
    margin: unset;
  }
`;

export const TableGrid = styled.section`
  display: grid;
  gap: 2rem;
  margin: 2rem 0;
`;

export const TableContent = styled.div`
  display: grid;
  gap: 2rem;
  background-color: var(--white);
  overflow: hidden;
  border-radius: var(--radius);
  box-shadow: 0 4px 8px var(--shadow);
  padding: 8px;
`;
