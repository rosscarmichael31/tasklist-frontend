import styled from "styled-components";
interface CheckBoxTickProps {
  checked: boolean;
}

const CheckboxContainer = styled.div`
  /* display: inline-block; */
  display: flex;
  position: relative;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 2px solid #333;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
`;

const CheckboxInput = styled.input`
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
`;

const CheckboxTick = styled.div<CheckBoxTickProps>`
  content: "";
  position: absolute;
  display: ${(props) => (props.checked ? "block" : "none")};
  border-radius: 50%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  background-color: green;
`;

const Label = styled.label`
  font-size: 1em;
`;

const styles = { CheckboxContainer, CheckboxInput, CheckboxTick, Label };

export default styles;
