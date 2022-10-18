import React from "react";

export class Filter extends React.Component{
    render(){
        return <div>
            <span>Filter</span>
            <select onChange={this.props.handleSelect}>
                <option>all</option>
                <option>active</option>
                <option>complete</option>
            </select>
        </div>
    }
}