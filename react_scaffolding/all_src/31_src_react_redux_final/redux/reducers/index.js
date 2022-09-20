/*
    used for combine all reducer to a aggregation of reducers
*/
// import combine reducers, use to combine multiple reducer
import { combineReducers } from 'redux'
// import reducer for Count component
import sum from './count'
// import reducer for Person component
import people from './person'

// combine all reducer to form a combination
export default combineReducers({
    sum, 
    people
})
