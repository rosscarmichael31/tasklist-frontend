import React, { Dispatch, SetStateAction, useState } from "react";
import s from "./LabelInput.styles";
import { LabelBox } from "../LabelBox/LabelBox";

interface Props {
  labelsString: string[];
  setLabelsString: Dispatch<SetStateAction<string[]>>;
}

export const LabelInput: React.FC<Props> = ({
  labelsString,
  setLabelsString,
}) => {
  const [label, setLabel] = useState("");

  const handleLabelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setLabel(e.target.value);
  };

  // pass in setLabels, labels
  const handleLabelKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if ((e.key === "Enter" || e.key === " ") && label.trim() !== "") {
      setLabelsString([...labelsString, label.trim()]);
      setLabel("");
    }
  };

  // pass in setLabels, labels
  const handleLabelDelete = (index: number) => {
    setLabelsString(labelsString.filter((_, i) => i !== index));
  };

  // pass in labels
  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLabelsString(labelsString);
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
        {labelsString.map((label, index) => (
          <LabelBox
            key={index}
            index={index}
            label={label}
            onClick={handleLabelDelete}
          />
        ))}
      </s.LabelContainer>
    </form>
  );
};
