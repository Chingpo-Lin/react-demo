// import react library
import React from 'react'
// import reactDOM
import ReactDOM from 'react-dom/client'
// import app
import App from './App'
// import store
import store from './redux/store'
// import provider
import { Provider } from 'react-redux'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  /* here need use provider wrap app, to let all descendants accept store */
  <React.StrictMode>
    <Provider store={store}>
      <App/>
    </Provider>
  </React.StrictMode>
);

// store.subscribe(()=> {
//   root.render(
//     <React.StrictMode>
//         <App/>
//     </React.StrictMode>
//   );
// })