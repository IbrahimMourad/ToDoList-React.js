import React from "react";
import TodoItem from "./TodoItem";
import "./ToDoListItems.css";
class ToDoListItems extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      currentItem: {
        text: "",
        key: "",
      },
    };
    this.handleInput = this.handleInput.bind(this);
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.setUpdate = this.setUpdate.bind(this);
  }
  handleInput(e) {
    this.setState({
      currentItem: {
        text: e.target.value,
        key: Date.now(),
      },
    });
  }

  addItem(e) {
    e.preventDefault();
    const newItem = this.state.currentItem;

    if (newItem.text !== "") {
      const newItems = [...this.state.items, newItem];
      this.setState({
        items: newItems,
        currentItem: {
          text: "",
          key: "",
        },
      });
    }
  }

  deleteItem(key) {
    const filteredItems = this.state.items.filter((item) => item.key !== key);
    this.setState({
      items: filteredItems,
    });
  }
  setUpdate(text, key) {
    const items = this.state.items;
    items.map((item) => {
      if (item.key === key) {
        item.text = text;
      }
    });
    this.setState({
      items: items,
    });
  }

  renderForm = () => {
    return (
      <form>
        <div className="input-group mb-3">
          <input
            value={this.state.currentItem.text}
            onChange={this.handleInput}
            type="text"
            className="form-control"
            placeholder="ToDo Text"
          />
          <div className="input-group-append">
            <button onClick={this.addItem} className="btn btn-primary">
              Add
            </button>
          </div>
        </div>
      </form>
    );
  };
  render() {
    return (
      <div>
        {this.renderForm()}
        <div className="container  d-flex align-items-center justify-content-center">
          <TodoItem
            items={this.state.items}
            deleteItem={this.deleteItem}
            setUpdate={this.setUpdate}
          />
        </div>
      </div>
    );
  }
}

export default ToDoListItems;
