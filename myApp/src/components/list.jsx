import React from "react";
import { useState } from "react";

const Kore = () => {
  const [list, setList] = useState("");
  const [lists, setLists] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();

    if (list !== "") {
      setLists([{ id: "list", list }]);
    }
  };

  return (
    <div className="List">
      <div className="container">
        <h1>Todo list App</h1>
        <form className="todoForm" onSubmit={handleSubmit}>
          <input type="text" onChange={(e) => setList(e.target.value)} />
          <button type="submit">Go</button>
        </form>
        <ul>
          <li>
            <span>Learn React</span>
            <button>Edit</button>
            <button>Delete</button>
          </li>
          <li>
            <span>Learn Javascript</span>
            <button>Edit</button>
            <button>Delete</button>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Kore;
