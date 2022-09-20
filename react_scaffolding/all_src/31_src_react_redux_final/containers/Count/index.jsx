import React, { Component } from 'react';
// import action object
import {
    increment,
    decrement,
    incrementAsync
} from '../../redux/actions/count'
// import connect for connect UI component&redux
import {connect} from 'react-redux'

// Define UI component
class Count extends Component {

    state = {carName:'bmw'}

    // add 
    increment = () => {
        // get user input
        const {value} = this.selectedNumber
        this.props.increment(value*1)
    }

    // decrease
    decrement = () => {
        // get user input
        const {value} = this.selectedNumber
        this.props.decrement(value*1)
    }

    // add if odd
    incrementIfOdd = () => {
        // get user input
        const {value} = this.selectedNumber
        if (this.props.count % 2 === 1) {
            this.props.increment(value*1)
        }
    }

    // add async
    incrementAsync = () => {
         // get user input
         const {value} = this.selectedNumber
         this.props.incrementAsync(value*1,1000)
    }

    render() {
        // console.log('UI component accept props is:', this.props)
        return (
            <div> 
                <h2>I am count component</h2>
                <h4>current sum: {this.props.count}, total people num:{this.props.peopleNum}</h4>
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
    state => ({count:state.sum,peopleNum:state.people.length}),
    // mapDispatchToProps normal way 
    // dispatch => ({
    //         // notify redux to execute add
    //         add:number => dispatch(createIncrementAction(number)),
    //         minus:number => dispatch(createDecrementAction(number)),
    //         addAsync:(number,time) => dispatch(createIncrementAsyncAction(number,time))
    //     })

    // mapDispatchToProps concise way 
    {
        increment,
        decrement,
        incrementAsync
    }
)(Count)
