import React from "react"
import styled from "styled-components"
import { Route, Switch } from "react-router-dom"
import Contact from "./Components/Contact"
import NavBar from "./Components/NavBar"
import Home from "./Components/Home"
// import SignUp from "./Components/SignUp"
import LogIn from './Components/LoginPage/LoginContainter.js'
// import About from "./Components/About"

export default function App() {
  return (
    <StyledApp>
      <NavBar />
      <Switch>
        {/* <Route path={"/about"} component={}/>

        <Route path={"/signup"} component={}/>
        <Route path={"/login"} component={}/> */}
        <Route path={"/contact"} component={Contact} />
        <Route path={"/"} component={Home} />

      </Switch>
    </StyledApp>
  )
}

const StyledApp = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
`
