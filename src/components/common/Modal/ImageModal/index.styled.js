import styled from "styled-components";

export const Modal = styled.div`
  z-index: 100;
  position: fixed;
  inset: 0 0 0 0;
  background-color: var(--modal);

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border-radius: var(--radius);
  box-shadow: 0 4px 8px var(--shadow);
  background-color: var(--white);

  img {
    max-width: calc(100vw - 2rem);
    max-height: calc(100vh - 2rem);

    @media only screen and (min-width: 576px) {
      max-width: calc(100vw - 4rem);
      max-height: calc(100vh - 4rem);
    }

    @media only screen and (min-width: 768px) {
      max-width: calc(100vw - 8rem);
      max-height: calc(100vh - 8rem);
    }
  }

  /* Button */
  & > :last-child {
    position: relative;
    display: flex;
    justify-content: center;

    button {
      display: flex;
      width: unset;
    }
  }
`;
