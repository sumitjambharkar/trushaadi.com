import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";
import {Link, useHistory } from "react-router-dom";
import Logo from "../image/marr.png";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styled from "@emotion/styled";
import {db} from './firebase'
import { updateDoc, doc } from "firebase/firestore";
import CloseIcon from '@mui/icons-material/Close';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Sign from "./Sign";

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

const Loginn = () => {
  const history = useHistory()
  const [data, setData] = useState({email:"",password:""})
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
      <Button style={{color:"#FFA500"}} onClick={handleOpen}>Login</Button>
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
          <FormC>
              <form >
                <MainDiv>
                  <div style={{ marginLeft: "256px" }}>
                    <Link><CloseIcon onClick={handleClose}/></Link>
                  </div>
                  <LogoImage>
                    <img style={{ width: "0px",height:"60px" }} src={Logo} alt="logo" />
                  </LogoImage>
                  <h5 style={{ marginBottom: "24px" }}>
                    Welcome back ! Please Login
                  </h5>
                  <Label>
                    <label>Email ID</label>
                  </Label>
                  <Input>
                    <input
                      name="email"
                      required
                      autoComplete="off"
                      type="email"
                      value={data.email}
                      onChange={handalChange}
                    />
                  </Input>
                  <Label>
                    <label>Password</label>
                  </Label>
                  <div></div>
                  <Input>
                    <input
                      name="password"
                      required
                      autoComplete="off"
                      type={showPassword ? 'text' : 'password'}
                      value={data.password}
                      onChange={handalChange}
                    />
                    <Button style={{marginLeft:"-55px",color:"black"}}>{showPassword ? <Visibility onClick={handleClick}/> : <VisibilityOff onClick={handleClick}/>}</Button>
                  </Input>
                  <Forgot>
                    <Div>
                      <input className="checkbox" type="checkbox" />
                      <span>Stay Login</span>
                    </Div>
                    <Div>
                      <Link to="/forgot-password"><span >Forgot Password ?</span></Link>
                    </Div>
                  </Forgot>
                  <Div>
                    <button onClick={handalSubmit} type="submit" className="button">
                      Login
                    </button>
                  </Div>
                  <Div>
                    <button className="button">
                      <Link to="/signup">Register</Link>
                    </button>
                  </Div>
                  <Forgot>
                    <Div>
                      <p>New Shaadi ?</p>
                    </Div>
                    <Div>
                      <p>
                        <Link><Sign/></Link>
                      </p>
                    </Div>
                  </Forgot>
                </MainDiv>
              </form>
            </FormC>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
export default Loginn;

const FormC = styled.div``;

const LogoImage = styled.div`
  display: flex;
  justify-content: center;
  justify-items: center;
  margin: 2rem;
`;
const MainDiv = styled.div`
  align-items: center;
  div > a {
    text-decoration: none;
    color: black;
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