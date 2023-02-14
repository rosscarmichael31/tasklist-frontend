import { Field } from "../../types";
import { DropdownSelect } from "../DropdownSelect/DropdownSelect";
import { Input } from "../Input/Input";

export const FieldFactory: React.FC<Field> = ({
  type,
  placeholder,
  testId,
  value,
  onChange,
  options,
}) => {
  switch (type) {
    case "input":
      return (
        <Input
          placeholder={placeholder}
          value={value!}
          onChange={onChange}
          data-testid={testId}
        />
      );
    case "select":
      return (
        <DropdownSelect
          value={value!}
          onChange={onChange}
          options={options}
          test-di={testId}
        />
      );
    default:
      return <p>Unknown field</p>;
  }
};
