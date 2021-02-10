import { useState } from "react";
import Task from "./Task";
import AddTask from "./AddTask"

// const addTask = () => {
//   return [
//     ...addTask,
//     {
//       id: 5,
//       text: "Update Garage securuty system",
//       day: "Aug/20/2022",
//       reminder: true,
//     },
//   ];
// };

const Tasks = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Task 1",
      day: "Mar/20/2022",
      reminder: true,
    },
    {
      id: 2,
      text: "Task 2",
      day: "Mar/28/2022",
      reminder: true,
    },
    {
      id: 3,
      text: "Task 3",
      day: "Jun/21/2022",
      reminder: true,
    },
    {
      id: 4,
      text: "Task 4",
      day: "Sep/20/2022",
      reminder: false,
    },
  ]);

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000);
    const newTask = {id, ...task};
    setTasks([...tasks, newTask]);
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
    console.log("Delete", id);
  };

  const toggleTaskReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (

    <div className="container">
      <AddTask onAdd={addTask} />
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onDelete={deleteTask}
          onToggle={toggleTaskReminder}
        />
      ))}
    </div>
  );
};

export default Tasks;
