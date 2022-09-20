import React, { Component } from 'react';
import './index.css'

export default class Footer extends Component {

  handleCheckAll = (event) => {
    this.props.checkAllTodo(event.target.checked)
  }

  // clear all done list
  handleClearAllDone = () => {
    this.props.clearAllDone()
  }

  render() {
    const {todos} = this.props
    // finish
    const doneCount = todos.reduce((pre,todo) => pre + (todo.done ? 1 : 0), 0)
    // total 
    const total = todos.length
    return (
    <div className="todo-footer">
        <label>
            <input type="checkbox" onChange={this.handleCheckAll} checked={doneCount === total && total !== 0 ? true : false}/>
        </label>
        <span>
            <span>finished: {doneCount}</span> / total: {total}
        </span>
        <button onClick={this.handleClearAllDone} className="btn btn-danger">clear finished task</button>
        </div>
    );
  }
}
