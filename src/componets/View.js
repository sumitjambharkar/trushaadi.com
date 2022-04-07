import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import Footer from './Footer';


const View = () => {
  return (
    <>
    <Header>
        <h1>Trushaddi.com</h1>
        <h6>Free Membership</h6>
    </Header>
    <NavBar>
        <Nav>
        <Link to="/home/dashbord">MY ACCOUNT</Link>
        <Link to="">MY MATCHES</Link>
        <Link to="">MESSAGE</Link>
        <Link to="">HELP</Link>
        </Nav>
        <Avtar>
        <Link to="">Welcome Sumit Jambharkar</Link>
        </Avtar>
      </NavBar>
      <ProfileSection>
          <ImageSection>
              <CardImage>
               <img src='https://dynamic.matrimonialsindia.com/photon/dir_27/805970/W/513125-jn7XG4NsPG.jpg' alt=''/>
              </CardImage>
              <ImageDetails>
                      <h1>sumit jamarffffffffffffffffffffffffffffffm</h1>
              </ImageDetails>
         </ImageSection>
         <AllDetails>
             <h1>kjhfshfshfhhhhk</h1>
         </AllDetails>
      </ProfileSection>
      <Footer/>
    </>
  )
}

export default View;
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
    font-size: 15px;
    font-weight: 400;
    line-height:50px;
    /* font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif; */
}`
const Avtar = styled.div`
> a {
  color: white;
    text-decoration: none;
    padding: 15px;
    font-size: 15px;
    font-weight: 400;
    line-height:50px;
    /* font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif; */
}
`
const ProfileSection = styled.div`
display: flex;
justify-content:start;
justify-items:start;
flex-direction: column;
background-color:#ebdcdc;`
const ImageSection = styled.div`
display: flex;
justify-content:center;
flex-wrap:wrap;`
const CardImage = styled.div`
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 5px;
background-color:white;
padding:12px;
margin:12px;
> img {
    width: 250px;
}`
const ImageDetails = styled.div`
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 5px;
width:600px;
background-color:white;`
const AllDetails = styled.div``
