import "./App.css";
import Todo from "./Components/TodoList";
import React from "react";

class App extends React.Component {
  state = {
    showTodo: true,
  };
  handleToggle = (e) => {
    this.setState({ showTodo: !this.state.showTodo });
  };
  render() {
    let buttonText = this.state.showTodo ? "OFF" : "ON";
    return (
      <div className="App">
        <button onClick={this.handleToggle}>{buttonText}</button>
        <div className={this.state.showTodo?"show-todo":"hide-todo"}>
          <Todo />
        </div>
      </div>
    );
  }
}
export default App;
