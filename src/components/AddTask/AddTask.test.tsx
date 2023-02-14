import { render } from "react-dom";
import { AddTask } from "./AddTask";
import { fireEvent, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { createRoot } from "react-dom/client";

const mockOnAdd = jest.fn();

test("it handles a submit", () => {
  act(() => {
    createRoot(document.createElement("div")).render(
      <AddTask onAdd={mockOnAdd} />
    );
  });
  const inputField = screen.getByPlaceholderText("Enter task");

  fireEvent.change(inputField, { target: { value: "task" } });

  const addButton = screen.getByRole("button", { name: "Add task" });

  act(() => {
    fireEvent.click(addButton);
  });

  expect(mockOnAdd).toHaveBeenCalledTimes(1);
});
