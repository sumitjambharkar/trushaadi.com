import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";
import SmsIcon from '@mui/icons-material/Sms';

const Footer = () => {
  return (
    <>
    <FooterSection >
    <a href="https://api.whatsapp.com/send?phone=9833188536&text=Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20Varela%202." class="float" target="_blank">
    <SmsIcon style={{color:"#fff",fontSize:40}}/>
</a>
          <FirstDiv data-aos="zoom-in-right" data-aos-duration="1500">
          {/* <a><SmsIcon style={{color:"#fff",fontSize:40}}/></a> */}
           <h2>Marriageorbit.com</h2>
           <hr/>
           <p>Mere Jeevan Sathi</p>
          </FirstDiv>
          <SecandDiv data-aos="zoom-out-up" data-aos-duration="1500">
          <h2>About Us</h2>
          <hr/>
          <p><Link to="/about">About Marriageorbit.com »</Link></p>
          <p><Link to="/contact">Contact Us »</Link></p>
          <p><Link to="/sitemap">Sitemap »</Link></p>
          </SecandDiv>
          <ThirdDiv data-aos="zoom-in-left" data-aos-duration="1500">
          <h2>Information</h2>
          <hr/>
          <p><Link to="/">Terms of Use »</Link></p>
          <p><Link to="/privacy-policy">Privacy Policy »</Link></p>
          <p><a href="https://api.whatsapp.com/send?phone=9833188536&amp;text=Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20Varela%202." target="_blank">Help »</a></p>
          <p><Link to="/contact">Contact Us »</Link></p>

          </ThirdDiv>
      </FooterSection>
       <FooterDiv>
        <h1>
          © 1996-2022 Marriageorbit.com, The World's Leading Matchmaking Service™
        </h1>
        <h1>Created By Smart Deal And Investment</h1>
        </FooterDiv>
    </>
  )
}

export default Footer;
const FooterSection = styled.div`
 overflow: hidden;
  background-color:#2e2e2e;
  display: flex;
  justify-content:space-around;
  flex-wrap:wrap;
  .float{
    position:fixed;
    width:80px;
    height:80px;
    bottom:90px;
    right:28px;
    background-color:red;
    color:#FFF;
    border-radius:50px;
    text-align:center;
    font-size:30px;
    box-shadow: 2px 2px 3px #999;
    z-index:100;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .my-float{
    margin-top:16px;
  }
  
 `
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
  }
  >p:hover{
    transform: translate(25px);
  }
  >a {
  width: 80px;
  display: flex;
  border-radius: 50%;
  justify-content: center;
  height: 80px;
  align-items: center;
  background-color: red;
}
  `
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
    transition: 0.5s;
  }
  >p > a:hover{
    transform: translate(25px);
  }
  `
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
    transition: 0.5s;
  }
  >p > a:hover{
    transform: translate(25px);
  }
  `