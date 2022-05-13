import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import {logout,login} from './userSlice';
import { auth,db } from './firebase';
import { updateDoc, doc } from "firebase/firestore";
import { useHistory } from 'react-router-dom';
import {selectUser} from './userSlice';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import Avatar from '@mui/material/Avatar';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import HttpsIcon from '@mui/icons-material/Https';
import SettingsIcon from '@mui/icons-material/Settings';


const UseNav = () => {
  const [show, setShow] = useState('')
  
  const user = useSelector(selectUser)
  const dispatch = useDispatch()
  const history = useHistory()
  useEffect(() => {
    auth.onAuthStateChanged(userAuth=>{
      if(userAuth){
        dispatch(login({
        uid:userAuth.uid,
        email:userAuth.email,
        displayName :userAuth.displayName,
        isOnline:true
        }))
      }else{
        dispatch(logout({
          isOnline:false
        }))
      }
    })
    
  }, [])

  const handalLogout = async() => {
    dispatch(logout());
    await updateDoc(doc(db, "users", auth.currentUser.uid), {
      isOnline: false,
    });
    auth.signOut()
    history.push('/')
  }
  return (
    <>
    <Header>
     <h1>TruShaadi.com</h1>
     <h6>Free Membership</h6>
    </Header>
    <NavBar>
        <Nav>
        <Link to="/">HOME</Link>
        {
        !user ? 
        <>
        <Link to="/about">About</Link>
        <Link to="/signup">Register</Link>
        <Link to="/login">Login</Link>
        </>
        :
        <>
        <Link to="/">MATCHES</Link>
        <Link to="/my-profile">ACCOUNT</Link>
        </>
        } 
        
        </Nav>
        <Avtars>
          {
            ! user ? 
            <Link to="/">Help</Link>
            :
            <>
            <Link className='name' onClick={()=>setShow(!show)}>{user.displayName}</Link>
            <Link style={{textTransform: 'capitalize'}} onClick={()=>setShow(!show)}>
            <button><Avatar style={{textTransform: 'capitalize'}}>{user.displayName?.[0]}</Avatar></button>
            <ArrowDropDownIcon/>
            </Link>
            {show ? 
            <Dash>
            <li to="/my-profile"><AccountCircleIcon/><Link to="/my-profile">My Profile</Link></li>
            <li onClick={handalLogout}><LogoutIcon/><Link>Logout</Link></li>
            <li to="/my-profile"><SettingsIcon/><Link to="/">Account Setting</Link></li>
            <li><HttpsIcon/><Link to="">Privacy Options</Link></li>
           </Dash>
           : ""
            }
            </>
          }
        </Avtars>
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
padding: 8px;
display: flex;
justify-content: space-around;
background-color:#FFA500;
`;
const Nav = styled.div`
> a {
  color: white;
    text-decoration: none;
    padding: 15px;
    font-size: 14px;
    line-height:50px;
    font-weight:600;
    

}
@media (max-width:500px) {
  a {padding:5px;
  }
}`
const Avtars = styled.div`
> a {
  color: white;
    text-decoration: none;
    font-size: 16px;
    font-weight: 400;
    line-height:50px;
    font-weight: 700;
    font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  }
  > a > button {
    margin:4px;
    border:none;
    border-radius:50%;
  }
  @media (max-width:500px) {
    .name {
      display: none;
    }
  }
`
const Dash = styled.div`
z-index:1;
display:flex;
justify-content:start;
flex-wrap:wrap;
background-color:#fff;
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 5px;
border-radius:2px;
position:absolute;
width:340px;
height:115px;
padding-top:16px;
margin-left:-100px;
> li {
    width: 149px;
    margin: 10px;
    text-decoration: none;
    list-style: none;
    color: gray;
}
> li >a {
  text-decoration: none;
    list-style: none;
    color: gray;
}
> .MuiSvgIcon-root {
  width: 20px;
  color: gray;
  margin:5px;
}
@media (max-width:500px) {
z-index:1;
display:flex;
justify-content:start;
flex-direction:column;
flex-wrap:wrap;
background-color:#fff;
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 5px;
border-radius:2px;
position:absolute;
width:170px;
height:200px;
margin-left:-100px;
}

`
