import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Theme from "../image/Screenshot.png";
import { useHistory } from "react-router-dom";
import { auth ,createUserCollecton} from "./firebase";
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from "react-redux";
import { login } from "./userSlice";



const Signup = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const [data, setData ] = useState({
    displayName:"",
    email:"",
    number:"",
    birth:"",
    gender:"",
    password:""

  })
  const handalSubmit=async(e)=>{
    e.preventDefault()  
    const {email,displayName,birth,number,password,gender} = data;
    try{
      const {user} = await auth.createUserWithEmailAndPassword(email,password,{displayName,number});
      console.log(user);
      await user.updateProfile({
        displayName:displayName,
        phoneNumber:number,
        isOnline: true,
      })
      await createUserCollecton(user,{displayName,birth,number,gender});
      dispatch(login({
        uid : user.uid,
        email:user.email,
        displayName:user.displayName,
        phoneNumber:user.number,
        isOnline: true,
        
      }))
      toast.success("Register Successfull")
      setTimeout(() => {
        history.push('/profile')
      },100);
    }catch(err){
      console.log(err);
      toast.error("error",err.message)
      history.push('/signup')
    }
    setData("")
  }
  let name, value
  const handalChange=(e)=>{
    name= e.target.name
    value = e.target.value
    setData({...data,[name]:value})
  }

  return (
    <>
      <SignupContainer>
      <Form>
        <FormCard>
          <form method="post"  onSubmit={handalSubmit}>
          <FormC>
            <MainDiv>
              <div
                style={{ marginLeft: "256px",marginBottom:"4px" }}
              >
                <Link to="/">X</Link>
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
                <input name="password" type="password" required autoComplete="off" value={data.password} onChange={handalChange}  />
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
        </FormCard>
      </Form>
      </SignupContainer>
    </>
  );
};

export default Signup;
const SignupContainer = styled.div`
   background-image: url(${Theme});
   height: 630px;
   background-size: 100% 650px;
   align-items: center;
`
const Form = styled.div``;
const FormCard = styled.div`
  display: flex;
  justify-content: center;
  justify-items: center;
  z-index: 1; /* Sit on top */
`;
const FormC = styled.div`
  margin-top:44px;
  margin-bottom:12px;
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: center;
  width: 360px;
  height:90%;
  background-color: white;
  padding:1rem;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  @media (max-width:400px) {
    width:290px;
  }
`;
const MainDiv = styled.div`
  align-items: center;
  div > a {
    text-decoration:none;
    color:black;
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
  justify-content:center;
  margin:16px;
`;
const Div = styled.div`
  > a{
    text-decoration:none;
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
`;
