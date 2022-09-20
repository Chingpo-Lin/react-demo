import React, { Component } from 'react';
import './index.css'

export default class Item extends Component {

  // mark mouse status
  state = {mouse:false}

  // mouse enter and leave recall
  handleMouse = (flag) => {
    return () => {
      this.setState({mouse:flag})
    }
  }

  // check, cancel check recall
  handleCheck = (id) => {
    return (event) => {
      // console.log(id, event.target.checked)
      // console.log(id)
      this.props.updateTodo(id,event.target.checked)
    }
  }

  // delete a todo recall
  handleDelete = (id) => {
    if (window.confirm('are you sure to delete?')) {
      this.props.deleteTodo(id)
    }
  }

  render() {
    const {id,name,done} = this.props
    const {mouse} = this.state
    return (
      <li style={{backgroundColor:mouse ? '#ddd':'white'}} onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)} >
        <label>
          <input type="checkbox" checked={done} onChange={this.handleCheck(id)}/>
          <span>{name}</span>
        </label>
        <button onClick={()=>this.handleDelete(id)} className="btn btn-danger" style={{display:mouse?'block':'none'}}>删除</button>
      </li>
    );
  }
}
