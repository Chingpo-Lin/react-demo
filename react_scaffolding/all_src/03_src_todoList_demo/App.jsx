import React, { Component } from 'react';
import './App.css'
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer';

export default class App extends Component {

  // state come with operation on state

  // initial state
  state = {todos:[
    {id:'001', name:'eat', done:true},
    {id:'002', name:'sleep', done:true},
    {id:'003', name:'coding', done:false},
    {id:'004', name:'shopping', done:true},
  ]}

  // addToDo used to add a todo, accept a todo object
  addTodo = (todoObj) => {
    console.log(todoObj.id)
    // get origin todos
    const {todos} = this.state
    // add a todo
    const newTodos = [todoObj, ...todos]
    // update state
    this.setState({todos: newTodos})
  }

  // update todo object
  updateTodo = (id, done) => {
    //get state todo
    const {todos} = this.state
    // match id
    const newTodos = todos.map((todoObj) => {
      if (todoObj.id === id) {
        return {...todoObj,done}
      } else return todoObj
    })
    // set new state
    this.setState({todos:newTodos})
  }

  // delete todo object
  deleteTodo = (id) => {
    // get original todos 
    const {todos} = this.state
    // delete given id todo obj
    const newTodos = todos.filter((todoObj) => {
      return todoObj.id !== id
    })
    // set new todo 
    this.setState({todos:newTodos})
  }

  // select all
  checkAllTodo = (done) => {
    // get original todos
    const {todos} = this.state
    // operate data
    const newTodos = todos.map((todoObj) => {
      return {...todoObj, done}
    })

    // update state
    this.setState({todos:newTodos})
  }

  clearAllDone = () => {
    // get original todos 
    const {todos} = this.state
    // filter all true
    const newTodos = todos.filter((todoObj) => {
      return !todoObj.done
    })
    // update state
    this.setState({todos:newTodos})
  }

  render() {
    const {todos} = this.state
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header addTodo={this.addTodo}/>
          <List todos={todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo}/>
          <Footer todos={todos} checkAllTodo={this.checkAllTodo} clearAllDone={this.clearAllDone}/>
        </div>
      </div>
    );
  }
}
