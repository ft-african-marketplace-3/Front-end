import React from "react"
import styled from "styled-components"
import { Route, Switch } from "react-router-dom"
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute"

import Contact from "./Components/Contact"
import NavBar from "./Components/NavBar"
import Home from "./Components/Home"
import SignUp from "./Components/SignUp/SignUpContainer"
import LogIn from "./Components/LoginPage/LoginContainer.js"
import ItemPage from "./Components/newItems/ItemPage"
import NewListing from "./Components/newListings/newListingContainer"
import Mission from "./Components/Mssion"
import About from "./Components/About"

export default function App() {

  let isLoggedIn = localStorage.getItem("token");

  return (
    <StyledApp>
      <NavBar logged={isLoggedIn} />
      <Switch>
        <Route exact path="/listing/add-item" component={NewListing} />
        <PrivateRoute exact path="/listing" component={ItemPage} />
        <Route exact path="/mission" component={Mission} />
        <Route exact path={"/signup"} component={SignUp} />
        <Route exact path={"/login"} component={LogIn} />
        <Route path={"/about"} component={About} />
        <Route exact path={"/login"} logged={isLoggedIn} component={LogIn} />
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
  align-items: center;
`
