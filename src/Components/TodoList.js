import React from "react";
import AddTodo from "./Todo Components/AddTodo";
import DisplayTodo from "./Todo Components/DisplayTodo";
import FilterTodo from "./Todo Components/FilterTodo";

export default class Todo extends React.Component {
  state = {
    todos: [],
    i: 1,
    activetodos: 0,
    filter: "all",
    addedValue: "",
  };
  handleChange = (e) => {
    this.setState({ addedValue: e.target.value });
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
      addedValue: "",
    });
  };

  handleDone = (id) => {
    this.setState((prevState) => ({
      todos: prevState.todos.map((obj) =>
        obj.id === id ? Object.assign(obj, { done: true }) : obj
      ),
      activetodos: prevState.activetodos - 1,
    }));
  };

  handleUndone = (id) => {
    this.setState((prevState) => ({
      todos: prevState.todos.map((obj) =>
        obj.id === id ? Object.assign(obj, { done: false }) : obj
      ),
      activetodos: prevState.activetodos + 1,
    }));
  };

  handleDelete = (id) => {
    this.setState({ todos: this.state.todos.filter((todo) => todo.id !== id) });
  };
  handleDeleteComplete = () => {
    this.setState({
      todos: this.state.todos.filter((todo) => !todo.done),
    });
  };
  handleFilter = (filter) => {
    this.setState({ filter: filter });
  };

  render() {
    let todosToShow = this.state.todos;
    if (this.state.filter === "active") {
      todosToShow = this.state.todos.filter((todo) => !todo.done);
    }
    if (this.state.filter === "complete") {
      todosToShow = this.state.todos.filter((todo) => todo.done);
    }
    return (
      <div>
        <h1
          style={{
            textAlign: "center",
            fontFamily: "monospace",
            fontSize: "3em",
          }}
        >
          Todo App
        </h1>
        <main
          style={{
            display: "flex",
            flexDirection: "column",
            width: "450px",
            margin: "0 auto",
            gap: "5px",
            border: "1px solid black",
            padding: "10px",
          }}
        >
          <FilterTodo
            handleFilter={this.handleFilter}
            handleDeleteComplete={this.handleDeleteComplete}
            activetodos={this.state.activetodos}
            filter={this.state.filter}
          />
          <div>
            {todosToShow.map((todo) => (
              <DisplayTodo
                key={todo.id}
                todo={todo}
                handleDone={this.handleDone}
                handleUndone={this.handleUndone}
                handleDelete={this.handleDelete}
              />
            ))}
          </div>
          <AddTodo
            handleSubmit={this.handleSubmit}
            handleChange={this.handleChange}
            value={this.state.addedValue}
          />
        </main>
      </div>
    );
  }
}
