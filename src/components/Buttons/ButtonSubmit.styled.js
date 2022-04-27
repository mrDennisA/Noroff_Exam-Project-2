import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export const Button = styled.button`
  line-height: 48px;
  padding: 0 2rem;
  background-color: var(--pink);
  border-radius: 24px;
  transition: var(--timer) ease;
  min-width: 100px;

  span {
    display: inline-block;
    vertical-align: middle;
    line-height: 20px;
    font-size: 14px;
    font-weight: 400;
    text-transform: uppercase;
    color: var(--white);
    transition: var(--timer) ease;
  }

  :hover {
    background-color: var(--white);
    box-shadow: 0 0 0 1px var(--pink) inset;
  }

  :hover span {
    color: var(--pink);
  }
`;
