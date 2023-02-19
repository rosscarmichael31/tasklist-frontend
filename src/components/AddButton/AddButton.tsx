import { Button } from "@mui/material";
import AddTaskIcon from "@mui/icons-material/AddTask";

interface Props {
  text: string;
  ariaLabel: string;
  disabled?: boolean;
}

export const AddButton: React.FC<Props> = ({ text, disabled, ariaLabel }) => {
  if (disabled) {
    return (
      <Button
        type="submit"
        aria-label={ariaLabel}
        variant="contained"
        endIcon={<AddTaskIcon />}
      >
        {text}
      </Button>
    );
  } else {
    return (
      <Button
        disabled
        type="submit"
        aria-label={ariaLabel}
        variant="contained"
        endIcon={<AddTaskIcon />}
      >
        {text}
      </Button>
    );
  }
};
