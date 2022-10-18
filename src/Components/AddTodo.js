import React from "react";
export class AddTodo extends React.Component {
  state = {
    value: "",
  };
  handleChange = (e) => {
    this.setState({ value: e.target.value });
  };
  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <label>add todo</label>
        <input
          id="addtodo"
          onChange={this.handleChange}
          value={this.state.value}
        />
        <button type="submit">Submit</button>
      </form>
    );
  }
}
