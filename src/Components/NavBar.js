import React from "react";
import { NavLink } from 'react-router-dom';

import styled from "styled-components"


export default function NavBar() {
    return (
      <StyledNav>
              <NavLink to="/" className={"left"}>
              </NavLink>
              <div className={"right"}>
              <NavLink to="/about">About Us</NavLink>  
              <NavLink to="/login">Login</NavLink>
              <NavLink to="/signup">Sign Up</NavLink>
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
  width: 16%;
  height: 7vh;
  background-image: url("/images/fm.jpg");
  background-size: cover;
  margin-bottom: 1%;
  }
  .right{
      display: flex;
      justify-content: flex-end;
      align-items: center;
      width: 75%;
      height: 7vh;
    a{
        text-decoration: none;
        color: black;
        border: 1px solid gray;
        border-radius: 1rem;
        margin: 0 20px;
        padding: 5px 10px;
        background: rgba(245, 245, 245, 0.6);
    }
  }
`
