import tasklist from "../objects/tasklist";
import { fixture, Selector } from "testcafe";

const url = "http://localhost:3000";

const cleanUp = async (t) => {
  const deleteButton = Selector('[aria-label="Delete task"]');
  const count = await deleteButton.count;

  for (let i = count - 1; i > -1; i--) {
    await t.click(deleteButton.nth(i));
  }
};

fixture("Tasklist").page(url).beforeEach(cleanUp).afterEach(cleanUp);

test("Can add a task", async (t) => {
  await t
    .typeText(tasklist.input, "TEST_TASK")
    .click(tasklist.addButton)
    .expect(tasklist.taskItem.exists)
    .ok();
});

test("Can delete a task", async (t) => {
  await t
    .typeText(tasklist.input, "TEST_TASK")
    .click(tasklist.addButton)
    .expect(tasklist.taskItem.exists)
    .ok()
    .click(tasklist.deleteButton.nth(0))
    .expect(tasklist.taskItem.withText("TEST_TASK").exists)
    .notOk();
});

test("Can add and delete multiple tasks", async (t) => {
  let count = 5;
  for (let i = 0; i < count; i++) {
    await t
      .typeText(tasklist.input, "TEST_TASK")
      .click(tasklist.addButton)
      .expect(tasklist.taskItem.exists)
      .ok();
  }
  const taskItem = Selector('[data-testid="task-item"]');
  const deleteButton = taskItem.find('[aria-label="Delete task"]');

  for (let i = count - 1; i > -1; i--) {
    await t
      .click(deleteButton.nth(i))
      .expect(deleteButton.nth(i).exists)
      .notOk();
  }
});

test("Can select low priority", async (t) => {
  const taskItem = Selector('[data-testid="task-item"]');
  await t
    .typeText(tasklist.input, "TEST_TASK")
    .click(tasklist.dropdown)
    .click(tasklist.lowSelect)
    .click(tasklist.addButton)
    .expect(taskItem.withText("!").exists)
    .ok();
});

test("Can select medium priority", async (t) => {
  await t
    .typeText(tasklist.input, "TEST_TASK")
    .click(tasklist.dropdown)
    .click(tasklist.mediumSelect)
    .click(tasklist.addButton)
    .expect(tasklist.taskItem.withText("!!").exists)
    .ok();
});

test("Can select high priority", async (t) => {
  await t
    .typeText(tasklist.input, "TEST_TASK")
    .click(tasklist.dropdown)
    .click(tasklist.highSelect)
    .click(tasklist.addButton)
    .expect(tasklist.taskItem.withText("!!!").exists)
    .ok();
});

test("Can select in progress", async (t) => {
  await t
    .typeText(tasklist.input, "TEST_TASK")
    .click(tasklist.addButton)
    .click(tasklist.inProgress)
    .expect(tasklist.inProgress.checked)
    .eql(true)
    .expect(tasklist.taskItem.count)
    .eql(1);
});

test("Can select completed", async (t) => {
  await t
    .typeText(tasklist.input, "TEST_TASK")
    .click(tasklist.addButton)
    .click(tasklist.completed)
    .expect(tasklist.completed.checked)
    .eql(true)
    .expect(tasklist.taskItem.count)
    .eql(1);
});
