/*
    generate action object for count component
*/
import {INCREMENT, DECREMENT} from "./constant"

export const createIncrementAction = data => ({type:INCREMENT,data})
export const createDecrementAction = data => ({type:DECREMENT,data})



