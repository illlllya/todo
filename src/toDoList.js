import React, { Component } from "react";
import ToDoItems from "./Todoitems";

// todo add localStorage support https://codesandbox.io/s/5z6p3wvq64

class toDoList extends Component {
  constructor(props) {
    super(props);

    // how many items in local storage without default methods
    let itemsInLocalStorage = -6;

    // enumerate over each key in localStorage
    for (var key in localStorage) {
      itemsInLocalStorage++;
    }

    this.state = {
      items: []
    };

    // if localStorage has non-default content --> create items with key/values from localStorage
    if (itemsInLocalStorage > 0) {
      for (var key in localStorage) {
        //removes default methods in localstorage
        if (key.length >= 11) {
          this.state.items.push({
            text: localStorage.getItem(key),
            key: key
          });
        }

        itemsInLocalStorage++;
      }
    }

    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  // clearLocalStorage() {
  //   console.log("Clearing local storage...");
  //   window.localStorage.clear();
  //   window.location.reload();
  // }

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
        {/* <button
          className="btn btn-sm btn-primary"
          onClick={() => this.clearLocalStorage()}
        >
          Clear
        </button> */}
      </div>
    );
  }
}

export default toDoList;
