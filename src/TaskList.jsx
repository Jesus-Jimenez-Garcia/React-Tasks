import { useEffect, useState } from "react";
import { tasks } from "./tasks";

console.log(tasks);

function TaskList() {
  const [tasks, setTasks] = useState([...tasks]);

useEffect(()=> {
  setTasks(tasks)
}, [])

  if (tasks.length === 0){
    return <h1>No hay tareas aún</h1>
  }

  return (
    <div>
      {tasks.map((task) => (
        <div>tarea</div>
      ))}
    </div>
  );
}

export default TaskList;
