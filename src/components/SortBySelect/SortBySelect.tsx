import { useState } from "react";
import properties from "../../properties";
import { Task } from "../../types";
import s from "./SortBySelect.styles";

interface Props {
  options: string[];
  data: Task[];
  onSort(options: string): void;
}

export const SortBySelect: React.FC<Props> = ({ options, onSort }) => {
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value === properties.DROPDOWN_DEFAULT) {
      setSelectedOption(options[0]);
    } else {
      setSelectedOption(e.target.value);
    }
    onSort(e.target.value);
  };
  return (
    <s.SortBySelect value={selectedOption} onChange={(e) => handleChange(e)}>
      <option disabled>{properties.DROPDOWN_DEFAULT}</option>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </s.SortBySelect>
  );
};
