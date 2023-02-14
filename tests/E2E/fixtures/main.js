import tasklist from "../objects/tasklist";

fixture("Tasklist").page("http://localhost:3000");

test("Can add a task", async (t) => {
  await t
    .typeText(tasklist.input, "Test task1")
    .click(tasklist.addButton)
    .expect(tasklist.taskItem.exists)
    .ok();
});

test("Can delete a task", async (t) => {
  await t
    .typeText(tasklist.input, "Test task2")
    .click(tasklist.addButton)
    .expect(tasklist.taskItem.exists)
    .ok()
    .click(tasklist.deleteButton.nth(0))
    .expect(tasklist.taskItem.withText("Test task2").exists)
    .notOk();
});
