import React, { Component } from 'react';
// import action object
import {
    createIncrementAction,
    createDecrementAction,
    createIncrementAsyncAction
} from '../../redux/count_action'
// import connect for connect UI component&redux
import {connect} from 'react-redux'

// Define UI component
class Count extends Component {

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


/*
    1.return value pass to UI component as props {key:value}
    2.mapStateToProps used to pass state
 */
// const mapStateToProps = state => ({count:state})

// /*
//     1.return value pass to UI component as props {key:value}
//     2.mapDispatchToProps used to pass method that operate state
//  */
// const mapDispatchToProps = dispatch => (
//     {
//         // notify redux to execute add
//         add:number => dispatch(createIncrementAction(number)),
//         minus:number => dispatch(createDecrementAction(number)),
//         addAsync:(number,time) => dispatch(createIncrementAsyncAction(number,time))
//     }
// )

// create and export a count container component
export default connect(
    state => ({count:state}),
    // mapDispatchToProps normal way 
    // dispatch => ({
    //         // notify redux to execute add
    //         add:number => dispatch(createIncrementAction(number)),
    //         minus:number => dispatch(createDecrementAction(number)),
    //         addAsync:(number,time) => dispatch(createIncrementAsyncAction(number,time))
    //     })

    // mapDispatchToProps concise way 
    {
        add:createIncrementAction,
        minus:createDecrementAction,
        addAsync:createIncrementAsyncAction
    }
)(Count)
