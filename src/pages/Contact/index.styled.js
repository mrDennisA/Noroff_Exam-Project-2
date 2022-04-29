import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  margin: 2rem 1rem;

  & > :nth-child(1) {
    text-align: center;
    max-width: 400px;
    width: 100%;
  }

  p {
    font-weight: 400;
  }
`;

export const Line = styled.div`
  max-width: 400px;
  width: 100%;
  height: 1px;
  background-color: var(--lightBrown);
`;

export const ContactInfo = styled.div`
  display: grid;
  gap: 0.5rem;
  text-align: center;

  & span:first-child {
    display: block;

    font-weight: 300;
    text-transform: uppercase;
  }

  & span:last-child {
    font-size: 18px;
  }
`;
