import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


const Setting = () => {
   
  return (
    <>
    <Section>
    <First>
    <li><Link style={{color:"black",fontWeight:"600"}}>Setting</Link></li>
    <li><Link to="my-account">Account Setting</Link></li>
    <li><Link to="my-contacts">Contact Filters</Link></li>
    <li>Email / SMS Alerts</li>
    <li><Link to="my-policys">Policy Options</Link></li>
    <li><Link to="delete">Hide / Delete Profile</Link></li>
    </First>
    </Section>
    </>
  )
}

export default Setting;
const Section = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: start;`
const First = styled.div`
margin:40px;
>  li {
    width: 210px;
    list-style:none;
    border: 1px solid #dfe0e3;
    padding:4px;
    color:#72727d;
}
> li > a {
  text-decoration:none;
  color:#72727d;
}`