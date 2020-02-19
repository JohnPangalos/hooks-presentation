import React, { Component } from "react";

export class ClassBasedState extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidUpdate(_, prevState) {
    if (this.state.count != prevState.count) console.log("Count updated!")
  }

  handleClick() {
    this.setState({
      count: this.state.count + 1
    });
  }

  render() {
    return (
      <>
        <h3>Class Based State</h3>
        <div>Count: {this.state.count}</div>
        <button onClick={this.handleClick}>Add One</button>
      </>
    );
  }
}
