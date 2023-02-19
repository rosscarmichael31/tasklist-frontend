import s from "./LabelBox.styles";

interface Props {
  index: number;
  label: string;
  onClick?(index: number): void;
}

export const LabelBox: React.FC<Props> = ({ index, label, onClick }) => {
  return (
    <s.LabelBox>
      <s.LabelText>{label}</s.LabelText>
      {onClick && <s.DeleteIcon onClick={() => onClick(index)}>x</s.DeleteIcon>}
    </s.LabelBox>
  );
};
