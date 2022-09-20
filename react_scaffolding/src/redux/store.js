/*
    used for export store object, store object is unique in whole app
*/
// import createStore, use for create redux main store objec
import {legacy_createStore as createStore,applyMiddleware} from 'redux'
// import redux-thunk, used for support async action
import thunk from 'redux-thunk'
// import redux-devtools-extension
import {composeWithDevTools} from 'redux-devtools-extension'
// import combined reducer
import reducers from './reducers'

// export store
export default createStore(reducers,composeWithDevTools(applyMiddleware(thunk)))