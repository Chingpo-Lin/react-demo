import React, { Component } from 'react';

export default class Count extends Component {

    state = {count:0}

    // add 
    increment = () => {
        // get user input
        const {value} = this.selectedNumber
        // get original count 
        const {count} = this.state
        // set state
        this.setState({count:count+parseInt(value)})
    }

    // decrease
    decrement = () => {
        // get user input
        const {value} = this.selectedNumber
        // get original count 
        const {count} = this.state
        // set state
        this.setState({count:count-parseInt(value)})
    }

    // add if odd
    incrementIfOdd = () => {
        // get user input
        const {value} = this.selectedNumber
        // get original count 
        const {count} = this.state
        // add if count is odd 
        if (count % 2 !== 0) {
            this.setState({count:count+parseInt(value)})
        }
    }

    // add async
    incrementAsync = () => {
         // get user input
         const {value} = this.selectedNumber
         // get original count 
         const {count} = this.state
         setTimeout(() => {
            this.setState({count:count+parseInt(value)})
         },500)
    }

    render() {
        return (
            <div style={{margin:"auto", width: "50%"}}> 
                <h1>current sum: {this.state.count}</h1>
                <select ref={c => this.selectedNumber = c}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>&nbsp;&nbsp;
                <button onClick={this.increment}>+</button>&nbsp;&nbsp;
                <button onClick={this.decrement}>-</button>&nbsp;&nbsp;
                <button onClick={this.incrementIfOdd}>if odd add</button>&nbsp;&nbsp;
                <button onClick={this.incrementAsync}>async add</button>&nbsp;&nbsp;
            </div>
        );
    }
}
