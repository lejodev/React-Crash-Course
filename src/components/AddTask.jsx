import React, { useState } from "react";

const AddTask = (props) => {
  const [text, setText] = useState("");
  const [day, setday] = useState("");
  const [reminder, setReminder] = useState(false);

  return (
    <form
      className="task_form"
      onSubmit={(e) => {
        e.preventDefault();

        if (!text || !day) {
          alert("You should include your task correctly");
          return;
        }

        props.onAdd({ text, day, reminder });

        setText("");
        setday("");
        setReminder(false);
      }}
    >
      <div className="form_control">
        <label htmlFor="task">Task</label>
        <input
          type="text"
          id="task"
          placeholder="Add Task"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className="form_control">
        <label htmlFor="date_time">Date and time</label>
        <input
          type="text"
          id="date_time"
          placeholder="Add Date and time"
          value={day}
          onChange={(e) => setday(e.target.value)}
        />
      </div>
      <div className="form_control">
        <label htmlFor="check">Add Reminder</label>
        <input
          id="check"
          type="checkbox"
          checked={reminder}
          value={reminder}
          onChange={(e) => setReminder(e.currentTarget.checked)}
        />
      </div>
      <input type="submit" value="Save Task" className="button" />
    </form>
  );
};

export default AddTask;
