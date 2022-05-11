import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  box-shadow: 0 0 0 1px var(--warmGray1C50) inset;
  padding: 1rem;
  border-radius: var(--radius);
`;

export const Media = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  box-shadow: 0 0 0 1px var(--warmGray1C50) inset, 0 4px 8px var(--shadow) inset;
  border-radius: var(--radius);
  overflow: hidden;
  background: repeating-conic-gradient(rgba(0, 0, 0, 0.05) 0% 25%, transparent 0% 50%) 50% / 20px 20px;

  img {
    object-fit: contain;
  }
`;
