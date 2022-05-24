import React, { useState } from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from './firebase';
import {Link, useHistory } from "react-router-dom";
import Logo from "../image/marr.png";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styled from "@emotion/styled";
import {db} from './firebase'
import { updateDoc, doc } from "firebase/firestore";
import CloseIcon from '@mui/icons-material/Close';
import { Visibility, VisibilityOff } from '@mui/icons-material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 360,
  bgcolor: 'background.paper',
  border: '1px solid #000',
  boxShadow: 24,
  p: 4,
};

const Sign = () => {
  const history = useHistory()
  const [data, setData] = useState({email:"",password:"",displayName:""})
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [showPassword, setShowPassword] = useState(false);

  const handleClick = () => {
    setShowPassword(!showPassword);
  };
  
  const handalChange = (e) => {
      setData({...data,[e.target.name]:e.target.value})
  }

  const handalSubmit = async (e) => {
    e.preventDefault()
    console.log(data);
    const {email,password} = data
    if(email && password){
      try{
        // const {result} = await auth.signInWithEmailAndPassword(email,password)
        // dispatch(login({
        //   email:email,
        //   password:password,
        // }))
      const result = await signInWithEmailAndPassword(auth, email, password);
      await updateDoc(doc(db, "users", result.user.uid), {
        isOnline: true,
      });
      toast.success("Login Success",result)
      console.log(result);
      history.push('/')
      }
      catch(error){
        console.log(error.message);
        toast.error(error.message,"Login failed")
      }
    }  
    setData("")
  }

  return (
    <div>
      <Button onClick={handleOpen}>Signup</Button>
      <Modal
        open={open}
        shouldCloseOnOverlayClick={
            false}
        onClose={handleOpen}
        aria-labelledby="modal-modal-title" 
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <form method="post"  onSubmit={handalSubmit}>
          <FormC>
            <MainDiv>
              <div
                style={{ marginLeft: "256px",marginBottom:"4px" }}
              >
                <Link><CloseIcon onClick={handleClose}/></Link>
              </div>
              <h5 style={{ marginBottom: "4px" }}>
              Let's set up your account,<br></br> while
              we find Matches for you!
              </h5>
              <Label>
                <label>Full Name</label>
              </Label>
              <Input>
                <input name="displayName" type="name" required autoComplete="off" value={data.displayName} onChange={handalChange} />
              </Input>
              <Label>
              <label>Gender</label>
              </Label>
              <select autoComplete='off' required name='gender'   onChange={handalChange} value={data.gender}>
                 <option >Select</option>
                 <option >Male</option>
                 <option >Female</option>
             </select>
              <Label>
                <label>Birth Date</label>
              </Label>
              <Input>
                <input name="birth" type="date" required autoComplete="off" value={data.birth} onChange={handalChange} />
              </Input>
              <Label>
                <label>Mobile No.</label>
              </Label>
              <Input>
                <input name="number" type="number" required autoComplete="off" value={data.number} onChange={handalChange} />
              </Input>
              <Label>
                <label>Email ID</label>
              </Label>
              <Input>
                <input name="email" type="email" required autoComplete="off" value={data.email} onChange={handalChange}  />
              </Input>
              <Label>
                <label>Password</label>
              </Label>
              <div></div>
              <Input>
                <input name="password" type={showPassword ? 'text' : 'password'} required autoComplete="off" value={data.password} onChange={handalChange}  />
                <Button style={{marginLeft:"-55px",color:"black"}}>{showPassword ? <Visibility onClick={handleClick}/> : <VisibilityOff onClick={handleClick}/>}</Button>
              </Input>
              <Div>
                <button type="submit" className="button">Register</button>
              </Div>
              <Forgot>
                    <Div>
                      <Link to="/login"><p>Already a Member? Login</p></Link>
                    </Div>
                  </Forgot>
            </MainDiv>
          </FormC>
          </form>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
export default Sign;

const FormC = styled.div``;
const MainDiv = styled.div`
  align-items: center;
  div > a {
    text-decoration: none;
    color: black;
  }
  >select {
    width:270px;
    height:40px;
    margin-bottom:8px;
    padding:5px;
    border:1px solid #FFA500;
    outline:none;
  }
`;

const Label = styled.div`
  > label {
    font-size: 16px;
    font-weight: 400;
    margin: 4px;
  }
`;
const Input = styled.div`
  > input {
    width: 270px;
    height: 40px;
    border: 1px solid #FFA500;
    border-radius: 2px;
  }
  > input:focus {
  outline:none;
}
`;
const Forgot = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 21px;
`;
const Div = styled.div`
  > p > a {
    text-decoration: none;
    color: black;
  }
  .checkbox {
    margin-right: 7px;
  }
  .button {
    width: 270px;
    height: 40px;
    margin-top: 8px;
    background-color:#FFA500;
    border: 1px solid #FFA500;
    border-radius: 4px;
    color:white;
  }
  .button > a {
    text-decoration: none;
    color:white;
  }
`;