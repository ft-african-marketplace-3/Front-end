import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { StyledEngineProvider } from '@mui/material/styles';
import {BrowserRouter as Router} from 'react-router-dom'

ReactDOM.render(
  <StyledEngineProvider injectFirst>  
  <React.StrictMode>
    <Router>
    <App />
    </Router>
  </React.StrictMode>
  </StyledEngineProvider>  ,
  document.getElementById('root')
);


