import styled from "styled-components";

export const ModalContainer = styled.div`
  position: fixed;
  inset: 0 0 0 0;
  background-color: var(--modal);
`;

export const Container = styled.section`
  position: fixed;
  inset: 0 0 0 0;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  overflow: hidden;
  border-radius: var(--radius);
  box-shadow: 0 4px 8px var(--shadow);
  background-color: var(--warmGray1C25);
`;

export const Header = styled.div`
  padding: 0.5rem;
  border-bottom: 1px solid var(--warmGray1C50);
`;

export const Body = styled.div`
  background-color: var(--white);
`;

export const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
  border-top: 1px solid var(--warmGray1C50);
  padding: 0.5rem;
`;

export const Button = styled.button`
  padding: 0 1rem;
  cursor: pointer;
  line-height: 32px;
  background-color: var(--lightBrown);
  border-radius: 1rem;
  background-color: var(--pink);
  transition: var(--timer) ease;

  :hover {
    background-color: var(--white);
    box-shadow: 0 0 0 1px var(--pink) inset;
    span {
      color: var(--pink);
    }
  }

  span {
    font-size: 14px;
    line-height: 20px;
    vertical-align: middle;
    color: var(--white);
  }
`;
