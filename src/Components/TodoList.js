import React from "react";
import { AddTodo } from "./AddTodo";
import DisplayTodo from "./DisplayTodo";
import { Filter } from "./Filter";

export class Todo extends React.Component {
  state = {
    todos: [],
    i: 1,
    activetodos: 0,
    addtodo: "",
    filter: "all",
  };
  handleChange = (e) => {
    this.setState({ addtodo: e.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      i: this.state.i + 1,
      todos: [
        ...this.state.todos,
        { id: this.state.i, name: e.target[0].value, done: false },
      ],
      activetodos: this.state.activetodos + 1,
      addtodo: "",
    });
  };

  handleDone = (e, id) => {
    this.setState((prevState) => ({
      todos: prevState.todos.map((obj) =>
        obj.id === id ? Object.assign(obj, { done: true }) : obj
      ),
      activetodos: prevState.activetodos - 1,
    }));
  };

  handleUndone = (e, id) => {
    this.setState((prevState) => ({
      todos: prevState.todos.map((obj) =>
        obj.id === id ? Object.assign(obj, { done: false }) : obj
      ),
      activetodos: prevState.activetodos + 1,
    }));
  };

  handleSelect = (e) => {
    this.setState({ filter: e.target.value });
  };

  render() {
    let todosToShow = this.state.todos;
    if (this.state.filter === "active") {
      todosToShow = this.state.todos.filter((todo) => todo.done === false);
    }
    if (this.state.filter === "complete") {
      todosToShow = this.state.todos.filter((todo) => todo.done === true);
    }
    return (
      <div>
        <AddTodo
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          value={this.state.addtodo}
        />
        <Filter handleSelect={this.handleSelect} />
        <span>Currently {this.state.activetodos} todos are active.</span>
        <span>Todo List:</span>
        <div>
          {todosToShow.map((todo) => (
            <div key={todo.id}>
              <DisplayTodo
                todo={todo}
                handleDone={this.handleDone}
                handleUndone={this.handleUndone}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
}
