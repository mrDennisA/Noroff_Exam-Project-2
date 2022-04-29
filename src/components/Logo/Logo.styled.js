import styled from "styled-components";
import { Link as L } from "react-router-dom";

export const Link = styled(L)`
  display: flex;
`;

export const Img = styled.img`
  width: 40px;
  @media only screen and (min-width: 768px) {
    width: 80px;
  }
`;
