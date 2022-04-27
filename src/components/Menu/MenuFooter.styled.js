import styled from "styled-components";
import { Link as L } from "react-router-dom";

export const Link = styled(L)`
  color: var(--lightBrown);
  :hover {
    text-decoration: underline;
  }
`;

export const Menu = styled.div`
  display: flex;
  a {
    padding: 1rem;
    color: var(--warmGray1C25);
  }
`;

export const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: var(--warmGray1C25);

  @media only screen and (min-width: 576px) {
    max-width: 400px;
  }
`;

export const SubMenu = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 0.5rem;

  padding: 1rem 0;

  @media only screen and (min-width: 576px) {
    flex-direction: row;

    div:nth-child(1) {
      text-align: end;
    }

    div:nth-child(3) {
      text-align: start;
    }
  }

  & > div {
    display: grid;
  }

  a {
    padding: 4px 0.5rem;
  }
`;

export const SubLine = styled.div`
  width: 100%;
  height: 1px;
  background-color: var(--lightBrown);

  @media only screen and (min-width: 576px) {
    width: 1px;
    height: unset;
  }
`;

export const Rights = styled.div`
  color: var(--brown);
  padding-bottom: 1rem;

  a {
    color: var(--lightBrown);
  }
`;
