import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import Footer from './Footer';
import UseNav from './UseNav';


const View = () => {
  return (
    <>
    <UseNav/>
      <ProfileSection>
          <ImageSection>
              <CardImage>
               <img src='https://dynamic.matrimonialsindia.com/photon/dir_27/805970/W/513125-jn7XG4NsPG.jpg' alt=''/>
              </CardImage>
              <ImageDetails>
                <h3>Sarika Motak</h3>
                <hr></hr>
                {/* <pre> */}
                <p>       <span>27 year</span>                         <span>Not Specified</span></p>
                <p>       <span>Never Married</span>                   <span>Not Specified</span></p>
                <p>       <span>Tamil</span>                           <span>Not Specified</span></p>
                <p>       <span>Hindu, Bariman</span>                  <span>Lives in Canada</span></p>
                {/* </pre> */}
              </ImageDetails>
         </ImageSection>
      </ProfileSection>
      <AllDetails>
             <Details className='container'>
               <h1>Details of Profile</h1>
              <Box>
              <h3>About</h3>
              <span>I am currently living in uk. I am a smart and dynamic girl who respects her culture very much. I belong to a simple marathi family.</span>
              </Box>
              <Box>
              <h3>Basic Info</h3>
              <Agent>
              <First>
              <li>Gender</li>  
              <li>Female</li>
              </First>
              <First>
              <li>Caste</li>
              <li>Bhandari</li>
              </First>
              </Agent>
              </Box>
              <Box><h3>Lifestyle and Intrests</h3>
              <Agent>
              <First>
              <li>Gender</li>  
              <li>Female</li>
              </First>
              <First>
              <li>Caste</li>
              <li>Bhandari</li>
              </First>
              </Agent>
              </Box>
             <Box><h3>Education and profession</h3>
             <Agent>
              <First>
              <li>Gender</li>  
              <li>Female</li>
              </First>
              <First>
              <li>Caste</li>
              <li>Bhandari</li>
              </First>
              </Agent>
             </Box>
             <Box><h3>Family Details</h3>
             <Agent>
              <First>
              <li>Gender</li>  
              <li>Female</li>
              </First>
              <First>
              <li>Caste</li>
              <li>Bhandari</li>
              </First>
              </Agent>
             </Box>
             <Box><h3>Lifestyle and Intrests</h3>
             <Agent>
              <First>
              <li>Gender</li>  
              <li>Female</li>
              </First>
              <First>
              <li>Caste</li>
              <li>Bhandari</li>
              </First>
              </Agent>
             </Box>
             </Details>
         </AllDetails>
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
display:flex;
justify-content:center;
background-color:#ebdcdc;`
const ImageSection = styled.div`
display: flex;
justify-content:center;
flex-wrap:wrap;
`
const CardImage = styled.div`
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 5px;
background-color:white;
padding:12px;
margin:12px;
> img {
    width:200px;
}`
const ImageDetails = styled.div`
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 5px;
width:450px;
margin-top:28px;
padding:12px;
padding-right: 80px;
background-color:white;
> p {
  display:flex;
  justify-content:space-around;
}
@media (max-width:600px) {
    width:230px;
  }
`
const AllDetails = styled.div`
display:flex;
justify-content:start;
padding:30px;
background-color:#ebdcdc;`
const Details = styled.div`
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 5px;
background-color:white;
width:65%;
@media (max-width:600px) {
    width:100%;
  }
> h1 {
  text-align:center;
}`
const Box = styled.div`
padding:24px;
`
const Agent = styled.div`
display:flex;
justify-content:space-around;
`
const First = styled.div`
padding-left:48px;
> li {
  list-style:none;
}
`
