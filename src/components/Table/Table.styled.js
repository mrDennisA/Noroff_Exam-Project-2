import styled from "styled-components";

export const Table = styled.table`
  display: grid;
  background-color: var(--white);
  overflow: hidden;
  border-radius: var(--radius);
  box-shadow: 0 4px 8px var(--shadow);
  padding: 8px;
`;

export const Thead = styled.thead`
  th:not(:first-child) {
    display: none;

    @media only screen and (min-width: 768px) {
      display: initial;
    }
  }
`;

export const Tbody = styled.tbody`
  :last-child {
    td {
      border-bottom: unset;
    }
  }
`;

export const Tr = styled.tr`
  display: grid;

  @media only screen and (min-width: 768px) {
    grid-template-columns: 2fr 3fr;
  }

  span {
    vertical-align: middle;
    line-height: 20px;
  }
`;

export const Th = styled.th`
  font-size: 1rem;
  font-weight: 400;
  text-align: start;
  text-transform: uppercase;
  line-height: 32px;
  padding: 0 8px;
  border-bottom: 1px solid var(--pink);

  @media only screen and (min-width: 768px) {
    border-right: 1px solid var(--warmGray1C50);

    :last-child {
      border-right: unset;
    }
  }

  span {
    color: var(--darkBrown);
  }
`;

export const Td = styled.td`
  font-size: 1rem;
  font-weight: 300;
  line-height: 32px;
  padding: 0 8px;

  :last-child {
    border-right: unset;
    border-bottom: 1px solid var(--warmGray1C50);
  }

  @media only screen and (min-width: 768px) {
    border-right: 1px solid var(--warmGray1C50);
    border-bottom: 1px solid var(--warmGray1C50);
  }
`;
