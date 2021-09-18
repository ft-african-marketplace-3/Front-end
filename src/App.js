import React from "react";
import styled from "styled-components"

export default function App() {
  return (
    <StyledApp>
      <div className={"container"}>
        <nav className="navBar">
            <a href='https://mui.com/api/menu/' className={"logo"}></a>
            <div>
            <a>Login</a>
            <a>Sign Up</a>
            </div>
        </nav>
        <div className={"image"}>
            <a> Login</a>
        </div>
      </div>
    </StyledApp>
  );
}

const StyledApp = styled.div`
width: 100%;
height: auto;
.container{
  width: 100%;
  height: 100vh;
  background: black;
  /* background-image: url("images/banner.jpg"); */
  background-size: cover;
nav{
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 10vh;
  background-color: #D0957E ;
  box-shadow: 0px 5px 10px 5px #3E2D26;
}  
}
.logo{
  width: 5%;
  height:9vh;
  background-image: url("images/logo.png");
  background-size: cover;
}
.image{
  width: 100%;
  height: 65vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("images/banner.jpg");
  background-size: cover;
  a{
    width: 150px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(192, 145, 126, 0.8);
    border: 3px solid #3E2D26;
    transition: .2s ease;
  }
  a:hover{
    width: 110px;
    height: 55px;
    font-size: larger;
    filter: brightness(110%);
  }
}

`
