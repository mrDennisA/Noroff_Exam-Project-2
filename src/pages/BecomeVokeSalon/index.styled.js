import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  margin: 2rem 1rem;

  & > :nth-child(1) {
    text-align: center;
    /* max-width: 600px;
    width: 100%; */
  }

  p {
    font-weight: 400;
  }
`;
