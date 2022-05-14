import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const Modal = styled.div`
  position: absolute;
  inset: 0 0 0 0;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: var(--warmGray1C50);
`;
