import styled from "styled-components";
import { Link as L } from "react-router-dom";

export const NavLogo = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  @media only screen and (min-width: 768px) {
    width: unset;
  }
`;

export const Button = styled.button`
  display: flex;
  justify-content: flex-end;

  @media only screen and (min-width: 768px) {
    display: none;
  }
`;

export const Nav = styled.nav``;

export const NavLink = styled.div`
  display: none;

  @media only screen and (min-width: 768px) {
    display: flex;
  }
`;

export const SideLink = styled.div`
  z-index: 1000;
  position: fixed;
  top: 0;
  right: 0;

  display: flex;
  gap: 1rem;
  flex-direction: column;

  max-width: 250px;
  width: 100%;
  height: 100%;
  padding: 0.5rem 1rem;
  border-top: 2rem solid var(--warmGray1C50);
  background: var(--white);

  transform: translateX(${({ isOpen }) => (isOpen ? "0" : "100%")});
  transition: transform var(--timer) ease;

  @media only screen and (min-width: 768px) {
    display: none;
  }
`;

export const Link = styled(L)`
  display: flex;
  align-items: center;
  height: 32px;
  padding: 0.5rem 0;

  color: var(--darkBrown);
  text-decoration: underline;
  text-underline-offset: 4px;
  text-decoration-thickness: 2px;
  text-decoration-color: transparent;

  transition: var(--timer) ease;

  @media only screen and (min-width: 768px) {
    padding: 0.5rem 1rem;
  }

  :hover:not(.active) {
    text-decoration-color: var(--pink);
  }

  &.active {
    color: var(--pink);
  }
`;
