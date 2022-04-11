import React from 'react';
import styled from "styled-components";
import { Link } from "react-router-dom";

const UseNav = () => {
  return (
    <>
    <Header>
     <h1>TruShaadi.com</h1>
     <h6>Free Membership</h6>
    </Header>
    <NavBar>
        <Nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/signup">Register</Link>
        <Link to="/login">Login</Link>
        </Nav>
        <Avtar>
        <Link>Help</Link>
        </Avtar>
      </NavBar>
    
    </>
  )
}

export default UseNav;
const Header = styled.div`
display:flex;
justify-content:space-around;
margin:12px;
> h1 {
    font-family:romon
}
`
const NavBar = styled.div`
display: flex;
justify-content: space-around;
background-color:#FFA500;
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 5px;
`;
const Nav = styled.div`
> a {
  color: white;
    text-decoration: none;
    padding: 15px;
    font-size: 16px;
    font-weight: 400;
    line-height:50px;
    font-weight: 700;
    font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
}`
const Avtar = styled.div`
> a {
  color: white;
    text-decoration: none;
    padding: 15px;
    font-size: 16px;
    font-weight: 400;
    line-height:50px;
    font-weight: 700;
    font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
}
`
