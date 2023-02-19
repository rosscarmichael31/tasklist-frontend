import React, { Dispatch, SetStateAction, useState } from "react";
import s from "./LabelInput.styles";
import { LabelBox } from "../LabelBox/LabelBox";
import { Tooltip } from "@mui/material";

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

  const handleLabelKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if ((e.key === "Enter" || e.key === " ") && label.trim() !== "") {
      setLabelsString([...labelsString, label.trim()]);
      setLabel("");
    }
  };

  const handleLabelDelete = (index: number) => {
    setLabelsString(labelsString.filter((_, i) => i !== index));
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLabelsString(labelsString);
  };

  return (
    <form onSubmit={handleFormSubmit}>
      {labelsString.length === 3 ? (
        <Tooltip title="Maximum of 3 labels" placement="right" arrow>
          <s.Input
            type="input"
            placeholder="Add labels"
            value={label}
            onChange={handleLabelChange}
            onKeyDown={handleLabelKeyDown}
            disabled
          />
        </Tooltip>
      ) : (
        <Tooltip
          title="Press enter or space to add label"
          placement="right"
          arrow
        >
          <s.Input
            type="input"
            placeholder="Add labels"
            maxLength={14}
            value={label}
            onChange={handleLabelChange}
            onKeyDown={handleLabelKeyDown}
          />
        </Tooltip>
      )}
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
