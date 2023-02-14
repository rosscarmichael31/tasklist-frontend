import s from "./Checkbox.styles";

interface Props {
  label?: string;
  value: boolean;
  id: number;
  onChange(id: number): void;
}

export const Checkbox: React.FC<Props> = ({ label, value, id, onChange }) => {
  return (
    <s.Label>
      {label}
      <s.CheckboxContainer>
        <s.CheckboxInput
          type="checkbox"
          id="checkbox"
          onChange={() => onChange(id)}
        />
        <s.CheckboxTick checked={value} />
      </s.CheckboxContainer>
    </s.Label>
  );
};
