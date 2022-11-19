import React from "react";
export default class AddTodo extends React.Component {
  state = {
    toggle: false,
  };
  handleToggle = () => {
    this.setState({ toggle: !this.state.toggle });
  };
  render() {
    const form = (
      <form onSubmit={this.props.handleSubmit}>
        <input
        style={{borderBottom:"1px solid black"}}
          id="addtodo"
          onChange={this.props.handleChange}
          value={this.props.value}
          autoFocus
        />
        <button type="submit">Add todo</button>
      </form>
    );
    return (
      <div style={{ borderTop: "1px solid black",paddingTop:"5px"}}>
        <button onClick={this.handleToggle}>Add a new todo</button>
        {this.state.toggle ? form : ""}
      </div>
    );
  }
}
