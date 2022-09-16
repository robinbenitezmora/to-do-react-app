import React, { Component } from 'react';

class InputTodo extends Component {
  render() {
    return (
      <input
        type="text"
        className="new-todo"
        placeholder="What needs to be done?"
        value="this.state.title"
        name="title"
        onChange={this.onChange}
      />
    );
  }
}
export default InputTodo;
