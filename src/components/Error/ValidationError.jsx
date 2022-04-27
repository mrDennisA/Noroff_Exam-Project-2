import styled from "styled-components";
const Message = styled.div`
  margin-top: 4px;
  color: red;
  font-size: 14px;
  font-weight: 300;
`;

export default function ValidationError({ children }) {
  return <Message>{children}</Message>;
}
