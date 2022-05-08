import styled from "styled-components";

export const Modal = styled.div`
  z-index: 100;
  position: fixed;
  inset: 0 0 0 0;
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};

  background-color: var(--modal);

  @media screen and (min-width: 768px) {
    display: none;
  }
`;
