import { IconButton, Tooltip } from "@mui/material";
import ClearRoundedIcon from "@mui/icons-material/ClearRounded";

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
    <Tooltip title="Delete task" placement="top" arrow>
      {/* <s.DeleteButton aria-label={ariaLabel} onClick={() => onDelete(id)}>
        {text}
      </s.DeleteButton> */}
      <IconButton onClick={() => onDelete(id)} aria-label={ariaLabel}>
        <ClearRoundedIcon color="error" />
      </IconButton>
    </Tooltip>
  );
};
