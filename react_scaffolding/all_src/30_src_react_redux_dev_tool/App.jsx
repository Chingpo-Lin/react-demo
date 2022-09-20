import React, { Component } from 'react';
import Count from './containers/Count'
import Person from './containers/Person'

export default class App extends Component {
  render() {
    return (
      <div style={{margin:"auto", width: "50%"}}> 
        <Count/>
        <hr/>
        <Person/>
      </div>
    );
  }
}
