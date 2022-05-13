import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  box-shadow: 0 -1px 0 var(--lightBrown) inset;
`;

export const Button = styled.button`
  padding: 0.5rem;
  cursor: pointer;
  text-decoration: underline;
  text-underline-offset: 2px;
  text-decoration-thickness: 1px;
  text-decoration-color: transparent;
  transition: var(--timer) ease;

  &.active {
    color: var(--pink);
  }

  :hover:not(.active) {
    text-decoration-color: var(--pink);
  }
`;
