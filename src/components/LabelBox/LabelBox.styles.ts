import styled from "styled-components";

// Label tags
const LabelBox = styled.div`
  display: flex;
  align-items: center;
  color: white;
  background-color: green;
  border-radius: 10px;
  padding: 4px;
  /* border: 1px solid gray; */
  margin-bottom: 2px;
`;

const LabelText = styled.span`
  font-size: 14px;
  margin-right: 8px;
  text-align: center;
`;

// TODO: reuse other button?
const DeleteIcon = styled.span`
  font-size: 14px;
  cursor: pointer;
`;

const styles = { LabelBox, LabelText, DeleteIcon };

export default styles;
