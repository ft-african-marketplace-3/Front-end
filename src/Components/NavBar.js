import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";

import logo from "./Assets/fm.jpg";
import smallLogo from "./Assets/smallfm.png";

import styled from "styled-components";

export default function NavBar(props) {
  const history = useHistory();
  const [active, setActive] = useState(true);
  // let isLoggedIn = localStorage.getItem("token");

  const { logged } = props

  const handleLogOut = (e) => {
    localStorage.removeItem("token");
    localStorage.removeItem("message");
    localStorage.removeItem("username");
    history.push("/");
    window.location.reload(true);
  };

  const handleAbout = (e) => {
    e.preventDefault();
    setActive(false);
    history.push("/about");
  };
  const handleContact = (e) => {
    e.preventDefault();
    setActive(false);
    history.push("/contact");
  };
  const handleLogin = (e) => {
    e.preventDefault();
    setActive(false);
    history.push("/login");
  };

  const handleRemove = (e) => {
    e.preventDefault();
    setActive(true);
    history.push("/");
  };

  return (
    <StyledNav>
      <NavLink to="/" className={"left"} onClick={handleRemove}>
        <img src={logo} alt={"Field market logo"} className={"logoBig"} />
        <img
          src={smallLogo}
          alt={"Field market logo"}
          className={"logoSmall"}
        />
      </NavLink>
      <div className={"welcome"}>
        {logged ? <p>{localStorage.getItem("message")}</p> : <div></div>}
      </div>
      <div className={"right"}>
        {active ? (
          ""
        ) : (
          <NavLink to="/" onClick={handleRemove}>
            HOME
          </NavLink>
        )}
        {logged ? <NavLink to="/listing">LISTING</NavLink> : <div></div>}
        {logged ? <NavLink to="/listing/add-item">ADD ITEM</NavLink> : <div></div>}
        <NavLink to="/about" onClick={handleAbout}>
          ABOUT
        </NavLink>
        <NavLink to="/contact" onClick={handleContact}>
          CONTACT
        </NavLink>
        {logged ? (
          ""
        ) : (
          <NavLink to="/login" onClick={handleLogin}>
            LOGIN
          </NavLink>
        )}
        {logged ? (
          <NavLink to="/logout" onClick={handleLogOut}>
            LOGOUT
          </NavLink>
        ) : (
          <div></div>
        )}
        {/* <button onClick={handleTest}> Test</button> */}
      </div>
    </StyledNav>
  );
}
//color: ${props => props.darkMode ? white : black}

// const StyledNavLink = styled(NavLink)`

// &.active{

// }
// `

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
    width: 65%;
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
  .welcome {
    display: flex;
    justify-content: center;
  }
  p {
    font-size: 1.1rem;
    text-decoration: underline;
    font-weight: bold;
  }
`;
