import React, { Component } from 'react';
import PropTypes from 'prop-types'
import './index.css'


export default class Header extends Component {

  // type and necessary limit
  static propTypes = {
    addTodo:PropTypes.func.isRequired
  }

  handleKeyUp = (event) => {
    // get value
    const {keyCode, target} = event
    // if enter key is clicked 
    if (event.keyCode !== 13) return
    console.log(target.value, keyCode);
    // cannot enter blank
    if (target.value.trim() === '') {
      alert('enter cannot be empty')
      return
    }
    // prepare to do obj
    const todoObj = {id:Math.random(),name:target.value,done:false}
    // pass todoObj to app
    this.props.addTodo(todoObj)
    // clear enter
    target.value=''
  }

  render() {
    return (
      <div className="todo-header">
        <input onKeyUp={this.handleKeyUp} type="text" placeholder="Enter your task, press enter to confirm..."/>
      </div>
    );
  }
}
