/*
    used for export store object, store object is unique in whole app
*/
// import createStore, use for create redux main store objec
import {legacy_createStore as createStore} from 'redux'
// import reducer for count component
import countReducer from './count_reducer'

export default createStore(countReducer)