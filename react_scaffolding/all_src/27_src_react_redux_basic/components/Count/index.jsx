import React, { Component } from 'react';

export default class Count extends Component {

    state = {carName:'bmw'}

    // add 
    increment = () => {
        // get user input
        const {value} = this.selectedNumber
        this.props.add(value*1)
    }

    // decrease
    decrement = () => {
        // get user input
        const {value} = this.selectedNumber
        this.props.minus(value*1)
    }

    // add if odd
    incrementIfOdd = () => {
        // get user input
        const {value} = this.selectedNumber
        if (this.props.count % 2 === 1) {
            this.props.add(value*1)
        }
    }

    // add async
    incrementAsync = () => {
         // get user input
         const {value} = this.selectedNumber
         this.props.addAsync(value*1,1000)
    }

    render() {
        // console.log('UI component accept props is:', this.props)
        return (
            <div style={{margin:"auto", width: "50%"}}> 
                <h1>current sum: {this.props.count}</h1>
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
