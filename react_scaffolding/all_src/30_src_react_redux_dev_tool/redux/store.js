/*
    used for export store object, store object is unique in whole app
*/
// import createStore, use for create redux main store objec
import {legacy_createStore as createStore,applyMiddleware,combineReducers} from 'redux'
// import reducer for count component
import countReducer from './reducers/count'
// import reducer for person component
import personReducer from './reducers/person'
// import redux-thunk, used for support async action
import thunk from 'redux-thunk'
// import redux-devtools-extension
import {composeWithDevTools} from 'redux-devtools-extension'

// combine all reducer to form a combination
const allReducer = combineReducers({
    sum:countReducer, 
    people:personReducer
})

// export store
export default createStore(allReducer,composeWithDevTools(applyMiddleware(thunk)))