import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Footer from "./Footer";
import UseNav from "./UseNav";
import { db, auth } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "./userSlice";
import { selectUser } from "./userSlice";
import EditIcon from "@mui/icons-material/Edit";
import Tooltip from "@mui/material/Tooltip";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const MyProfile = () => {
  const [show, setShow] = useState("");
  const [userDetails, setUserDetails] = useState([]);
  const [userFirst, setUserFirst] = useState([]);
  const [userSecand, setUserSecand] = useState([]);
  var user = useSelector(selectUser);
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
  const updateDoc =()=>{}
  const handalChange =()=>{

  }
  return (
    <>
      <UseNav />
      <ProfileSection>
        <ImageSection>
          <CardImage>
            <img src={userDetails.image} alt="" />
            <button>Add Photo</button>
          </CardImage>
          <ImageDetails>
            <h3 style={{ textTransform: "capitalize" }}>
              {userDetails.displayName}
            </h3>
            <hr></hr>

            <li>{calculate_age(new Date(userDetails.birth))} Yrs</li>
            <li>5.2</li>
            <li>indain</li>
            <li>
              {userDetails.number}
              <Tooltip title="Edit">
                <EditIcon />
              </Tooltip>
            </li>
          </ImageDetails>
        </ImageSection>
      </ProfileSection>
      <AllDetails>
        <Details>
          <Boxs>
            <h3>About Us</h3>
            <Divs>
              <span>
                I am currently living in uk. I am a smart and dynamic girl who
                respects her culture very much. I belong to a simple marathi
                family.
              </span>
              <div>
                <Button onClick={handleOpen}><EditIcon />
                Edit</Button>
                <Modal
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box sx={style}>
                    <Typography
                      id="modal-modal-title"
                      variant="h6"
                      component="h2"
                    >
                    About Us
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    <form onSubmit={updateDoc}>
                    <input
                     type="text"
                     name="bio"
                     value="bio"
                     onChange={handalChange}
                     placeholder="Bio" />
                    <Button type="submit">Update</Button>
                    </form>
                    </Typography>
                  </Box>
                </Modal>
              </div>
            </Divs>
          </Boxs>
          <Boxs>
            <Divs>
              <h3>Basic Info</h3>
              <span>
                <EditIcon />
                Edit
              </span>
            </Divs>
            <Agent>
              <First>
                <li>Gender</li>
                <li>Birth Of Date</li>
              </First>
              <First>
                <li>{userDetails.gender}</li>
                <li>{userDetails.birth}</li>
              </First>
            </Agent>
          </Boxs>
          <Boxs>
            <Divs>
              <h3>Lifestyle and Intrests</h3>
              <span>
                <EditIcon />
                Edit
              </span>
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
          </Boxs>
          <Boxs>
            <Divs>
              <h3>Education and profession</h3>
              <span>
                <EditIcon />
                Edit
              </span>
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
          </Boxs>
          <Boxs>
            <Divs>
              <h3>Family Details</h3>
              <span>
                <EditIcon />
                Edit
              </span>
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
          </Boxs>
          <Boxs>
            <Divs>
              <h3>Lifestyle and Intrests</h3>
              <span>
                <EditIcon />
                Edit
              </span>
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
  @media (max-width: 600px) {
    width: 230px;
  }
`;
const AllDetails = styled.div`
  display: flex;
  justify-content: center;
  padding: 30px;
`;
const Details = styled.div`
  background-color: white;
  @media (max-width: 600px) {
    width: 100%;
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
  }
`;
const Dash = styled.div``;
