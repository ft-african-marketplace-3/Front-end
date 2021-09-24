
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { StyledEngineProvider } from '@mui/material/styles';
import { Provider } from "react-redux";
import { createStore } from "redux";
import isLoggedInReducer from "./Components/reducers";

const store = createStore(
  isLoggedInReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


ReactDOM.render(
  <StyledEngineProvider injectFirst>  
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </StyledEngineProvider>  ,
  document.getElementById('root')
);
