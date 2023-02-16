import { Dispatch, SetStateAction, useState } from "react";
import properties from "../../properties";
import { Task } from "../../types";
import { AddButton } from "../AddButton/AddButton";
import { LabelInput } from "../LabelInput/LabelInput";
import { Field } from "../../types";

import s from "./AddTask.styles";
import { FieldFactory } from "../FieldFactory/FieldFactory";

interface Props {
  onAdd: (task: Task) => void;
  labels: string[];
  setLabels: Dispatch<SetStateAction<string[]>>;
}

export const AddTask: React.FC<Props> = ({ onAdd, labels, setLabels }) => {
  const [description, setDescription] = useState<string | null>("");
  const [priority, setPriority] = useState<string | null>("");

  const handleSubmit = (e: any): void => {
    e.preventDefault();
    let priorityPayload;
    switch (priority) {
      case "None":
        priorityPayload = 0;
        break;
      case "Low":
        priorityPayload = 1;
        break;
      case "Medium":
        priorityPayload = 2;
        break;
      case "High":
        priorityPayload = 3;
        break;
    }
    const payload: string = JSON.stringify({
      description,
      priority: priorityPayload,
      inProgress: false,
      completed: false,
      labelNames: labels,
    });

    fetch(`${properties.ENDPOINT}/tasks`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: payload,
    })
      .then((response) => {
        if (response.status >= 400) {
          throw new Error("Client error: " + response.status);
        } else if (response.status >= 500) {
          throw new Error("Server error: " + response.status);
        }
        return response.json();
      })
      .then((task) => {
        console.log("POST success");
        onAdd(task);
        setDescription("");
      })

      .catch((error) => {
        console.error(error);
      });
  };

  const fields: Field[] = [
    {
      type: "input",
      placeholder: "Enter task",
      testId: "task-name-input",
      value: description,
      onChange: (e) => setDescription(e.target.value),
    },
    {
      type: "select",
      value: priority,
      onChange: (e) => setPriority(e.target.value),
      options: [
        { value: "None", label: "None" },
        { value: "Low", label: "! Low" },
        { value: "Medium", label: "!! Medium" },
        { value: "High", label: "!!! High" },
      ],
    },
  ];

  return (
    <>
      <s.FormContainer onSubmit={(e) => handleSubmit(e)}>
        {fields.map((field) => (
          <FieldFactory key={field.type} {...field} />
        ))}
        <AddButton
          text={"Add"}
          ariaLabel={"Add task"}
          disabled={description && description.trim().length > 0 ? true : false}
        />
      </s.FormContainer>
      <LabelInput labels={labels} setLabels={setLabels} />
    </>
  );
};
