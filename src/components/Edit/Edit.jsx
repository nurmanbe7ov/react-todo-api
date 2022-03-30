import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { todoContext } from "../Context/TodoContextProvider";

const Edit = () => {
  const { taskToEdit, saveTask } = useContext(todoContext);
  //   console.log(taskToEdit);
  const [newEditItem, setNewEditItem] = useState(taskToEdit);
  useEffect(() => {
    setNewEditItem(taskToEdit);
  }, [taskToEdit]);

  function handleEditInp(e) {
    let newTask = {
      ...newEditItem,
      task: e.target.value,
    };
    setNewEditItem(newTask);
  }
  return (
    <div>
      <h1>Edit</h1>
      {newEditItem ? (
        <>
          <input
            onChange={handleEditInp}
            value={newEditItem.task}
            type="text"
          />
          <Link to={"/list"}>
            <button onClick={() => saveTask(newEditItem)}>Save</button>
          </Link>
        </>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
};

export default Edit;
