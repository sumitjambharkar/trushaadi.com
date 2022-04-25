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
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { toast } from "react-toastify";
import { Avatar } from '@mui/material';
import { storage } from "./firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";


const MyProfile = () => {

  const [image, setImage] = useState(null);
  const [url, setUrl] = useState(null);

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleSubmit = () => {
    const imageRef = ref(storage, "image");
    uploadBytes(imageRef, image)
      .then(() => {
        getDownloadURL(imageRef)
          .then((url) => {
            setUrl(url);
          })
          .catch((error) => {
            console.log(error.message, "error getting the image url");
          });
        setImage(null);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const [userDetails, setUserDetails] = useState([]);
  const [userFirst, setUserFirst] = useState([]);
  const [userSecand, setUserSecand] = useState([]);
  var user = useSelector(selectUser);
  const dispatch = useDispatch();
  const [open, setOpen] = useState();
  const [openF, setOpenF] = useState()
  const [openS, setOpenS] = useState()
  const [openT, setOpenT] = useState()
  const [openFo, setOpenFo] = useState()
  const [number, setNumber] = useState()


  let x = userDetails.birth
  let date = new Date(x)
  let dateMDY = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
  console.log(dateMDY);
  
  const [data, setdata] = useState({
    displayName:userDetails.displayName,
    birth : userDetails.birth,
    number : userDetails.number,
    
  })
  let name, value
  const handalChange = (e) => {
    name = e.target.name
    value = e.target.value
    setdata({ ...data, [name]: value })
  }
  const updateNumber = (e) =>{
    e.preventDefault();
    db.collection("users").doc(user.uid).update({
      number:data.number
    })
    toast.success("update Success")
    setTimeout(()=>{
      window.location.reload(false);
    },1000);
  }
  const update = (e)=>{
    e.preventDefault();
    console.log();
    db.collection("users").doc(user.uid).update({
      birth:data.birth,
      gender:data.gender,
    })
    toast.success("update Success")
    setTimeout(()=>{
      window.location.reload(false);
    },1000);
    
  }
  const updateF = (e)=>{
    e.preventDefault();
    console.log();
    db.collection("users").doc(user.uid).update({
      birth:data.birth,
      gender:data.gender,
      religion:data.religion,
      tounge:data.tounge
    })
    toast.success("update Success")
    
  }
  const updateS = (e)=>{
    e.preventDefault();
    console.log();
    db.collection("users").doc(user.uid).update({
      birth:data.birth,
      gender:data.gender,
    })
    toast.success("update Success")
    
  }
  const updateT = (e)=>{
    e.preventDefault();
    console.log();
    db.collection("users").doc(user.uid).update({
      birth:data.birth,
      gender:data.gender,
    })
    toast.success("update Success")
    
  }
  const updateFo = (e)=>{
    e.preventDefault();
    console.log();
    db.collection("users").doc(user.uid).update({
      birth:data.birth,
      gender:data.gender,
    })
    toast.success("update Success")
    
  }

  function calculate_age(dob) {
    var diff_ms = Date.now() - dob.getTime();
    var age_dt = new Date(diff_ms);

    return Math.abs(age_dt.getUTCFullYear() - 1970);
  }
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

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
        .doc(user.uid)
        .get()
        .then((snapshot) => setUserDetails(snapshot.data()));
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

  return (
    <>
      <UseNav />
      <ProfileSection>
        <ImageSection>
          <CardImage>
          <Avatar src={url} sx={{width:200,height:230}} variant="square"/>
          <input type="file" onChange={handleImageChange} />
            <button onClick={handleSubmit}>Add Photo</button>
          </CardImage>
          <ImageDetails>
            <h3 style={{ textTransform: "capitalize" }}>
              {userDetails.displayName}
            </h3>
            <hr></hr>

            <li>{calculate_age(new Date(userDetails.birth))} Yrs</li>
            <li>5.2</li>
            <li>indain</li>
            <li>{userDetails.number}
            <Button onClick={()=>setNumber(userDetails.number)}>
              <Tooltip title="Edit"><EditIcon />
              </Tooltip>
            </Button></li>
            <Modal
                  open={number}
                  onClose={setNumber}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                      Mobile No
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    <input placeholder="Mobile No." type="number" name="number" value={data.number} onChange={handalChange}/>
                     <br></br>
                     <Button onClick={updateNumber}>Update</Button>
                     <Button onClick={()=>setNumber(false)}>Close</Button>
                    </Typography>
                  </Box>
                </Modal>
          </ImageDetails>
        </ImageSection>
      </ProfileSection>
      <AllDetails>
        <Details>
          <Boxs>
            <h3>About Us</h3>
            <Divs>
              <span>
                {userDetails.about}
              </span>
            </Divs>
          </Boxs>
          <Boxs>
            <h3>Basic Info</h3>
            <Agent>
              <First>
                <li>Gender</li>
                <li>Date Of Birth</li>
                <li>MaritalStatus</li>
                <li>Religion</li>
                <li>Caste</li>
                <li>Mother Tongue</li>
              </First>
              <First>
                <li>{userDetails.gender}</li>
                <li>{dateMDY}</li>
                <li>{userFirst.maritalStatus}</li>
                <li>{userSecand.religion}</li>
                <li>{userSecand.tounge}</li>
                <li>{userSecand.tounge}</li>
              </First>
              <First>
              <Button onClick={()=>setOpen(userDetails.gender,userDetails.birth)}>
                  <EditIcon />
                  Edit
                </Button>
                <Modal
                  open={open}
                  onClose={setOpen}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                      Basic Information
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    <input placeholder="Gender" type="text" name="gender" value={data.gender} onChange={handalChange}/>
                    <br></br>
                    <input type="date" name="birth" value={data.birth} onChange={handalChange}/> <br></br>
                    <input placeholder="MaritalStatus" type="text" name="maritalStatus" value={data.maritalStatus} onChange={handalChange}/> <br></br>
                    <input placeholder="Religion" type="text" name="religion" value={data.religion} onChange={handalChange}/> <br></br>
                    <input placeholder="Caste" type="text" name="caste" value={data.tounge} onChange={handalChange}/> <br></br>
                    <input placeholder="MotherTounge" type="text" name="tounge" value={data.tounge} onChange={handalChange}/>
                     <br></br>
                     <Button onClick={update}>Update</Button>
                     <Button onClick={()=>setOpen(false)}>Close</Button>
                    </Typography>
                  </Box>
                </Modal>
              </First>
            </Agent>
          </Boxs>
          
          <Boxs>
            <h3>Education & Career</h3>
            <Agent>
              <First>
                <li>Qualification</li>
                <li>University Of Collage</li>
                <li>Working With</li>
              </First>
              <First>
                <li>{userSecand.qaulification}</li>
                <li>{userSecand.collage}</li>
                <li>{userSecand.work}</li>
              </First>
              <First>
              <Button onClick={()=>setOpenF(userDetails.gender,userDetails.birth)}>
                  <EditIcon />
                  Edit
                </Button>
                <Modal
                  open={openF}
                  onClose={setOpenF}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                      Basic Information
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    <input placeholder="Gender" type="text" name="gender" value={data.gender} onChange={handalChange}/>
                     <input type="date" name="birth" value={data.birth} onChange={handalChange}/>
                     <br></br>
                     <Button onClick={updateF}>Update</Button>
                     <Button onClick={()=>setOpenF(false)}>Close</Button>
                    </Typography>
                  </Box>
                </Modal>
              </First>
            </Agent>
          </Boxs>
          <Boxs>
            <h3>Family Details</h3>
            <Agent>
              <First>
                <li>Live with your family</li>
                <li>Family Members</li>
              </First>
              <First>
                <li>{userFirst.family}</li>
                <li>Not Specified</li>
              </First>
              <First>
              <Button onClick={()=>setOpenS(userDetails.gender,userDetails.birth)}>
                  <EditIcon />
                  Edit
                </Button>
                <Modal
                  open={openS}
                  onClose={setOpenS}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                      Basic Information
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    <input placeholder="Gender" type="text" name="gender" value={data.gender} onChange={handalChange}/>
                     <input type="date" name="birth" value={data.birth} onChange={handalChange}/>
                     <br></br>
                     <Button onClick={updateS}>Update</Button>
                     <Button onClick={()=>setOpenS(false)}>Close</Button>
                    </Typography>
                  </Box>
                </Modal>
              </First>
            </Agent>
          </Boxs>
          <Boxs>
            <h3>Location</h3>
            <Agent>
              <First>
                <li>City you live in</li>
                <li>State</li>
              </First>
              <First>
                <li>{userFirst.city}</li>
                <li>{userFirst.state}</li>
              </First>
              <First>
              <Button onClick={()=>setOpenT(userDetails.gender,userDetails.birth)}>
                  <EditIcon />
                  Edit
                </Button>
                <Modal
                  open={openT}
                  onClose={setOpenT}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                      Basic Information
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    <input placeholder="Gender" type="text" name="gender" value={data.gender} onChange={handalChange}/>
                     <input type="date" name="birth" value={data.birth} onChange={handalChange}/>
                     <br></br>
                     <Button onClick={updateT}>Update</Button>
                     <Button onClick={()=>setOpenT(false)}>Close</Button>
                    </Typography>
                  </Box>
                </Modal>
              </First>
            </Agent>
          </Boxs>
          <Boxs>

            <h3>Lifestyle and Intrests</h3>
            <Agent>
              <First>
                <li>Eating Habit</li>
                <li>Height</li>
              </First>
              <First>
                <li>{userFirst.diet}</li>
                <li>{userFirst.height}</li>
              </First>
              <First>
              <Button onClick={()=>setOpenFo(userDetails.gender,userDetails.birth)}>
                  <EditIcon />
                  Edit
                </Button>
                <Modal
                  open={openFo}
                  onClose={setOpenFo}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                      Basic Information
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    <input placeholder="Gender" type="text" name="gender" value={data.gender} onChange={handalChange}/>
                     <input type="date" name="birth" value={data.birth} onChange={handalChange}/>
                     <br></br>
                     <Button onClick={updateFo}>Update</Button>
                     <Button onClick={()=>setOpenFo(false)}>Close</Button>
                    </Typography>
                  </Box>
                </Modal>
              </First>
            </Agent>
          </Boxs>
        </Details>
      </AllDetails>
      <Footer />
    </>
  );
};

export default MyProfile;

const ProfileSection = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: center;
  background-color: #5c5959;
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
  background-color: #5c5959;
  margin: 12px;
  width: 450px;
  padding: 12px;
  padding-right: 80px;
  color: white;
  > li {
    list-style: none;
    margin: 6px;
  }
  > li > .MuiSvgIcon-root {
    margin-left: 24px;
  }
  > li Button {
    color:white;
  }
  @media (max-width: 600px) {
    width: 230px;
  }
`;
const AllDetails = styled.div`
  display: flex;
  justify-content: center;
  padding:30px;
`;
const Details = styled.div`
  background-color: white;
  width:70%;
  @media (max-width: 600px) {
    width:100%;
  }
  > h1 {
    text-align: center;
  }
`;
const Boxs = styled.div`
  padding: 24px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  > h3 {
    font-size: 18px;
    color: #ffa500;
    margin-bottom: 10px;
  }
`;
const Divs = styled.div`
  display: flex;
  justify-content: space-between;
  > span {
    font-size: 15px;
    color: #666;
  }
`;

const Agent = styled.div`
  display: flex;
  justify-content: space-evenly;
  Button {
    color:gray;
  }
`;
const First = styled.div`
  padding-left: 48px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  > li {
    list-style: none;
    font-size: 13px;
    color: #666;
    margin:6px;
  }
`;

