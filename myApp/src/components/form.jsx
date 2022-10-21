import React from "react";
import { useState } from "react";
const TodoList = () => {
  const [list, setList] = useState([
    { title: "Aaron", description: "descrpiton" },
  ]);
  const handleTask = (id) => {};
  const handleSubmit = () => {
    const data = {
      title: Math.random().toString(),
      description: "description",
    };
    setList((l) => [...l, data]);
  };
  return (
    <>
      <div>
        <h3>Todo list</h3>
        <h4>Create Task</h4>
      </div>
      <div className="task container">
        <label for="myfile"></label>
        <input type="file" id="myfile" name="myfile"></input>
        <br></br>
        <textarea
          name="message"
          rows="1"
          cols="30"
          placeholder="Title"
        ></textarea>
        <br></br>
        <textarea
          name="message"
          rows="10"
          cols="30"
          placeholder="Description"
        ></textarea>
        <br></br>
        <button id="a1" onClick={handleSubmit}>
          submit
        </button>
        <ul>
          {list.map((t) => (
            <li>
              im
              <p key={t.id}>{t.title}</p>
              <p key={t.id}>{t.description}</p>
              <button onClick={() => handleEdit(t.id)}>Edit</button>
              <button onClick={() => handleDelete(t.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
export default TodoList;
