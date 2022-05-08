import styled from "styled-components";

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 48px;
  height: 48px;
  background-color: var(--pink);
  border-radius: 50%;

  overflow: hidden;

  transition: var(--timer) ease;
  cursor: pointer;

  :hover {
    background-color: var(--white);
    box-shadow: 0 0 0 1px var(--pink) inset;
    svg {
      fill: var(--pink);
    }
  }

  svg {
    width: 24px;
    height: 24px;
    fill: var(--white);
  }
`;
