import Button from "@material-ui/core/Button";
import styled from "styled-components";

const ButtonStyled = styled(Button)`
  align-self: center;
`;

export const ButtonNormal = styled.button`
  background-color: #5f3dc4;
  color: white;
  padding: 5px 20px;
  font-size: 1.2rem;
  border: 2px solid #5f3dc4;
  cursor: pointer;
  border-radius: 5px;
  &:hover {
    background-color: transparent;
    color: black;
  }
`;

export default ButtonStyled;
