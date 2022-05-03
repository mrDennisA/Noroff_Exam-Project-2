import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  justify-content: flex-end;

  & > div {
    display: inline-flex;
    gap: 1rem;
    line-height: 32px;
  }

  button,
  a {
    display: inline-block;
    vertical-align: middle;
    line-height: 20px;
    font-size: 1rem;
    font-weight: 300;
    color: var(--white);
    :hover {
      text-decoration: underline;
    }
  }
`;
