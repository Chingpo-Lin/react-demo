/*
    generate action object for count component
*/
import {INCREMENT, DECREMENT} from "./constant"

// sync action means action value is object
export const createIncrementAction = data => ({type:INCREMENT,data})
export const createDecrementAction = data => ({type:DECREMENT,data})
// async action means action value is function
// call sync action incide asyn action, async action is not necessary
export const createIncrementAsyncAction = (data,time) => {
    return (dispatch) => {
        setTimeout(() => {
            // function
            dispatch(createIncrementAction(data))
        },time)
    }
}



