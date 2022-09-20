import React, { Component } from 'react';
// umport store for get state saved in redux
import store from '../../redux/store'

export default class Count extends Component {

    state = {carName:'bmw'}

    // componentDidMount() {
    //     // check if redux state change, if change, then render
    //     store.subscribe(() => {
    //         this.setState({})
    //     })
    // }

    // add 
    increment = () => {
        // get user input
        const {value} = this.selectedNumber
        // notify redux to add value 
        store.dispatch({type:'increment',data:value*1})
    }

    // decrease
    decrement = () => {
        // get user input
        const {value} = this.selectedNumber
        // notify redux to minus value 
        store.dispatch({type:'decrement',data:value*1})
    }

    // add if odd
    incrementIfOdd = () => {
        // get user input
        const {value} = this.selectedNumber
        // get original count 
        const count = store.getState()
        // add if count is odd 
        if (count % 2 !== 0) {
            store.dispatch({type:'increment',data:value*1})
        }
    }

    // add async
    incrementAsync = () => {
         // get user input
         const {value} = this.selectedNumber
         
         setTimeout(() => {
            store.dispatch({type:'increment',data:value*1})
         },500)
    }

    render() {
        return (
            <div style={{margin:"auto", width: "50%"}}> 
                <h1>current sum: {store.getState()}</h1>
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
