import s from "./DropdownSelect.styles";

interface Props {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options?: Array<{ value: string; label: string }>;
}

export const DropdownSelect: React.FC<Props> = ({
  value,
  onChange,
  options,
}) => {
  return (
    <s.DropdownSelect value={value!} onChange={(e) => onChange(e)}>
      {options!.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </s.DropdownSelect>
  );
};
