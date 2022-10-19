import React from "react";

export default class FilterTodo extends React.Component{
    render(){
        return <div>
            <span>Filter</span>
            <select onChange={this.props.handleFilter}>
                <option>all</option>
                <option>active</option>
                <option>complete</option>
            </select>
        </div>
    }
}