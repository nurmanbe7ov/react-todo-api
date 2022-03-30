import React, { createContext, useReducer } from "react";
import axios from "axios";

export const todoContext = createContext();

const INIT_STATE = {
  todos: [],
  taskToEdit: null,
};
const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "GET_TODOS_DATA":
      return { ...state, todos: action.payload };
    case "EDIT_TODO":
      return { ...state, taskToEdit: action.payload };
    default:
      return state;
  }
};
const TodoContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const getTodosData = async () => {
    let { data } = await axios("http://localhost:8000/todos");
    // console.log(data);
    dispatch({
      type: "GET_TODOS_DATA",
      payload: data,
    });
  };

  const addTask = (newTask) => {
    // console.log(newTask);
    axios.post("http://localhost:8000/todos", newTask);
    getTodosData();
  };
  const changeStatus = async (id) => {
    let { data } = await axios.patch(`http://localhost:8000/todos/${id}`);
    try {
      await axios.patch(`http://localhost:8000/todos/${id}`, {
        status: !data.status,
      });
      getTodosData();
    } catch (err) {
      console.log(err);
    }
  };
  const deleteTask = async (id) => {
    await axios.delete(`http://localhost:8000/todos/${id}`);
    getTodosData();
  };

  const editTodo = async (id) => {
    let { data } = await axios(`http://localhost:8000/todos/${id}`);
    // console.log(data);
    dispatch({
      type: "EDIT_TODO",
      payload: data,
    });
  };

  const saveTask = async (newTask) => {
    axios.patch(`http://localhost:8000/todos/${newTask.id}`, newTask);
  };
  return (
    <todoContext.Provider
      value={{
        todos: state.todos,
        taskToEdit: state.taskToEdit,
        addTask,
        getTodosData,
        changeStatus,
        deleteTask,
        editTodo,
        saveTask,
      }}
    >
      {children}
    </todoContext.Provider>
  );
};

export default TodoContextProvider;
