import { useState } from "react";

const Add = ({ onAdd }) => {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [reminder, setReminder] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();

    if (!text) {
        alert("Please Set Task")
        return
    }
    onAdd({text, day, reminder})
    setText("")
    setDay("")
    setReminder(false)
  };
  return (
    <form className="mb-10" onSubmit={onSubmit}>
      <div className="my-6">
        <label className="block" htmlFor="task">Task</label>
        <input
          id="task"
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add a task"
        />
      </div>
      <div className="my-6">
        <label className="block" htmlFor="time">Time</label>
        <input
          id="time"
          value={day}
          onChange={(e) => setDay(e.target.value)}
          type="text"
          placeholder="Day & Time"
        />
      </div>
      <div className="my-6 pr-16 flex items-center justify-between">
        <label className="block flex-1" htmlFor="status">Set a reminder</label>
        <input
          id="status"
          className="flex-2 h-6 w-6"
          checked={reminder}
          onChange={(e) => setReminder(e.currentTarget.checked)}
          type="checkbox"
        />
      </div>
      <input
        className="w-full block bg-steelblue text-white border-none px-5 py-2.5 m-1.5 rounded cursor-pointer no-underline text-base font-inherit focus:outline-none active:scale-95"
        type="submit"
        value="save"
      />
    </form>
  );
};

export default Add;
