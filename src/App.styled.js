import styled from "styled-components";

export const Modal = styled.div`
  z-index: 100;
  position: absolute;
  top: 0;
  left: 0;

  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};

  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);

  @media screen and (min-width: 768px) {
    display: none;
  }
`;
