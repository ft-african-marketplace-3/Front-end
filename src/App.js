import React from "react"
import styled from "styled-components"
import { Route, Switch } from "react-router-dom"
import Contact from "./Components/Contact"
import NavBar from "./Components/NavBar"
import Home from "./Components/Home"
import About from "./Components/About"
// import SignUp from "./Components/SignUp"
// import Login from "./Components/Login"

export default function App() {
  return (
    <StyledApp>
      <NavBar />
      <Switch>
        <Route path={"/about"} component={About} />
        {/*<Route path={"/signup"} component={}/>
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
