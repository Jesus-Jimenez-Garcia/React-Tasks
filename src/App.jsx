import { tasks as data } from "./data/tasks";
import { useEffect, useState } from "react";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(data);
  }, []);

  function createTask({title, description}) {
    setTasks([...tasks,{
      title,
      id: tasks.length,
      description
    }]);
  }

  return (
    <>
      <TaskForm createTask={createTask} />
      <hr />
      <TaskList tasks={tasks} />
    </>
  );
}

export default App;
