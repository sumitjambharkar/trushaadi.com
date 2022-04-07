import React, { useState } from "react";
import Logoo from "../image/logo192.png";
import styled from "styled-components";
import Theme from "../image/theme.png";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const handalSubmit = async (e) => {
    e.preventDefault();
    const data  = {email,password}
  const respone =await axios.post('http://localhost:3001/login',data)
    console.log(respone);
    if(respone){
      alert("success")
      history.push("/profile");
      setEmail("")
      setPassword("")
    }
    else {
      alert("error")
      history.push("/login");
      setEmail("")
      setPassword("")


    }
  };
  return (
    <>
      <LoginContainer>
        <Form>
          <FormCard>
            <FormC>
              <form >
                <MainDiv>
                  <div style={{ marginLeft: "256px" }}>
                    <Link to="/">X</Link>
                  </div>
                  <LogoImage>
                    <img style={{ width: "40px" }} src={Logoo} alt="logo" />
                  </LogoImage>
                  <h5 style={{ marginBottom: "24px" }}>
                    Welcome back ! Please Login
                  </h5>
                  <Label>
                    <label>Email ID</label>
                  </Label>
                  <Input>
                    <input
                      required
                      autoComplete="off"
                      onChange={(e) => setEmail(e.target.value)}
                      type="email"
                    />
                  </Input>
                  <Label>
                    <label>Password</label>
                  </Label>
                  <div></div>
                  <Input>
                    <input
                      required
                      autoComplete="off"
                      onChange={(e) => setPassword(e.target.value)}
                      type="password"
                    />
                  </Input>
                  <Forgot>
                    <Div>
                      <input className="checkbox" type="checkbox" />
                      <span>Stay Login</span>
                    </Div>
                    <Div>
                      <span>Forgot Password ?</span>
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
                        <Link to="/signup">Free to Signup</Link>
                      </p>
                    </Div>
                  </Forgot>
                </MainDiv>
              </form>
            </FormC>
          </FormCard>
        </Form>
      </LoginContainer>
    </>
  );
};
export default Login;

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
  margin-top: 44px;
  margin-bottom: 12px;
  z-index: 1;
  display: flex;
  justify-content: center;
  width: 360px;
  height: 100%;
  background-color: white;
  padding: 1rem;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;
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
