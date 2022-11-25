import React from "react";

export default class FilterTodo extends React.Component {
  state = {
    toggle: true,
    matches: window.matchMedia("(min-width: 1360px)").matches,
  };
  componentDidMount() {
    const handler = (e) => this.setState({ matches: e.matches });
    window.matchMedia("(min-width: 768px)").addEventListener("change", handler);
  }
  handleToggle = () => {
    this.setState({ toggle: !this.state.toggle });
  };
  render() {
    // const toggleOn = (
    //   <svg
    //     xmlns="http://www.w3.org/2000/svg"
    //     width="16"
    //     height="16"
    //     fill="currentColor"
    //     className="bi bi-caret-right-fill"
    //     viewBox="0 0 16 16"
    //   >
    //     <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
    //   </svg>
    // );
    const toggle = (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        fill="currentColor"
        className="bi bi-caret-left-fill"
        viewBox="0 0 16 16"
      >
        <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z" />
      </svg>
    );
    const filterForBigScr = {
      border: "1px solid black",
      padding: "5px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      height: "200px",
      position: "absolute",
      top: "-10px",
      right: "-220px",
    };
    const filterForSmallScr = {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
    };
    const filter = (
      <div style={this.state.matches ? filterForBigScr : filterForSmallScr}>
        <button
          className={`btn ${this.props.filter === "all" ? "active" : ""}`}
          onClick={() => this.props.handleFilter("all")}
        >
          All
        </button>
        <button
          className={`btn ${this.props.filter === "active" ? "active" : ""}`}
          onClick={() => this.props.handleFilter("active")}
        >
          Active
        </button>
        <button
          className={`btn ${this.props.filter === "complete" ? "active" : ""}`}
          onClick={() => this.props.handleFilter("complete")}
        >
          Complete
        </button>
        <button className="btn" onClick={this.props.handleDeleteComplete}>
          Delete Complete
        </button>
      </div>
    );
    let rotatationDegree = this.state.matches ? 0 : 90;
    if (!this.state.toggle) rotatationDegree += 180;

    return (
      <div style={{ position: "relative" }}>
        <div style={{ display: "flex" }}>
          <span
            style={{
              fontSize: "1.25em",
              fontFamily: "monospace",
              display: "inline-block",
            }}
          >
            {this.props.activetodos} todos left to do.
          </span>
          <button
            onClick={this.handleToggle}
            style={{
              backgroundColor: "transparent",
              border: "none",
              marginLeft: "auto",
              rotate: `${rotatationDegree}deg`,
              transition: "rotate 0.25s ease-in",
              cursor: "pointer",
            }}
          >
            {toggle}
          </button>
        </div>
        {this.state.toggle ? filter : ""}
      </div>
    );
  }
}
