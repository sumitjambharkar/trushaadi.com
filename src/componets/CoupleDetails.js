import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Footer from "./Footer";

const CoupleDetails = () => {
  return (
    <>
      <Header>
        <h1>Trushaddi.com</h1>
      </Header>
      <NavBar>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Register</Link>
      </NavBar>
      <Details className="container">
        <Link to="/couple">Featured Success Stories</Link>
        <Link to="/video">Videos Stories</Link>
        <Link to="/tellus">Tell Us Your Story</Link>
      </Details>
      <Welcome className="container">
        <h1>Welcome to Shaadi Pride.</h1>
        <p>This is where we celebrate Shaadi.com Success Stories.</p>
      </Welcome>
      <Head className="container">
        <h1>Vaibhav & Vishaka</h1>
        <p>15 December 2022</p>
        <img
          src="https://img.shaadi.com/success-story/2SH09514809-hSH27371565-big.jpg"
          alt=""
        />
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit, iusto
          culpa saepe debitis repellendus odio ipsa nesciunt veniam vitae hic
          ipsam, quod provident odit beatae assumenda reiciendis omnis. Magni,
          eligendi? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
          quae officiis alias praesentium quas cum eligendi maiores quod quaerat
          iusto illum minima tenetur, vel architecto nihil distinctio earum sed
          aliquid.
        </p>
      </Head>
      <Footer/>
    </>
  );
};

export default CoupleDetails;
const Header = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 12px;
  > h1 {
    font-family: romon;
  }
`;
const NavBar = styled.div`
  display: flex;
  justify-content: space-evenly;
  background-color: red;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  > a {
    color: white;
    text-decoration: none;
    padding-top: 6px;
    padding-bottom: 6px;
    display: flex;
    justify-content: center;
    justify-items: center;
    font-weight: 700;
    font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  }
`;
const Details = styled.div`
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  display: flex;
  justify-content: start;
  margin-top: 24px;
  a {
    color: black;
    text-decoration: none;
    padding: 16px;
    display: flex;
    font-weight: 700;
    font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  }
  a:active {
    color: red;
  }
`;
const Welcome = styled.div`
  padding: 24px;
  > h1 {
    text-align: center;
    color: #72727d;
  }
  > p {
    text-align: center;
    color: #72727d;
  }
`;
const Head = styled.div`
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  width: auto;
  margin-bottom: 40px;
  > h1 {
    padding: 24px;
    color: darkcyan;
  }
  > p {
    padding: 24px;
    color: gray;
  }
  > img {
    padding: 24px;
    align-items: center;
  }
`;
