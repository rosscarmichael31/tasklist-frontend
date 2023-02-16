import styled from "styled-components";

const AddButton = styled.button`
  padding: 10px 20px;

  background-color: rgba(0, 0, 255, 0.6);

  color: white;
  border: none;
  border-radius: 15px;
  font-size: 16px;
  cursor: pointer;
  &:hover {
    background-color: rgba(0, 0, 255, 0.6);
  }
  &:focus {
    outline: none;
  }
  &:disabled,
  button[disabled] {
    background-color: gray;
    opacity: 0.6;
    color: white;
  }
`;

const styles = { AddButton };

export default styles;
