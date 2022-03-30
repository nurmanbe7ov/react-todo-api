import React from "react";
import { Route, Routes } from "react-router-dom";
import AddTodo from "./components/AddTodo/AddTodo";
import Edit from "./components/Edit/Edit";
import Home from "./components/Home/Home";
import MainLayout from "./components/Layouts/MainLayouts";
import TodoList from "./components/TodoList/TodoList";

const MyRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddTodo />} />
        <Route path="/list" element={<TodoList />} />
        <Route path="/edit" element={<Edit />} />
      </Route>
    </Routes>
  );
};

export default MyRoutes;
