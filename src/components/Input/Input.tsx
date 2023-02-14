import s from "./Input.styles";

interface Props {
  placeholder: string | undefined;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input: React.FC<Props> = ({ placeholder, value, onChange }) => {
  return (
    <s.Input
      type="text"
      placeholder={placeholder}
      value={value!}
      onChange={(e) => onChange(e)}
    />
  );
};
