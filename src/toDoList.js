import React, { Component } from "react";
import ToDoItems from "./Todoitems";

class toDoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: []
    };

    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  addItem(e) {
    if (this._inputElement.value !== "") {
      const newItem = {
        text: this._inputElement.value,
        key: Date.now()
      };

      this.setState(prevState => {
        return {
          items: prevState.items.concat(newItem)
        };
      });
    }

    this._inputElement.value = "";

    console.log(this.state.items);

    e.preventDefault();
  }

  deleteItem(key) {
    var filteredItems = this.state.items.filter(function(item) {
      return item.key !== key;
    });

    this.setState({
      items: filteredItems
    });
  }

  render() {
    return (
      <div className="toDoListMain">
        <div className="header">
          <form onSubmit={this.addItem}>
            <textarea
              ref={a => (this._inputElement = a)}
              placeholder="enter task"
              autoFocus
            />
            <button className="btn btn-sm btn-primary" type="submit">
              add
            </button>
          </form>
        </div>
        <ToDoItems entries={this.state.items} delete={this.deleteItem} />
      </div>
    );
  }
}

export default toDoList;
