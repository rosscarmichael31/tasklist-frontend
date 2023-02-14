import s from "./Priority.styles";

interface Props {
  priority: number;
}
export const Priority: React.FC<Props> = ({ priority }) => {
  return <s.Priority>{"!".repeat(priority)}</s.Priority>;
};
