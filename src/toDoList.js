import React, { Component } from "react";
import ToDoItems from "./Todoitems";

class toDoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: []
    };

    // if localStorage has non-default content --> create items with key/values from localStorage. Removes default methods in localstorage
    for (var key in localStorage) {
      if (key.length >= 11) {
        this.state.items.push({
          text: localStorage.getItem(key),
          key: key
        });
      }
    }

    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  addItem(e) {
    if (this._inputElement.value !== "") {
      const newItem = {
        text: this._inputElement.value,
        key: Date.now()
      };

      // saves item to localStorage
      localStorage.setItem(newItem.key, newItem.text);

      this.setState(prevState => {
        return {
          items: prevState.items.concat(newItem)
        };
      });
    }

    this._inputElement.value = "";

    e.preventDefault();
  }

  deleteItem(key) {
    localStorage.removeItem(key);
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
            <input
              ref={a => (this._inputElement = a)}
              placeholder="enter task"
              autoFocus
            />
          </form>
        </div>
        <ToDoItems entries={this.state.items} delete={this.deleteItem} />
      </div>
    );
  }
}

export default toDoList;
