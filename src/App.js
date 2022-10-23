import "./App.css";
import Todo from "./Components/TodoList";
import React from "react";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Todo/>
      </div>
    );
  }
}
export default App;
