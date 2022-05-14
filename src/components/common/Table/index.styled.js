import styled from "styled-components";

export const Table = styled.table`
  display: grid;
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
  display: grid;

  tr {
    border-bottom: 1px solid var(--warmGray1C50);
    padding: 12px 0;
    @media only screen and (min-width: 768px) {
      padding: unset;
    }
  }

  :last-child {
    tr {
      /* border-bottom: unset; */
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

  padding: 0 8px;

  :last-child {
    border-right: unset;
  }

  @media only screen and (min-width: 768px) {
    line-height: 48px;
    border-right: 1px solid var(--warmGray1C50);
  }
`;
