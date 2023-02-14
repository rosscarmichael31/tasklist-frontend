import { Selector } from "testcafe";
const taskItem = Selector('[data-testid="task-item"]').withText("Test task");

export default {
  input: Selector('input[placeholder="Enter task"]'),
  addButton: Selector('button[aria-label="Add task"]'),
  taskItem,
  deleteButton: taskItem.find('[aria-label="Delete task"]'),
};
