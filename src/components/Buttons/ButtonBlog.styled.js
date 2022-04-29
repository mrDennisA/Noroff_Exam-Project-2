import { Link as L } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export const Button = styled(L)`
  color: var(--pink);
  font-size: 20px;
  font-weight: 400;
  text-decoration: transparent;
  transition: var(--timer) ease;
  padding: 0.5rem 1rem;

  :hover {
    text-decoration: underline;
    text-underline-offset: 2px;
  }
`;
