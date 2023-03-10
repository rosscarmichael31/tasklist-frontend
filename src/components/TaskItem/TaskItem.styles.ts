import styled, { keyframes } from "styled-components";
type Props = {
  completed: boolean;
};

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const TaskContainer = styled.div<Props>`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 16px;
  padding: 1.5em;
  border: 1px solid gray;
  background-color: gray;
  border-radius: 50px;
  box-shadow: 3px -3px 2px rgb(0 0 0 / 0.2);
  animation: ${fadeIn} 0.5s ease-in-out;

  opacity: ${({ completed }) => (completed ? 0.7 : 1)};
`;

const TaskName = styled.div`
  font-size: 18px;
  font-weight: bold;
  width: 30%;

  @media (max-width: 650px) {
    width: 10%;
    flex-direction: column;
  }
`;

const LabelBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const styles = { TaskContainer, TaskName, LabelBoxContainer };

export default styles;
