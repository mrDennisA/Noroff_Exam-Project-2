import styled from "styled-components";
const Message = styled.span`
  margin-top: 4px;
  color: red;
  font-size: 16px;
  font-weight: 300;
`;

export default function ValidationMessage({ children }) {
  return <Message>{children}</Message>;
}
