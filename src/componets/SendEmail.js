import React, { useState } from "react";
import styled from "styled-components";
import Theme from "../image/theme.png";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";
import { ToastContainer, toast } from 'react-toastify';

const SendEmail = () => {
    const history = useHistory()
    const [email, setEmail] = useState('')
    const sendEmail =async(e)=>{
        e.preventDefault()
        auth.sendPasswordResetEmail(email)
        .then(function () {
            alert('Please check your email...')
            history.push("/login")
        }).catch(function (e) {
            console.log(e)
        }) 
        
    }
  
  return (
    <>
      <LoginContainer>
        <Form>
          <FormCard>
            <FormC>
                <MainDiv>
                  <p></p>
                  <h4>Forget Password?</h4>
                  <p></p>
                  <hr></hr>
                  <label>Email ID</label>
                  <p></p>
                  <input value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter Your Email Id"/>
                  <p></p>
                  <button onClick={sendEmail} >Submit</button>
                  <p></p>
                  <p>Not yet registered ?</p>
                  <p><Link to="/signup">Free to Signup</Link></p>
                </MainDiv>
            </FormC>
          </FormCard>
        </Form>
      </LoginContainer>
      <ToastContainer/>
    </>
  );
};
export default SendEmail;

const LoginContainer = styled.div`
  background-image: url(${Theme});
  height: 630px;
  background-size: 100% 650px;
  align-items: center;
`;

const Form = styled.div`
  z-index: 1;
`;
const FormCard = styled.div`
  z-index: 1;
  display: flex;
  justify-content: center;
  justify-items: center;
  /* margin-left:38%; */
`;
const FormC = styled.div`
  margin-top:115px;
  margin-bottom: 12px;
  z-index: 1;
  display: flex;
  justify-content: center;
  width: 360px;
  height: 100%;
  background-color: white;
  padding: 1rem;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  @media (max-width:400px) {
    width:290px;
  }
`;

const MainDiv = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
> p {
    text-align: center;
    
}
> p  > a {
    text-decoration:none;
}
> input {
    padding:6px;
    width: 270px;
    height: 40px;
    border: 1px solid #FFA500;
    border-radius: 2px;
}
> input:focus {
  outline:none;
}
> button {
    width: 270px;
    height: 40px;
    margin-top: 8px;
    background-color:#FFA500;
    border: 1px solid #FFA500;
    border-radius: 4px;
    color:white;
}
>button > a {
    text-decoration: none;
    color:white;
}
 
`;