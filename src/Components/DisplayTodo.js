import React from "react";

export default class DisplayTodo extends React.Component {
  state = {
    crossed: false,
  };

  render() {
    const button = this.props.todo.done ? (
      <button onClick={(e) => this.props.handleUndone(e, this.props.todo.id)}>
        undo
      </button>
    ) : (
      <button onClick={(e) => this.props.handleDone(e, this.props.todo.id)}>
        done
      </button>
    );
    return (
      <div>
        <span className={this.props.todo.done ? "done" : "not-done"}>
          {this.props.todo.id}. {this.props.todo.name}
        </span>
        {button}
      </div>
    );
  }
}
