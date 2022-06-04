import styled from "styled-components";

export const Section = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  grid-template-areas:
    "grid01"
    "grid02"
    "grid03"
    "grid04";

  padding: 2rem 1rem;
  gap: 1rem;

  h1 {
    text-align: center;
    grid-area: grid02;
  }

  h4 {
    text-align: unset;
  }

  @media only screen and (min-width: 576px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto 1fr;
    grid-template-areas:
      "grid02 grid02"
      "grid01 grid03"
      "grid04 grid04";
    gap: 2rem;
  }

  @media only screen and (min-width: 992px) {
    grid-template-columns: 2fr 3fr;
    grid-template-areas:
      "grid01 grid02"
      "grid01 grid03"
      "grid01 grid04";
    gap: 4rem;

    h1 {
      text-align: unset;
    }
  }
`;

export const ImageContainer = styled.div`
  grid-area: grid01;

  button {
    display: flex;
    width: 100%;

    img {
      overflow: hidden;
      border-radius: var(--radius);
      box-shadow: 0 4px 8px var(--shadow);
      background-color: var(--white);
      min-height: 400px;
      max-height: 500px;
      object-fit: contain;

      @media only screen and (min-width: 992px) {
        max-height: 600px;
        height: 100vh;
      }
    }
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  grid-area: grid03;

  h4 {
    margin-top: 1rem;
  }

  ul li {
    list-style-type: disc;
  }
`;
