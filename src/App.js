import React from "react";
import styled from "styled-components"
import { Route, Switch } from 'react-router-dom';

import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
// import SignUp from "./Components/SignUp"
import Login from "./Components/LoginPage/Login"
// import About from "./Components/About"

export default function App() {
  return (
    <StyledApp>
      <NavBar/>
      <Switch>
        {/* <Route path={"/about"} component={}/>
        <Route path={"/signup"} component={}/>*/}
        <Route path={"/login"} component={Login}/> 
        <Route path={"/"} component={Home}/>
      </Switch>
    </StyledApp>
  );
}

const StyledApp = styled.div`
width: 100%;
height: auto;
display: flex ;
flex-direction: column;
`
