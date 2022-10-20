import React, { Component } from "react";
class Counter extends Component {
  state = {
    count: 0,
    tags: ["tag1", "tag2", "tag3"],
  };

  //defining a method for increment
  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  doHandleIncrement = () => {
    this.handleIncrement({ id: 1 });
  };

  handleDecrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  doHandleDecrement = () => {
    this.handleDecrement({ id: 1 });
  };

  render() {
    return (
      <React.Fragment>
        <p>Showing counted items in the database.</p>

        <div>
          {/* we can put any valid javascript expression inside this curly braces down below. */}
          <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
          <button
            // passing event handler
            onClick={() => this.handleIncrement({ id: 1 })}
            className="btn btn-secondary btn-sm"
          >
            <i class="fa-solid fa-plus">Increment</i>
          </button>{"   "}
          <button
            // passing event handler
            onClick={() => this.handleDecrement({ id: 1 })}
            className="btn btn-secondary btn-sm"
          >
            <i class="fa-solid fa-plus">Decrement</i>
          </button> 
        </div>
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
