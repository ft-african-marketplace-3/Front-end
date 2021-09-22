
import React, { useState} from "react";
import { NavLink, useHistory } from 'react-router-dom';

import logo from "./Assets/fm.jpg"
import smallLogo from "./Assets/smallfm.png"

import styled from "styled-components"

export default function NavBar() {

  const history = useHistory();
  const [active, setActive] = useState(true)
  const isLoggedIn = localStorage.getItem("token");

  const handleAbout = (e) => {
    e.preventDefault();
    setActive(false)
    history.push("/about");

  }
  const handleContact = (e) => {
    e.preventDefault();
    setActive(false)
    history.push("/contact");
  }
  const handleLogin = (e) => {
    e.preventDefault();
    setActive(false)
    history.push("/login");
  }

  const handleRemove = (e) => {
    e.preventDefault();
    setActive(true)
    history.push("/");
  }

    return (
      <StyledNav>
              <NavLink to="/" className={"left"} onClick={handleRemove}>
                <img src={logo} alt={"Field market logo"} className={"logoBig"}/>
                <img src={smallLogo} alt={"Field market logo"} className={"logoSmall"}/>
              </NavLink>
              <div className={"right"}>   
              {active ? "" : <NavLink to="/"onClick={handleRemove}>HOME</NavLink>}
              {isLoggedIn ? <NavLink to="/listing">LISTING</NavLink>:<div></div> }
              { isLoggedIn ? <p>Welcome {localStorage.getItem("username")}</p>:<div></div>}
              <NavLink to="/about" onClick={handleAbout}>ABOUT</NavLink>  
              <NavLink to="/contact" onClick={handleContact}>CONTACT</NavLink>
              <NavLink to="/login" onClick={handleLogin}>LOGIN</NavLink>
              </div>
      </StyledNav>
    );
  }


const StyledNav = styled.div`
  position: -webkit-sticky;
  position: sticky;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 7vh;
  background-color: white;
  box-shadow: 0 5px 10px 5px rgba(50, 50, 50, 1);
  .left {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 16%;
    height: 7vh;
    img {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      height: 5vh;
    }
    .logoSmall {
      display: none;
    }

    @media only screen and (max-width: 1000px) {
      //some value
      .logoBig {
        display: none;
      }

      .logoSmall {
        display: block;
      }
    }
  }
  .right {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 75%;
    height: 7vh;
    a {
      text-decoration: none;
      font-weight: bolder;
      color: black;
      margin: 0 20px;
      padding: 5px 10px;
    }
    a:hover {
      color: chocolate;
    }
  }
`
