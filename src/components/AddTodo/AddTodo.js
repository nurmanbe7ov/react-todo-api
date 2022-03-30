import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { todoContext } from "../Context/TodoContextProvider";

const AddTodo = () => {
  const [inpValue, setInpValue] = useState("");
  // console.log(inpValue);
  const { addTask } = useContext(todoContext);

  function handleClick() {
    let newObj = {
      task: inpValue,
      status: false,
    };
    addTask(newObj);
    setInpValue("");
  }

  return (
    <div>
      <h1>Add Todo</h1>
      <input
        value={inpValue}
        onChange={(e) => setInpValue(e.target.value)}
        type="text"
      />
      <Link to={"/list"}>
        <button onClick={handleClick}>Add</button>
      </Link>
    </div>
  );
};

export default AddTodo;
