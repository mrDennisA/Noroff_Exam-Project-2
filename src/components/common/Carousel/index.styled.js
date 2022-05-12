import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  inset: 0 0 0 0;
  opacity: 0;
  transition: 1s ease;

  &.active {
    opacity: 1;
  }

  img {
    min-height: 400px;

    @media only screen and (min-width: 768px) {
      min-height: 500px;
    }
  }
`;
