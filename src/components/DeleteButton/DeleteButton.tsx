import s from "./DeleteButton.styles";

interface Props {
  text: string;
  ariaLabel: string;
  id: number;
  onDelete(id: number): void;
}

export const DeleteButton: React.FC<Props> = ({
  text,
  ariaLabel,
  id,
  onDelete,
}) => {
  return (
    <s.DeleteButton aria-label={ariaLabel} onClick={() => onDelete(id)}>
      {text}
    </s.DeleteButton>
  );
};
