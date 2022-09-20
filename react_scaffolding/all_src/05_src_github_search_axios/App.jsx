import React, { Component } from 'react'
import './App.css'
import Search from './components/Search'
import List from './components/List'

export default class App extends Component {

  // initial state
  state = {
    users:[], // user initial empty array
    isFirst:true, // if first time open page
    isLoading:false, // if loading 
    err:'', // store request error msg
  } 

  updateAppState = (stateObj) => {
    this.setState(stateObj)
  }

  render() {

    return (
      <div className="container">
        <Search updateAppState={this.updateAppState}/>
        <List {...this.state}/>
      </div>
    )
  }
}
