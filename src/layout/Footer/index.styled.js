import styled from "styled-components";

export const Container = styled.footer`
  display: grid;
  justify-content: center;
  padding: 0 1rem;

  @media only screen and (min-width: 576px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
