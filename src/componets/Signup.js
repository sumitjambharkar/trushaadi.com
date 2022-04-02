import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Theme from "../image/theme.png";
import axios from "axios";
import { useHistory } from "react-router-dom";


const Signup = () => {
  const history = useHistory()
  const [data, setData ] = useState({
    name:"",
    email:"",
    number:"",
    birth:"",
    password:""

  })
  const handalSubmit=async(e)=>{
    e.preventDefault()  
    const respone = await axios.post('http://localhost:3001/register',{data})
    console.log(data);
    if(respone){
      history.push("/")
      setData("")
    }else{
      alert("err")
    }
      
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
          <form onSubmit={handalSubmit}>
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
                <input name="name" type="name" required autoComplete="off" value={data.name} onChange={handalChange} />
              </Input>
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
  height: 100%;
  background-color: white;
  padding:1rem;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;
const MainDiv = styled.div`
  align-items: center;
  div > a {
    text-decoration:none;
    color:black;
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
    background-color: aqua;
    border: 1px solid aqua;
    border-radius: 4px;
  }
`;
