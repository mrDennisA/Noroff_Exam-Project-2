import styled from "styled-components";

export const Container = styled.div`
  grid-area: grid04;
`;

export const Tabs = styled.div`
  display: flex;

  box-shadow: 0 -1px 0 var(--pink) inset;
`;

export const Tab = styled.button`
  font-size: 14px;
  font-weight: 500;
  text-transform: uppercase;
  line-height: 40px;
  color: var(--darkBrown);
  background-color: transparent;
  padding: 0 1rem;
  border-radius: var(--radius) var(--radius) 0 0;
  cursor: pointer;

  :hover {
    color: var(--pink);
  }

  ${({ active }) =>
    active &&
    `
    color: var(--white);
    background-color: var(--pink);

    :hover {
      color: var(--white);
  }
  `}
`;

export const Info = styled.p`
  padding: 1rem 0;
`;
