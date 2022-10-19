import React from "react";

export default class FilterTodo extends React.Component{
    render(){
        return <div className="filter">
            <button onClick={()=>this.props.handleFilter("all")}>All</button>
            <button onClick={()=>this.props.handleFilter("active")}>Active</button>
            <button onClick={()=>this.props.handleFilter("complete")}>Complete</button>
            <button onClick={this.handleDeleteComplete}>Delete Complete</button>

        </div>
    }
}