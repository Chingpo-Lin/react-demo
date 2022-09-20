/*
    used for export store object, store object is unique in whole app
*/
// import createStore, use for create redux main store objec
import {legacy_createStore as createStore,applyMiddleware} from 'redux'
// import reducer for count component
import countReducer from './count_reducer'
// import redux-thunk, used for support async action
import thunk from 'redux-thunk'

export default createStore(countReducer,applyMiddleware(thunk))