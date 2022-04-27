import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  margin: 2rem 0;

  & > div {
    max-width: 400px;
    width: 100%;
  }

  & > :nth-child(1) {
    text-align: center;
  }
`;
