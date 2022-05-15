import styled from "styled-components";

export const Modal = styled.div`
  z-index: 1000;
  position: fixed;
  inset: 0 0 0 0;

  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: var(--white); */
  background-color: var(--warmGray1C50);
  transition: 0.8s ease;

  div {
    font-size: 14px;
    text-transform: uppercase;
    font-weight: 700;
    color: var(--lightBrown);
    transition: 0.8s ease;
  }
`;
