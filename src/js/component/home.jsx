import React from "react";

import ToDoList from "./ToDoList";

const Home = () => {
  return (
    <div className="text-center">
      <h1 className="mt-4">To Do List</h1>
      <ToDoList />
    </div>
  );
};

export default Home;
