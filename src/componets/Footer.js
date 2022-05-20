import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
    <FooterSection>
          <FirstDiv>
           <h2>Marriageorbit.com</h2>
           <hr/>
           <p>Mere Jeevan Sathi</p>
          </FirstDiv>
          <SecandDiv>
          <h2>About Us</h2>
          <hr/>
          <p><Link to="/about">About Marriageorbit.com »</Link></p>
          <p><Link to="/contact">Contact Us »</Link></p>
          <p><Link to="/sitemap">Sitemap »</Link></p>
          </SecandDiv>
          <ThirdDiv>
          <h2>Information</h2>
          <hr/>
          <p><Link to="/">Terms of Use »</Link></p>
          <p><Link to="/privacy-policy">Privacy Policy »</Link></p>
          <p><Link to="/">Help »</Link></p>
          <p><Link to="/contact">Contact Us »</Link></p>

          </ThirdDiv>
      </FooterSection>
       <FooterDiv>
        <h1>
          © 1996-2022 Marriageorbit.com, The World's Leading Matchmaking Service™
        </h1>
        <h1>Created By Sumit Jambharkar</h1>
        </FooterDiv>
    </>
  )
}

export default Footer;
const FooterSection = styled.div`
  background-color:#2e2e2e;
  display: flex;
  justify-content:space-around;
  flex-wrap:wrap;
`;
const FooterDiv = styled.div`
background-color:#2a2424;
display:flex;
justify-content:space-around;
flex-wrap:wrap;
> h1 {
    font-size: 16px;
    padding: 24px 24px;
    color: white;
  }
  `
const FirstDiv = styled.div`
padding-top:20px;
color:white;
  > h2 {
    font-size: 24px;
    font-family: inherit;
    font-weight: 400;
  }
  >p{
    color:white;
    padding-bottom: 10px;
    display: block;
    transition: all 0.3s ease-in-out;
  }`
const SecandDiv = styled.div`
padding-top:20px;
color:white;
> h2 {
    font-size: 24px;
    font-family: inherit;
    font-weight: 400;
  }
  >p > a {
    color:#FFA500;
    padding-bottom:6px;
    display: block;
    transition: all 0.3s ease-in-out;
  }`
const ThirdDiv = styled.div`
padding-top:20px;
color:white;
> h2 {
    font-size: 24px;
    font-family: inherit;
    font-weight: 400;
  }
  >p > a {
    
    color:#FFA500;
    padding-bottom:6px;
    display: block;
    transition: all 0.3s ease-in-out;
  }`