import { useEffect, useState } from "react";
import s from "./App.styles";

import { useGet } from "./hooks/useGet";
import { Task } from "./types";
import { TaskItem } from "./components/TaskItem/TaskItem";
import { AddTask } from "./components/AddTask/AddTask";
import { SortBySelect } from "./components/SortBySelect/SortBySelect";

import properties from "./properties";

function App() {
  const [updatedTask, setUpdatedTask] = useState<Task | null>();
  const [sortKey, setSortKey] = useState<string | undefined>(undefined);

  const searchQuery = `tasks${sortKey ? `?sortBy=${sortKey}` : ""}`;

  let { loading, error, data, setData } = useGet<Task>(
    properties.ENDPOINT,
    searchQuery
  );

  const handleProgressUpdate = (id: number) => {
    const task = data?.filter((t) => t.id === id).pop();
    task!.inProgress = !task?.inProgress;
    setUpdatedTask(task);
  };

  const handleCompletedUpdate = (id: number) => {
    const task = data?.filter((t) => t.id === id).pop();
    task!.complete = !task?.complete;
    setUpdatedTask(task);
  };

  // Handle DELETE request
  const onDelete = (id: number) => {
    fetch(`${properties.ENDPOINT}/tasks/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (response.status >= 400) {
          throw new Error("Client error: " + response.status);
        } else if (response.status >= 500) {
          throw new Error("Server error: " + response.status);
        }
      })
      .then(() => {
        console.log("DELETE success");
        setData(data!.filter((t) => t.id !== id));
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleTaskAdd = (task: Task) => {
    setData((data: any) => {
      const updatedTasks = [task, ...data];
      return updatedTasks;
    });
  };

  // Handle PUT request
  useEffect(() => {
    updatedTask &&
      fetch(`${properties.ENDPOINT}/tasks/${updatedTask.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedTask),
      })
        .then((response) => {
          if (response.status >= 400) {
            throw new Error("Client error: " + response.status);
          } else if (response.status >= 500) {
            throw new Error("Server error: " + response.status);
          }
          return response.json();
        })
        .then(() => {
          console.log("PUT success");
          setUpdatedTask(null);
        })
        .catch((error) => {
          console.error(error);
        });
  }, [updatedTask]);

  const renderTasks = () => {
    if (error) return <p>{properties.ERROR_MESSAGE}</p>;
    if (loading) return <p>{properties.LOADING_MESSAGE}</p>;

    if (data && data.length > 0) {
      return data.map((task) => (
        <TaskItem
          {...task}
          key={task.id}
          completed={task.complete}
          handleCompletedUpdate={handleCompletedUpdate}
          handleProgressUpdate={handleProgressUpdate}
          onDelete={onDelete}
        />
      ));
    }
  };

  const sortOptions = [
    properties.NONE,
    properties.PRIORITY,
    properties.IN_PROGRESS,
    properties.INCOMPLETE,
  ];

  enum SortOptions {
    PRIORITY = "priority",
    IN_PROGRESS = "in-progress",
    INCOMPLETE = "incomplete",
  }

  // GET /tasks?sortBy=priority
  // GET /tasks?sortBy=in-progress
  // GET /tasks?sortBY=complete
  const onSort = (option: string) => {
    switch (option) {
      case properties.NONE:
        setSortKey(undefined);
        break;
      case properties.PRIORITY:
        setSortKey(SortOptions.PRIORITY);
        break;
      case properties.IN_PROGRESS:
        setSortKey(SortOptions.IN_PROGRESS);
        break;
      case properties.INCOMPLETE:
        setSortKey(SortOptions.INCOMPLETE);
        break;
    }
  };

  return (
    <s.Wrapper>
      <s.Main>
        <>
          <s.Heading>Tasks</s.Heading>
          <AddTask onAdd={handleTaskAdd} />
          <SortBySelect options={sortOptions} data={data!} onSort={onSort} />
          {renderTasks()}
        </>
      </s.Main>
    </s.Wrapper>
  );
}

export default App;
