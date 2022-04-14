import React, { useState,useEffect } from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import Footer from './Footer';
import UseNav from './UseNav';
import { db } from './firebase';

const HomeSection = () => {
  
  function calculate_age(dob) { 
    var diff_ms = Date.now() - dob.getTime();
    var age_dt = new Date(diff_ms); 
  
    return Math.abs(age_dt.getUTCFullYear() - 1970);
  }

  const [personData, setPersonData] = useState([])
  useEffect(() => {
    db.collection("users").onSnapshot(snapshot => {
      setPersonData(snapshot.docs.map((doc) => ({
        id: doc.id,
        data : doc.data()
      })))
    })  
    
    return () => {
      
    }
  }, [])
  
  return (
    <>
     <UseNav/>
      <h3 style={{textAlign:"center",padding:"40px",backgroundColor:" #ebdcdc"}}>Members Looking For Me 418</h3>
      <Section>
      {personData.map((doc)=>{
        return (
          <>
          <Card>
        <img src={doc.data.image} alt="im"/>
        <span>{doc.data.displayName.toUpperCase()}</span>
        <span>{doc.data.gender.toUpperCase()}</span>
        <span>{calculate_age(new Date(doc.data.birth))}</span>
        <button><Link to={`/view/${doc.id}`}>Send Message</Link></button>
      </Card>
          </>
        )
      })}
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