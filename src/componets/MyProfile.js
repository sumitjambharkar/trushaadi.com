import React, {useEffect, useState } from "react";
import styled from "styled-components";
import Footer from "./Footer";
import UseNav from "./UseNav";
import { db, auth} from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "./userSlice";
import { selectUser } from "./userSlice";
import EditIcon from "@mui/icons-material/Edit";
import Tooltip from "@mui/material/Tooltip";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { toast } from "react-toastify";
import { Avatar } from '@mui/material';
import { storage} from "./firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { getDoc, doc, updateDoc } from "firebase/firestore";
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';


const style = {
  position: "absolute",
  textAlign:"center",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 300,
  bgcolor: "background.paper",
  boxShadow: 24,
  paddingLeft:2,
  paddingRight:2,
};



const MyProfile = () => {
  const [img ,setImag ] = useState('')
  const [userDetails, setUserDetails] = useState([]);
  const [userFirst, setUserFirst] = useState([]);
  const [userSecand, setUserSecand] = useState([]);
  var user = useSelector(selectUser);
  const [num,setNum] = useState(false)
  const [birth,setBirth] =useState(false)
  const dispatch = useDispatch();
  const [number, setNumber] = useState()
  const [userN, setUserN] = useState()
  const [ k ,setK] = useState([])
  console.log(k);
 
  
  useEffect(()=>{
    getDoc(doc(db, "users", auth.currentUser.uid)).then((docSnap) => {
      if (docSnap.exists) {
        setUserN(docSnap.data());
      }
    });
    if(img){
      const uploadImg =async()=>{
        const imgRef = ref(storage,`avatar/${new Date().getTime()} - ${img.name}`)
        try{
        const snap =await uploadBytes(imgRef,img)
        console.log(snap.ref.fullPath)
        const url = await  getDownloadURL(ref(storage,snap.ref.fullPath))
        await updateDoc(doc(db,"users",auth.currentUser.uid),{
          image:url,
          avatarPath:snap.ref.fullPath
        })
        console.log(url)
        setImag("")
        }
        catch(err){
          console.log(err.message);
        }
      }
      uploadImg()
    }

  },[img])

  let x = userDetails.birth
  let date = new Date(x)
  let dateMDY = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;

  const updateNum =(e)=> {
    e.preventDefault();
    db.collection("users").doc(user.uid).update({
      number
    })
    setNum(false)
    toast.success("update Success")
  }

  const updateBirth =()=> {
    setBirth(false)
  }

  function calculate_age(dob) {
    var diff_ms = Date.now() - dob.getTime();
    var age_dt = new Date(diff_ms);

    return Math.abs(age_dt.getUTCFullYear() - 1970);
  }


  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
            displayName: userAuth.displayName,
          })
        );
      } else {
        dispatch(logout());
      }
    });
    if (user.uid) {
      db.collection("users")
        .doc(user.uid).onSnapshot((snapshot) => {
          setUserDetails(snapshot.data());
      });
      db.collection("users").doc(user.uid).collection("userdata1").onSnapshot((snapshot)=>(
        setK(snapshot.data())
      ))
      db.collection("users")
        .doc(user.uid)
        .collection("userdata1")
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            setUserFirst(doc.data());
          });
        });
      db.collection("users")
        .doc(user.uid)
        .collection("userdata2")
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            setUserSecand(doc.data());
          });
        });
    }
  }, [user.uid]);
  const Input = styled('input')({
    display: 'none',
  });

  return (
    <>
      <UseNav />
      <ProfileSection>
        <ImageSection>
          <CardImage>
          <Avatar src={userDetails.image}   sx={{width:200,height:230,backgroundColor:"#eee",border:"1px solid #ccc",color:"#ccc"}} variant="square"/>
          <label htmlFor="icon-button-file">
        <Input onChange={(e)=>setImag(e.target.files[0])} accept="image/*" id="icon-button-file" type="file" />
        <IconButton style={{display:"flex",fontWeight:"500",color:"white",border:"#FFA500",backgroundColor: "#FFA500",borderRadius:"1px"}} aria-label="upload picture" component="span">
          <PhotoCamera />
        </IconButton>
      </label>
          </CardImage>
          <ImageDetails>
            <h3 style={{ textTransform: "capitalize" }}>
              {userDetails.displayName}
            </h3>
            <hr></hr>

            <li>{calculate_age(new Date(userDetails.birth))} Yrs</li>
            <li>{userFirst.height}</li>
            <li>indain</li>
            <li>{userDetails.number}<Button onClick={()=>setNum(true)}>
              <Tooltip title="Edit"><EditIcon />
              </Tooltip>
            </Button></li>
            {num ? <li><input type="number" value={number} onChange={(e)=>setNumber(e.target.value)}/><Button onClick={updateNum}>Update</Button></li> : null}
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
                <li>Date Of Birth</li>
                {!birth ? <li>11/02/1994<Tooltip style={{marginLeft:"4px"}} title="Edit"><EditIcon onClick={()=>setBirth(true)} />
              </Tooltip></li> :  <li><input type="date"/><Button onClick={updateBirth}>Update</Button></li> }
              </First>
            </Agent>
            <Agent>
            <First>
                <li>Religion</li>
                <li>shiv galli andheri west mumbai brandra</li>
              </First>
              <First>
                <li>Mother Tounge</li>
                <li>x</li>
              </First>
            </Agent>
          </Box>
          <Box><h3>Lifestyle and Intrests</h3>
            <Agent>
              <First>
                <li>Eating Habit</li>
                <li>g</li>
              </First>
              <First>
                <li>Height</li>
                <li>x</li>
              </First>
            </Agent>
          </Box>
          <Box><h3>Education and profession</h3>
            <Agent>
              <First>
                <li>Qaulification</li>
                <li>x</li>
              </First>
              <First>
                <li>University</li>
                <li>x</li>
              </First>
            </Agent>
          </Box>
          <Box><h3>Family Details</h3>
            <Agent>
              <First>
                <li>Live in Family</li>
                <li>f</li>
              </First>
              <First>
                <li>Members</li>
                <li>Not Specified</li>
              </First>
            </Agent>
          </Box>
          <Box><h3>Location</h3>
            <Agent>
              <First>
                <li>Live in</li>
                <li>xx</li>
              </First>
              <First>
                <li>State</li>
                <li>xcc</li>
              </First>
            </Agent>
          </Box>
        </Details>
      </AllDetails> 
      <Footer />
    </>
  );
};

export default MyProfile;

const ProfileSection = styled.div`
  margin-top:4px;
  display: flex;
  justify-content: center;
`;
const ImageSection = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;
const CardImage = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  /* padding:12px; */
  margin: 12px;
  > img {
    width: 200px;
  }
`;
const ImageDetails = styled.div`
  border:1px solid #ccc;
  background-color: #eee;
  margin: 12px;
  width: 450px;
  padding: 12px;
  padding-right: 80px;
  color:black;
  > li {
    list-style: none;
    margin: 6px;
  }
  > li > .MuiSvgIcon-root {
    margin-left: 24px;
  }
  > li Button {
    color:black;
  }
  @media (max-width: 600px) {
    width: 230px;
  }
`;
const AllDetails = styled.div`
display:flex;
justify-content:start;
padding:30px;
background-color:white;`
const Details = styled.div`
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 5px;
background-color:#eee;
width: 70%;
>h1 {
  font-size: 1.8rem;
    font-weight: bold;
    font-family: auto;
    color:#FFA500;
    margin-top: 15px;
}
@media (max-width:600px) {
    width:100%;
    padding:0;
  }
> h1 {
  text-align:center;
}`

const Agent = styled.div`
display:flex;
width: 100%;
`
const First = styled.div`
display: flex;
justify-content: center;
width: 50%;
padding-left:8px;
margin:4px;
> li {
  list-style:none;
  font-size: 15px;
  color: #666;
  width: 30%;
  
}
`
const Box = styled.div`
padding:24px;
>h3 {
  font-size: 1rem;
    font-weight: 600;
    font-family: auto;
}
`

