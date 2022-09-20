import React, { Component } from 'react';
import Count from './containers/Count' // import count container component instead of UI
import Person from './containers/Person'  // import person container component instead of UI

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
