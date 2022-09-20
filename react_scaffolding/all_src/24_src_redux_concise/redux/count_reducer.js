/*
    1. used for create a reducer serve for Count component. reducer is function
    2. reducer function will accept two params: preState, action
*/

const initState = 0 // initialize state

export default function countReducer(preState=initState,action) {
    // get type and data from action
    const {type, data} = action
    // type decide how to change data
    switch (type) {
        case 'increment': // if add 
            return preState + data
        case 'decrement': // if minus
            return preState - data
        default:
            return preState;
    }
}

