import { tasks as data } from "./data/tasks";
import { useEffect, useState } from "react";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(data);
  }, []);

  function createTask({ title, description }) {
    setTasks([
      ...tasks,
      {
        title,
        id: tasks.length,
        description,
      },
    ]);
  }

  function deleteTask(taskId) {
    setTasks(tasks.filter((task) => task.id !== taskId));
  }

  return (
    <>
      <TaskForm createTask={createTask} />
      <hr />
      <TaskList tasks={tasks} deleteTask={deleteTask} />
    </>
  );
}

export default App;
