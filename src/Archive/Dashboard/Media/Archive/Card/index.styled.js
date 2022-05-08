import styled from "styled-components";

export const CardContainer = styled.div`
  position: relative;
  display: grid;
  /* flex-direction: column; */
  grid-template-columns: 1fr 2fr;

  background-color: var(--white);

  overflow: hidden;
  border-radius: var(--radius);
  box-shadow: 0 4px 8px var(--shadow);
  max-height: 80px;
  overflow-wrap: anywhere;

  @media only screen and (min-width: 576px) {
    grid-template-columns: unset;
    max-height: 200px;
  }
`;

export const Checkbox = styled.input.attrs({ type: "checkbox" })`
  position: absolute;
  top: 0;
  left: 0;
  transform: translate(0.5rem, 0.5rem);
  width: 18px;
  height: 18px;
`;

export const ImgContainer = styled.div`
  display: flex;
  justify-content: center;

  overflow: hidden;
  border-bottom: 1px var(--warmGray1C50) solid;

  background: repeating-conic-gradient(rgba(0, 0, 0, 0.05) 0% 25%, transparent 0% 50%) 50% / 20px 20px;

  img {
    width: auto;

    /* object-fit: contain; */
  }
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 0.5rem;
`;

export const Name = styled.div`
  font-size: 14px;
`;

export const Size = styled.div`
  font-weight: 300;
`;
