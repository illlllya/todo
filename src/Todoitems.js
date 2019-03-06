import React, { Component } from "react";
import FlipMove from "react-flip-move";

class TodoItems extends Component {
  constructor(props) {
    super(props);

    this.createTask = this.createTask.bind(this);
  }

  createTask(items) {
    return (
      <li
        onClick={() => this.delete(items.key)}
        className="list-group-item"
        key={items.key}
      >
        <div>{items.text}</div>
        <div className="logo">&#x2713;</div>
      </li>
    );
  }

  delete(key) {
    this.props.delete(key);
  }

  render() {
    let todoEntries = this.props.entries;
    let listItems = todoEntries.map(this.createTask);

    return (
      <ul className="theList list-group list-group-flush">
        <FlipMove duration={200} easing="ease-in">
          {listItems}
        </FlipMove>
      </ul>
    );
  }
}

export default TodoItems;
