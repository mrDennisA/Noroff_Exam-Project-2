import styled from "styled-components";

export const Container = styled.main`
  position: relative;
  height: calc(100% - 88px);

  @media only screen and (min-width: 768px) {
    height: calc(100% - 184px);
  }
`;
