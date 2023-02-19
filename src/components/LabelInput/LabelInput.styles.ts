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
  Button,
};

export default styles;
