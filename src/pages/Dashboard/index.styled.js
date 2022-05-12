import styled from "styled-components";
import { Link as L } from "react-router-dom";

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  margin: 2rem 1rem;

  & > :nth-child(1) {
    text-align: center;
    /* max-width: 400px;
    width: 100%; */
  }
`;

export const ListContainer = styled.div`
  display: grid;
  background-color: var(--white);
  padding: 1rem;

  width: 100%;
  max-width: 600px;
  overflow: hidden;
  border-radius: var(--radius);
  box-shadow: 0 4px 8px var(--shadow);
`;

export const Card = styled.div`
  padding: 0.5rem 0;

  border-bottom: 1px solid var(--lightBrown);

  :first-child {
    padding: 0 0 0.5rem;
  }

  :last-child {
    padding: 0.5rem 0 0;
    border-bottom: unset;
  }

  img {
    margin: 4px;
    height: 40px;
    width: 40px;
    border-radius: 50%;
  }
`;

export const Link = styled(L)`
  display: flex;
  align-items: center;
  gap: 1rem;

  :hover span {
    color: var(--pink);
  }
`;
