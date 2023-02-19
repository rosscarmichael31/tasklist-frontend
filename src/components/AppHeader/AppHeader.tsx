import { Typography, AppBar, CssBaseline, Toolbar } from "@mui/material";
import TaskIcon from "@mui/icons-material/Task";

export const AppHeader: React.FC = () => {
  return (
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <TaskIcon />
          <Typography variant="h6" paddingLeft={"1%"}>
            Tasks
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
};
