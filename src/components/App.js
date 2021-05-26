import React from "react";
import ToDoListItems from "./ToDoListItems";
import "./App.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

library.add(faTrash);

const App = () => {
  return (
    <div>
      <ToDoListItems />
    </div>
  );
};

export default App;
