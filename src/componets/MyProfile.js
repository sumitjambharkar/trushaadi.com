import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Footer from './Footer';
import UseNav from './UseNav';
import { db, auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from './userSlice';
import { selectUser } from './userSlice';
import EditIcon from '@mui/icons-material/Edit';
import Tooltip from '@mui/material/Tooltip';
import { inputAdornmentClasses } from '@mui/material';

const MyProfile = () => {
    const [edit, setEdit] = useState(false)
    const [gender, setGender] = useState('')
    const [userDetails, setUserDetails] = useState([])
    const [userFirst, setUserFirst] = useState([])
    const [userSecand, setUserSecand] = useState([])
    var user = useSelector(selectUser)
    const dispatch = useDispatch()

    function calculate_age(dob) {
        var diff_ms = Date.now() - dob.getTime();
        var age_dt = new Date(diff_ms);

        return Math.abs(age_dt.getUTCFullYear() - 1970);
    }

    useEffect(() => {
        auth.onAuthStateChanged(userAuth => {
            if (userAuth) {
                dispatch(login({
                    uid: userAuth.uid,
                    email: userAuth.email,
                    displayName: userAuth.displayName,
                }))
            } else {
                dispatch(logout())
            }
        })
        if (user.uid) {
            db.collection("users").doc(user.uid).get()
                .then(snapshot => setUserDetails(snapshot.data()))
            db.collection("users")
                .doc(user.uid)
                .collection("userdata1")
                .get()
                .then(querySnapshot => {
                    querySnapshot.forEach(doc => {
                        setUserFirst(doc.data())
                    });
                });
            db.collection("users")
                .doc(user.uid)
                .collection("userdata2")
                .get()
                .then(querySnapshot => {
                    querySnapshot.forEach(doc => {
                        setUserSecand(doc.data())
                    });
                });
        }

    }, [user.uid])


    return (
        <>
            <UseNav />
            <ProfileSection>
                <ImageSection>
                    <CardImage>
                        <img src={userDetails.image} alt='' />
                        <button>Add Photo</button>
                    </CardImage>
                    <ImageDetails>
                        <h3 style={{ textTransform: 'capitalize' }}>{userDetails.displayName}</h3>
                        <hr></hr>
                       
                        <li>{calculate_age(new Date(userDetails.birth))} Yrs</li>
                        <li>5.2</li>
                        <li>indain</li>
                        <li>{userDetails.number}<Tooltip title="Edit"><EditIcon/></Tooltip></li>   
                    </ImageDetails>
                </ImageSection>
            </ProfileSection>
            <AllDetails>
                <Details>
                    <Box>
                        <Divs>
                        <h3>About Us</h3>
                        <span onClick={()=>setEdit(!edit)}><EditIcon/>Edit</span>
                        </Divs>
                        {edit ? <input value={userDetails.displayName}/>: ""}
                        <span>I am currently living in uk. I am a smart and dynamic girl who respects her culture very much. I belong to a simple marathi family.</span>
                    </Box>
                    <Box>
                       <Divs>
                       <h3>Basic Info</h3>
                        <span onClick={()=>setEdit(!edit)}><EditIcon/>Edit</span>
                       </Divs>
                        <Agent>
                            <First>
                                <li>Gender</li>
                                <li>Birth Of Date</li>
                            </First>
                            {edit ? <First><input onChange={(e)=>setGender(e.target.value)} value={gender}/>
                            <input value={userDetails.birth}/></First>: 
                            <First>
                            <li>{userDetails.gender}</li>
                            <li>{userDetails.birth}</li>
                        </First>
                            }
                            
                        </Agent>
                    </Box>
                    <Box>
                        <Divs>
                        <h3>Lifestyle and Intrests</h3>
                        <span><EditIcon/>Edit</span>
                        </Divs>
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
                    <Box>
                       <Divs>
                       <h3>Education and profession</h3>
                    <span><EditIcon/>Edit</span>
                       </Divs>
                        <Agent>
                            <First>
                                <li>gender</li>
                                <li>{userSecand.collage}</li>
                            </First>
                            <First>
                                <li>Caste</li>
                                <li>Bhandari</li>
                            </First>
                        </Agent>
                    </Box>
                    <Box>
                        <Divs>
                        <h3>Family Details</h3>
                        <span><EditIcon/>Edit</span>
                        </Divs>
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
                    <Box>
                        <Divs>
                        <h3>Lifestyle and Intrests</h3>
                        <span><EditIcon/>Edit</span>
                        </Divs>
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

export default MyProfile;

const ProfileSection = styled.div`
margin-top:30px;
display:flex;
justify-content:center;
background-color:#5c5959;

`
const ImageSection = styled.div`
display: flex;
justify-content:center;
flex-wrap:wrap;
`
const CardImage = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
/* padding:12px; */
margin:12px;
> img {
    width:200px;
}`
const ImageDetails = styled.div`
background-color:#5c5959;
margin:12px;
width:450px;
padding:12px;
padding-right: 80px;
color:white;
> li {
    list-style: none;
    margin: 6px;;
}
> li > .MuiSvgIcon-root {
    margin-left:24px;

}
@media (max-width:600px) {
    width:230px;
  }
`
const AllDetails = styled.div`
display:flex;
justify-content:center;
padding:30px;`
const Details = styled.div`
background-color:white;
@media (max-width:600px) {
    width:100%;
  }
> h1 {
  text-align:center;
}`
const Box = styled.div`
padding:24px;
display:flex;
justify-content:center;
flex-direction:column;
> span {
    font-size: 15px;
    color: #666;
}
`
const Divs = styled.div`
display:flex;
justify-content:space-between;
>h3 {
    font-size: 18px;
    color: #FFA500;
    margin-bottom: 10px;
}
> span {
    font-size: 15px;
    color: #666;
}`

const Agent = styled.div`
display:flex;
justify-content:space-evenly;
`
const First = styled.div`
padding-left:48px;
display: flex;
justify-content: center;
flex-direction: column;
> li {
  list-style:none;
  font-size: 13px;
  color: #666;
}
`
