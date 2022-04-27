import React, { useState,useEffect } from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import Footer from './Footer';
import UseNav from './UseNav';
import { db } from './firebase';
import { Avatar } from '@mui/material';
import { useSelector } from "react-redux";
import { selectUser } from "./userSlice";

const HomeSection = () => {

  function calculate_age(dob) { 
    var diff_ms = Date.now() - dob.getTime();
    var age_dt = new Date(diff_ms); 
  
    return Math.abs(age_dt.getUTCFullYear() - 1970);
  }
  const user = useSelector(selectUser)
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
          {doc.data.gender ==="Female" || doc.data.gender !=="Male"? 
          <> {doc.data.displayName===user.displayName ? 
            null :
            <Card>
            <Avatar src={doc.data.image} sx={{width:224,height:250}} variant="square"/>
            <span style={{textTransform: 'capitalize'}}>{doc.data.displayName}</span>
            <span style={{textTransform: 'capitalize'}}>{doc.data.gender}</span>
            <span>{calculate_age(new Date(doc.data.birth))}</span>
            <button><Link to={`/view/${doc.id}`}>Send Message</Link></button>
            </Card>
            }
            </> : null
          }
          </>
        )
      })}
      </Section>
      <Footer/>
    </>
  )
}

export default HomeSection;

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