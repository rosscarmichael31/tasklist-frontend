import { Selector } from "testcafe";
const taskItem = Selector('[data-testid="task-item"]');

const selectors = {
  input: Selector('input[placeholder="Enter task"]'),
  addButton: Selector('button[aria-label="Add task"]'),
  taskItem,
  deleteButton: taskItem.find('[aria-label="Delete task"]'),
  dropdown: Selector('select[data-testid="dropdown"]'),
  lowSelect: Selector('option[value="Low"]'),
  mediumSelect: Selector('option[value="Medium"]'),
  highSelect: Selector('option[value="High"]'),
  inProgress: Selector('input[aria-label="In progress checkbox"]'),
  completed: Selector('input[aria-label="Completed checkbox"]'),
  labelInput: Selector('input[placeholder="Add labels"]'),
};

export default selectors;
