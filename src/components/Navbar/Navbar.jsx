import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="nav">
        <div className="nav-list">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/add">Add Todo</NavLink>
          <NavLink to="/list">TodoList</NavLink>
          <NavLink to="/edit">Edit</NavLink>
        </div>
      </div>
    </>
  );
};

export default Navbar;
