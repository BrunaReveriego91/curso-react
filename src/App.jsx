import React, { useState } from "react";
import Tasks from "./componentes/Tasks";
import "./App.css";
import AddTask from "./componentes/AddTask";

const App = () => {
  // let message = "Hello world!";
  const [tasks, setTasks] = useState([
    {
      id: "1",
      title: "Estudar Programação",
      completed: false,
    },
    {
      id: "2",
      title: "Ler Livros",
      completed: true,
    },
  ]);


  const handleTaskAddition = (taskTitle) => {
    const newTasks = [...tasks, {
      
    }]
  }

  return (
    <>
      <div className="container">
        <AddTask />
        <Tasks tasks={tasks} />
      </div>
      ;
    </>
  );
};

export default App;
