import React, { Dispatch, SetStateAction, useState } from "react";
import s from "./LabelInput.styles";

interface Props {
  labels: string[];
  setLabels: Dispatch<SetStateAction<string[]>>;
}

export const LabelInput: React.FC<Props> = ({ labels, setLabels }) => {
  const [label, setLabel] = useState("");

  const handleLabelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setLabel(e.target.value);
  };

  // pass in setLabels, labels
  const handleLabelKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if ((e.key === "Enter" || e.key === " ") && label.trim() !== "") {
      setLabels([...labels, label.trim()]);
      setLabel("");
    }
  };

  // pass in setLabels, labels
  const handleLabelDelete = (index: number) => {
    setLabels(labels.filter((_, i) => i !== index));
  };

  // pass in labels
  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLabels(labels);
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <s.Input
        type="input"
        placeholder="Add labels"
        value={label}
        onChange={handleLabelChange}
        onKeyDown={handleLabelKeyDown}
      />
      <s.LabelContainer>
        {labels.map((label, index) => (
          <s.LabelBox key={index}>
            <s.LabelText>{label}</s.LabelText>
            {/* TODO: reuse DeleteButton component */}
            <s.DeleteIcon onClick={() => handleLabelDelete(index)}>
              x
            </s.DeleteIcon>
          </s.LabelBox>
        ))}
      </s.LabelContainer>
    </form>
  );
};

// export const TaskForm = () => {
//   const handleSubmit = (labels: string[]) => {
//     // Do something with the labels array, such as passing it back to the main app
//     console.log(labels);
//   };

//   return <LabelInput onSubmit={handleSubmit} />;
// };
