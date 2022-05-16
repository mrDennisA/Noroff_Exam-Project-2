import styled from "styled-components";

export const Modal = styled.div`
  z-index: 1000;
  position: fixed;
  inset: 0 0 0 0;

  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  background-color: var(--warmGray1C50);
  transition: 0.4s ease;

  div {
    font-size: 14px;
    text-transform: uppercase;
    font-weight: 700;
    color: var(--lightBrown);
    transition: 0.4s ease;
    opacity: 0;

    &.active {
      opacity: 1;
    }
  }

  &.active {
    opacity: 1;
  }
`;
