import styled from "styled-components";

const Input = styled.input`
  font-size: 16px;
  padding: 8px;
  border: none;
  border-radius: 4px;
  margin-bottom: 16px;
`;

const LabelContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 8px;
  margin-bottom: 16px;
`;

// Label tags
const LabelBox = styled.div`
  display: flex;
  align-items: center;
  color: white;
  //background-color: #f0f0f0;
  background-color: green;
  border-radius: 10px;
  padding: 8px;
`;

const LabelText = styled.span`
  font-size: 14px;
  margin-right: 8px;
`;

// TODO: reuse other button?
const DeleteIcon = styled.span`
  font-size: 14px;
  cursor: pointer;
`;

// TODO: reuse other button?
const Button = styled.button`
  font-size: 16px;
  padding: 8px;
  border: none;
  border-radius: 4px;
  background-color: #2c3e50;
  color: #fff;
  cursor: pointer;
`;

const styles = {
  Input,
  LabelContainer,
  LabelBox,
  LabelText,
  DeleteIcon,
  Button,
};

export default styles;
