// introduce react library
import React from 'react'
// introduce reactDOM
import ReactDOM from 'react-dom/client'
// import browser router
import { BrowserRouter } from 'react-router-dom';
// introduce app
import App from './App'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </React.StrictMode>
);