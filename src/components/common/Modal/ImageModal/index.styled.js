import styled from "styled-components";

export const Modal = styled.section`
  z-index: 100;
  position: fixed;
  inset: 0 0 0 0;
  background-color: var(--modal);

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border-radius: var(--radius);
  box-shadow: 0 4px 8px var(--shadow);
  background-color: var(--white);

  img {
    display: flex;
    max-width: calc(100vw - 2rem);
    max-height: calc(100vh - 2rem);
  }

  /* Button */
  & > :last-child {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    background-color: var(--white50);

    button {
      display: flex;
      width: unset;
    }
  }
`;
