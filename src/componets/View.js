import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Footer from './Footer';
import UseNav from './UseNav';
import { useParams } from 'react-router-dom';
import { db } from './firebase';
import { Link } from 'react-router-dom';



const View = (props) => {

  function calculate_age(dob) {
    var diff_ms = Date.now() - dob.getTime();
    var age_dt = new Date(diff_ms);

    return Math.abs(age_dt.getUTCFullYear() - 1970);
  }
  const { Id } = useParams()
  const [user, setUser] = useState([])
  const [personData, setPersonData] = useState([])
  const [personDataFirst, setPersonDataFirst] = useState([])
  const [personDataSecand, setPersonDataSecand] = useState([])
  

  useEffect(() => {
    if (Id) {
      db.collection("users").doc(Id).onSnapshot(snapshot => {
        setPersonData(snapshot.data())
        console.log(snapshot.data());
      })
      db.collection("users")
        .doc(Id)
        .collection("userdata1")
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            setPersonDataFirst(doc.data())
          });
        });
      db.collection("users")
        .doc(Id)
        .collection("userdata2")
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            setPersonDataSecand(doc.data())
          });
      });
      db.collection("users").onSnapshot(snapshot => {
        setUser(snapshot.docs.map((doc) => ({
          id: doc.id,
          data : doc.data()
        })))
      })
    }

  }, [Id])
  return (
    <>
      <UseNav />
      <ProfileSection>
        <ImageSection>
          <CardImage>
            <img src={personData.image} alt='' />
          </CardImage>
          <ImageDetails>
            <h3 style={{ textTransform: 'capitalize' }}>{personData.displayName}</h3>
            <hr></hr>
            <Section>
              <Firsts>
                <li>{calculate_age(new Date(personData.birth))}</li>
                <li>Account Setting</li>
                <li>Contact Filters</li>
                <li>Email / SMS Alerts</li>
              </Firsts>
              <Firsts>
                <li>Setting</li>
                <li>Account Setting</li>
                <li>Contact Filters</li>
                <li><Link to="/chats">Chat</Link></li>
              </Firsts>
            </Section>
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
                <li>{personDataFirst.city}</li>
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
                <li>{personDataSecand.qaulification}</li>
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
      <Footer />
    </>
  )
}

export default View;

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
> h3 {
  font-size: 1.2rem;
    font-weight: bold;
    font-family: ui-serif;
    color:#564343;
}
> p {
  display:flex;
  justify-content:space-around;
  font-size: 15px;
  color: #666;
}
@media (max-width:600px) {
    width:230px;
  }
`
const Section = styled.div`
display:flex;
justify-content:space-around;`
const Firsts = styled.div`
> li {
  list-style:none;
}`
const AllDetails = styled.div`
display:flex;
justify-content:start;
padding:30px;
background-color:#ebdcdc;`
const Details = styled.div`
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 5px;
background-color:white;
width:65%;
>h1 {
  font-size: 1.8rem;
    font-weight: bold;
    font-family: auto;
    color:#FFA500;
}
@media (max-width:600px) {
    width:100%;
  }
> h1 {
  text-align:center;
}`
const Box = styled.div`
padding:24px;
>h3 {
  font-size: 1rem;
    font-weight: 600;
    font-family: auto;
}
`
const Agent = styled.div`
display:flex;
justify-content:space-around;
`
const First = styled.div`
padding-left:48px;
> li {
  list-style:none;
  font-size: 15px;
  color: #666;
}
`
