import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;

  padding: 1rem 1rem 0.5rem;
  font-size: 12px;

  @media only screen and (min-width: 576px) {
    padding: 1rem 0 0.5rem;
  }

  .endCrumb {
    color: var(--lightBrown);
  }
`;
