import styled from "styled-components";

export const Title = styled.div`
  display: flex;
  justify-content: space-between;
  cursor: pointer;

  padding: 12px 0;

  @media only screen and (min-width: 576px) {
    padding: 12px 0.5rem;
  }

  :hover > :nth-child(1) span {
    color: var(--pink);
  }

  h4 {
    text-align: left;
    line-height: 24px;

    span {
      color: inherit;
      line-height: 20px;
      vertical-align: bottom;
    }
    &.active span {
      color: var(--pink);
    }
  }

  div {
    display: flex;
    align-items: center;

    svg {
      transform: rotate(180deg);
      width: 12px;
      height: 12px;
      transition: var(--timer) ease;
      /* fill: var(--white); */
    }

    &.active svg {
      transform: rotate(360deg);
    }
  }
`;

export const Content = styled.p`
  overflow: hidden;
  transition: height var(--timer) ease;

  height: ${({ height }) => height + "px"};

  border-bottom: 1px solid var(--warmGray1C50);

  @media only screen and (min-width: 576px) {
    padding: 0 0.5rem;
  }
`;
