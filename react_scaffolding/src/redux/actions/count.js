/*
    generate action object for count component
*/
import {INCREMENT, DECREMENT} from "../constant"

// sync action means action value is object
export const increment = data => ({type:INCREMENT,data})
export const decrement = data => ({type:DECREMENT,data})
// async action means action value is function
// call sync action incide asyn action, async action is not necessary
export const incrementAsync = (data,time) => {
    return (dispatch) => {
        setTimeout(() => {
            // function
            dispatch(increment(data))
        },time)
    }
}



