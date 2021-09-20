import React from "react";
import { NavLink } from 'react-router-dom';
import logo from "./Assets/fm.jpg"
import smallLogo from "./Assets/smallfm.png"

import styled from "styled-components"



export default function NavBar() {
    return (
      <StyledNav>
              <NavLink to="/" className={"left"}>
                <img src={logo} alt={"Field market logo"} className={"logoBig"}/>
                <img src={smallLogo} alt={"Field market logo"} className={"logoSmall"}/>
              </NavLink>
              <div className={"right"}>   
              <NavLink to="/about">ABOUT</NavLink>  
              <NavLink to="/contact">CONTACT</NavLink>
              <NavLink to="/login">LOGIN</NavLink>
              </div>
      </StyledNav>
    );
  }

  const StyledNav = styled.div `
  position: -webkit-sticky;
  position: sticky;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 7vh;
  background-color: white ;
  box-shadow: 0 5px 10px 5px rgba(50, 50, 50, 1);
  .left{
    display: flex;
    justify-content: center;
    align-items: center;
  width: 16%;
  height: 7vh;
  img{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 5vh;
  }
  .logoSmall{
   display: none;
}

@media only screen and (max-width: 1000px){ //some value
   .logoBig{
     display: none;
   }

   .logoSmall{
     display: block;
   }
}
  }
  .right{
      display: flex;
      justify-content: flex-end;
      align-items: center;
      width: 75%;
      height: 7vh;
    a{
        text-decoration: none;
        font-weight: bolder;
        color: black;
        margin: 0 20px;
        padding: 5px 10px;
    }
    a:hover{
      color: chocolate;
    }
  }
`
