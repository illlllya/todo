import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
import ToDo from "./toDoList";

const destination = document.querySelector("#container");

ReactDOM.render(
  <div>
    <ToDo />
  </div>,
  destination
);
