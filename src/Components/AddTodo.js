import React from "react";
export class AddTodo extends React.Component{
    render(){
        return <form onSubmit={this.props.handleSubmit}>
        <label>add todo</label>
        <input id="addtodo" onChange={this.props.handleChange} value={this.props.value}/>
        <button type="submit">Submit</button>
      </form>
    }
}
