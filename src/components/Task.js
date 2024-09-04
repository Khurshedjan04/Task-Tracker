import { FaTimes } from "react-icons/fa";

const Task = ({ task, onDelete, doubleClick }) => {
  return (
    <div
      onDoubleClick={() => doubleClick(task.id)}
      className={` ${
        task.reminder ? "border-l-4 border-green-500 " : ""
      }bg-gray-200 m-1.5 px-5 py-2.5 cursor-pointer`}
    >
      <h3 className="select-none flex items-center justify-between gap-5">
        {task.text}
        <FaTimes onClick={() => onDelete(task.id)} style={{ color: `red` }} />
      </h3>
      <p>{task.day}</p>
    </div>
  );
};

export default Task;
