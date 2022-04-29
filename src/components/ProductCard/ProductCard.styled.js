import styled from "styled-components";

export const Card = styled.div`
  display: flex;

  & > div,
  a {
    display: grid;

    grid-template-rows: auto 1fr;
    background-color: var(--white);
    overflow: hidden;
    border-radius: var(--radius);
    box-shadow: 0 4px 8px var(--shadow);
  }

  h4 {
    font-family: var(--fontCard);
    font-weight: 700;
    text-transform: uppercase;
    font-size: 20px;
    letter-spacing: 1px;
    color: var(--darkBrown);

    transition: color var(--timer) ease;
  }

  a {
    transition: var(--timer) ease;
  }

  a:hover {
    transform: translateY(-8px);
    box-shadow: 0 16px 16px var(--shadow);
  }

  a:hover h4 {
    color: var(--pink);
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & > div {
    display: grid;
    grid-template-rows: 1fr auto;
    gap: 0.5rem;
    padding: 2rem;
    height: 100%;
  }
`;

export const Description = styled.div`
  font-family: var(--fontCard);
  font-weight: 700;
  font-size: 16px;
  text-transform: uppercase;
`;
