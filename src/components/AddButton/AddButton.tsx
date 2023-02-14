import s from "./AddButton.styles";

interface Props {
  text: string;
  ariaLabel: string;
  disabled?: boolean;
}

export const AddButton: React.FC<Props> = ({ text, disabled, ariaLabel }) => {
  if (disabled) {
    return (
      <s.AddButton type="submit" aria-label={ariaLabel}>
        {text}
      </s.AddButton>
    );
  } else {
    return (
      <s.AddButton disabled type="submit" aria-label={ariaLabel}>
        {text}
      </s.AddButton>
    );
  }
};
