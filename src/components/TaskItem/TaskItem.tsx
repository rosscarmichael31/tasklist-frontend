import React from "react";
import { Priority } from "../Priority/Priority";
import { DeleteButton } from "../DeleteButton/DeleteButton";

import s from "./TaskItem.styles";
import { Checkbox } from "../Checkbox/Checkbox";
import properties from "../../properties";
import { LabelBox } from "../LabelBox/LabelBox";
import { APILabel } from "../../types";

export interface TaskProps {
  id: number;
  description: string;
  priority: number;
  inProgress: boolean;
  completed: boolean;
  labels?: APILabel[];

  handleProgressUpdate(id: number): void;
  handleCompletedUpdate(id: number): void;
  onDelete(id: number): void;
}

export const TaskItem: React.FC<TaskProps> = ({
  id,
  description,
  labels,
  inProgress,
  completed,
  priority,
  handleProgressUpdate,
  handleCompletedUpdate,
  onDelete,
}) => {
  const tags: string[] | undefined = labels?.map((label) => label.name);

  return (
    <s.TaskContainer data-testid="task-item" completed={completed}>
      <s.TaskName>{description}</s.TaskName>

      <s.LabelBoxContainer>
        {tags &&
          tags.map((tag, index) => (
            <LabelBox key={index} index={index} label={tag} />
          ))}
      </s.LabelBoxContainer>
      <Priority priority={priority}></Priority>

      <Checkbox
        label={properties.IN_PROGRESS_LABEL}
        ariaLabel={"In progress checkbox"}
        value={inProgress}
        id={id}
        onChange={handleProgressUpdate}
      ></Checkbox>

      <Checkbox
        label={properties.COMPLETED_LABEL}
        ariaLabel={"Completed checkbox"}
        value={completed}
        id={id}
        onChange={handleCompletedUpdate}
      ></Checkbox>

      <DeleteButton
        text={"X"}
        ariaLabel={"Delete task"}
        id={id}
        onDelete={onDelete}
      ></DeleteButton>
    </s.TaskContainer>
  );
};
