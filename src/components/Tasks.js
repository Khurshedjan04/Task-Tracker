import Task from "./Task"
const Tasks = ({tasks, onDelete, chekStatus}) => {
 
  return (
    <div className="flex flex-col gap-2">
      {tasks.map((task) => (
        <Task key={task.id} doubleClick = {chekStatus} onDelete = {onDelete} task = {task}/>
      ))}
    </div>
  );
};

export default Tasks;
