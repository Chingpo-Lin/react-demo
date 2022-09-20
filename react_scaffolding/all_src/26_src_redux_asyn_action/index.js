// introduce react library
import React from 'react'
// introduce reactDOM
import ReactDOM from 'react-dom/client'
// introduce app
import App from './App'

import store from './redux/store'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
      <App/>
  </React.StrictMode>
);

store.subscribe(()=> {
  root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
  );
})