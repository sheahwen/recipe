import React from "react";
import Card from "./Card";
import "./Card.css";

const TodoList = () => {
  return (
    <div className="container">
      <div>This is the todo list</div>
      <Card activity="Buy groceries" time="14:00"></Card>
      <Card activity="Buy groceriess" time="15:00"></Card>
      <Card activity="Buy groceriesss" time="16:00"></Card>
    </div>
  );
};

export default TodoList;
