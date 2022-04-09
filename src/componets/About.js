import React from 'react';
import styled from 'styled-components';
import AboutImage from '../image/download.jpg';
import { Link } from 'react-router-dom';
import Footer from './Footer';

const About = () => {
  return (
    <>
    <Header>
        <h1>Trushaddi.com</h1>
        <h6>Free Membership</h6>
    </Header>
    <NavBar>
        <Nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link>Register</Link>
        <Link>Login</Link>
        </Nav>
        <Avtar>
        <Link>Help</Link>
        </Avtar>
      </NavBar>
    <AboutSection>
     <h1>About Us</h1>
     <Image>
         <img src={AboutImage}  alt='about'/>
     </Image>
     <p>
     Sangam is a matchmaking service created for parents who are looking for a life partner for their loved ones. Unlike other Matrimonial services, we focus on providing detailed family and background information to help you take the next step with confidence. With over 80+ community sites, you can find a match from your own community. Sangam is part of Shaadi.com (sometimes mis-spelt as Shadi), the World's No. 1 Matchmaking service.
     </p>
    </AboutSection>
    <Footer/>
    </>
  )
}

export default About;
const Header = styled.div`
display:flex;
justify-content:space-around;
margin:12px;
> h1 {
    font-family:romon
}
>p {
  
  
}`
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
}`
const AboutSection = styled.div`
display: flex;
justify-content: center;
flex-direction:column;
> h1 {
    margin:12px;
    text-align : center;
    font-family:roman;
    font-weight :700;
}
> p {
    margin : 12PX;
    text-align :center;
    font-weight :600;
    color : #8b7c7c;
    
}
`
const Image = styled.div`
display:flex;
justify-content:center;
>img {
    width:700px;
}`
