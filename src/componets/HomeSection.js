import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import Footer from './Footer';
import { useDispatch, useSelector } from 'react-redux';
import {logout} from './userSlice';
import { auth } from './firebase';
import { useHistory } from 'react-router-dom';
import {selectUser} from './userSlice';


const HomeSection = () => {
  const user = useSelector(selectUser)
  const dispatch = useDispatch()
  const history = useHistory()
  const handalLogout =() => {
    dispatch(logout());
    auth.signOut()
    history.push('/')
  }
  return (
    <>
    <Header>
        <h1>Trushaddi.com</h1>
        <h6>Free Membership</h6>
    </Header>
    <NavBar>
        <Nav>
        <Link to="/home/dashbord">MY ACCOUNT</Link>
        <Link>MY MATCHES</Link>
        <Link>MESSAGE</Link>
        <Link>HELP</Link>
        </Nav>
        <Avtar>
        <Link>{user.email}</Link>
        <button onClick={handalLogout}>Logout</button>
        </Avtar>
      </NavBar>
      <h3 style={{textAlign:"center",padding:"40px",backgroundColor:" #ebdcdc"}}>Members Looking For Me 418</h3>
      <Section>
      <Card>
        <img src="https://dynamic.matrimonialsindia.com/photon/dir_27/805970/W/513125-jn7XG4NsPG.jpg" alt="im"/>
        <h6>mnayuri pawar</h6>
        <span>ugsgjgsh</span>
        <span>fdjhklhjv</span>
        <button><Link to="/home/dashbord/view">Send Message</Link></button>
      </Card>
      <Card>
        <img src="https://dynamic.matrimonialsindia.com/photon/dir_27/805970/W/513125-jn7XG4NsPG.jpg" alt="im"/>
        <h6>mnayuri pawar</h6>
        <span>ugsgjgsh</span>
        <span>fdjhklhjv</span>
        <button><Link to="/home/dashbord/view">Send Message</Link></button>
      </Card>
      <Card>
        <img src="https://dynamic.matrimonialsindia.com/photon/dir_27/805970/W/513125-jn7XG4NsPG.jpg" alt="im"/>
        <h6>mnayuri pawar</h6>
        <span>ugsgjgsh</span>
        <span>fdjhklhjv</span>
        <button><Link to="/home/dashbord/view">Send Message</Link></button>
      </Card>
      <Card>
        <img src="https://dynamic.matrimonialsindia.com/photon/dir_27/805970/W/513125-jn7XG4NsPG.jpg" alt="im"/>
        <h6>mnayuri pawar</h6>
        <span>ugsgjgsh</span>
        <span>fdjhklhjv</span>
        <button><Link to="/home/dashbord/view">Send Message</Link></button>
      </Card>
      </Section>
      <Footer/>
    </>
  )
}

export default HomeSection;
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
const Section = styled.div`
padding: 46px;
background-color: #ebdcdc;
display: flex;
justify-content:center;
flex-wrap: wrap;
background-color:#ebdcdc;`
const Card =styled.div`
> img {
  width:224px;
}
display:flex;
justify-content: start;
flex-direction: column;
padding:12px;
margin:6px;
box-shadow: rgba(0, 0, 0, 0.35) 0px 2px 2px;
width:247px;
background-color:white;
> button {
padding: 4px;
background-color:#FFA500;
color: white;
border: 1px solid #FFA500;
margin: 4px;
}
> button :hover {
  color: red;
}
> button a {
  color:white;
  text-decoration:none;
}
`