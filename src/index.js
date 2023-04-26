import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { BrowserRouter } from "react-router-dom"
import { createLogger } from "redux-logger";
import { memur } from "./reducer";
import logger from 'redux-logger';
const root = ReactDOM.createRoot(document.getElementById('root'));

const depo = createStore(memur, applyMiddleware(logger));

root.render(
  <BrowserRouter>
     <Provider store={depo}>
    <App />
  </Provider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
