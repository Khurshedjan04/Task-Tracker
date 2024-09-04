import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import Add from "./components/Add";
function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Appoinment with Doctor",
      day: "Friday at 3pm",
      reminder: true,
    },
    {
      id: 2,
      text: "Meeting at school",
      day: "Monday at 4pm",
      reminder: true,
    },
    {
      id: 3,
      text: "Shopping",
      day: "Thursday at 11am",
      reminder: false,
    },
  ]);
  const [openForm, setOpenForm] = useState(false);
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 1000) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };
  const reminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id == id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };
  return (
    <div className="min-w-[400px] max-w-[500px] my-8 mx-auto overflow-auto min-h-[300px] border border-steelblue p-8 rounded-md">
      <Header
        title="Task tracker"
        btnColor={openForm ?  {backgroundColor : "red"} : {backgroundColor : "steelblue"}}
        btntext={openForm ? "Close" : "Add"}
        toOpenForm={() => setOpenForm(!openForm)}
      />
      {openForm && <Add onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} chekStatus={reminder} onDelete={deleteTask} />
      ) : (
        <h1>No task to show</h1> 
      )}
    </div>
    
  );
}

export default App;
