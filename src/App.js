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
    return (
      <div className="App">
        <Todo/>
      </div>
    );
  }
}
export default App;
