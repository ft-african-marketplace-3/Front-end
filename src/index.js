
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { StyledEngineProvider } from '@mui/material/styles';
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "./Components/reducers/Index";
import { BrowserRouter as Router } from "react-router-dom";


const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// const store = createStore(reducer)


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
