import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import store from "./store";
import App from './App';
import {Provider} from "react-redux"
import { BrowserRouter } from "react-router-dom";
import ContextProvider from "./components/context/ContextProvider"

ReactDOM.render(
  <ContextProvider>
     <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
     </Provider>
     </ContextProvider>
 
  ,
  document.getElementById('root')
);