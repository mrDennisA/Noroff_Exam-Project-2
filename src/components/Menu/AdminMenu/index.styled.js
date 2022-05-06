import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  justify-content: flex-end;

  padding: 0 1rem;

  @media only screen and (min-width: 576px) {
    padding: unset;
  }

  button,
  a {
    line-height: 32px;
    padding: 0 0.5rem;
    cursor: pointer;
    text-decoration: underline;
    text-underline-offset: 2px;
    text-decoration-color: transparent;
    transition: text-decoration var(--timer) ease;

    span {
      vertical-align: middle;
      line-height: 20px;
      font-size: 14px;
      font-weight: 300;
      color: var(--white);
    }

    :hover {
      text-decoration-color: var(--white);
    }
  }
`;
