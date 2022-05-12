import React, {useState } from "react";
import styled from "styled-components";
import Mobile from "../image/back.jpeg";
import Shaadi from '../image/pressure-hatao.jpg'
import Logoo from '../image/logo.png'
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';


const Header = () => {

  const [user, setUser] = useState("");
  const [data, setData] = useState({
    gender: "",
    minimum: "",
    maximum: "",
    caste: "",
    mother_tounge: "",
  });

  const handalSubmit = async (e) => {
    e.preventDefault();
    setData({
      gender: "",
      minimum: "",
      maximum: "",
      caste: "",
      mother_tounge: "",
    });
  };

  let motherTounge = [
    "Hindi",
    "English",
    "Marathi",
    "Punjabi",
    "Bengali",
    "Gujarati",
    "Urdu",
    "Telugu",
    "Kannada",
    "English",
    "Tamil",
    "Oriya",
    "Marwari",
    "More",
    "Aka",
    "Arabic",
    "Arunachali",
    "Assamese",
    "Awadhi",
    "Baluchi",
    "Bengali",
    "Bhojpuri",
    "Bhutia",
    "Brahui",
    "Brij",
    "Burmese",
    "Chattis,garhi",
    "Chinese",
    "Coorgi",
    "Dogri",
    "English,",
    "French",
    "Garhwali,",
    "Garo",
    "Gujarati",
    "Haryana",
    "Himachal",
    "Pahari",
    "Hindi",
    "Hindko",
    "Kakbarak,",
    "Kanauji",
    "Kannada",
    "Kashmiri",
    "Khandesi",
    "Khasi",
    "Konkani,",
    "Koshali",
    "Kumaoni",
    "Kutchi",
    "Ladakhi",
    "Lepcha",
    "Magahi",
    "Maithili,",
    "Malay",
    "Malayal",
    "Manipuri",
    "Marathi",
    "Marwari",
    "Miji",
    "Mizo",
    "Monpa",
    "Nepali",
    "Odia",
    "Pashto",
    "Persian",
    "Punjabi",
    "Rajasthan",
    "Russian",
    "Sanskrit",
    "Santhali",
    "Seraiki",
    "Sindhi",
    "Sinhala",
    "Sourashtr",
    "Spanish",
    "Swedish",
    "Tagalog",
    "Tamil",
    "Telugu",
    "Tulu",
    "Urdu",
    "Other",
  ];
  let caste = [
    "Hindu",
    "Muslim",
    "Christian",
    "Sikh",
    "Parsi",
    "Jain",
    "Buddhist",
    "Jewish",
    "No_Religion",
    "Spiritual",
    "Other",
  ];
  let array = [
    18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36,
    37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55,
    56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 67, 68, 69, 70, 71,
  ];
  let name, value;

  const handalChange = (e) => {
    name = e.target.name;
    value = e.target.value;
    setData({ ...data, [name]: value });
  };
  return (
    <>
      <Head>
      <div className="form">
          <div className="login">
            <Link to="/login">
              <h4>Login</h4>
            </Link>
          </div>
          <div className="signup">
            <Link to="/signup">
              <h4>SignUp</h4>
            </Link>
          </div>
        </div>
        <Navbar>
          <Logo>
            <img style={{width:"250px",height:"120px"}} src={Logoo} alt=""/>
          </Logo>
          {!user ? (
            <Login>
              <h1>
                <Link to="/login">Login</Link>
              </h1>
            </Login>
          ) : (
            <Login>
              <h1>
                <a
                  
                >
                  Logout
                </a>
              </h1>
            </Login>
          )}
        </Navbar>
        <Heading>
          <h1>Trusted Matrimony & Matchmaking Service</h1>
        </Heading>
        <form method="post">
          <Nav>
            <Look>
              <h1>I'm looking for a</h1>
              {/* <input type="text" /> */}
              <select name="gender" value={data.gender} onChange={handalChange}>
                <option>Women</option>
                <option>Men</option>
              </select>
            </Look>
            <Age>
              <h1>Aged</h1>
              <select
                name="minimum"
                value={data.minimum}
                onChange={handalChange}
              >
                {array.map((ele,i) => {
                  return <option key={i}>{ele}</option>;
                })}
              </select>
              to
              <select
                name="maximum"
                value={data.maximum}
                onChange={handalChange}
              >
                {array.map((ele,i) => {
                  return <option key={i}>{ele}</option>;
                })}
              </select>
            </Age>
            <Religion>
              <h1>of religion</h1>
              <select name="caste" value={data.caste} onChange={handalChange}>
                {caste.map((ele,i) => {
                  return <option key={i}>{ele}</option>;
                })}
              </select>
            </Religion>
            <Mother>
              <h1>and mother tongue</h1>
              <select
                name="mother_tounge"
                value={data.mother_tounge}
                onChange={handalChange}
              >
                {motherTounge.map((ele,i) => {
                  return <option key={i}>{ele}</option>;
                })}
              </select>
            </Mother>
            <Let>
              <h1>.</h1>
              <Link to="/signup">
                <Button type="submit" color="error">Lest Go</Button>
              </Link>
            </Let>
          </Nav>
        </form>
      </Head>
    </>
  );
};
export default Header;
const Head = styled.div`
  background-image: url(${Shaadi});
  height: 630px;
  background-size: 100% 650px;
  align-items: center;
  .login {
    display: none;
  }
  .signup {
    display: none;
  }
  @media (max-width:500px) {
    background-image: url(${Mobile});
  position: relative;
  height: 100vh;
  background-size: 100% 100vh;
  background-repeat: no-repeat;
  .form {
  display: flex;
  justify-content: start;
  flex-direction: column;
  position: relative;
  bottom: -480px;
  padding: 2px 50px;
  }
  .login {
    display: block;
    background-color: #ffa500;
  padding:2px;
  border-radius: 72px;
  margin: 5px;
  a {
    text-align: center;
    text-decoration: none;
    color: white;
  }
  h4 {
    margin-top: 8px;
  }
  }
  .signup {
    display: block;
    background-color: #ffa500;
  padding:2px;
  border-radius: 72px;
  margin: 5px;
  a {
    text-align: center;
    text-decoration: none;
    color: white;
  }
  h4 {
    margin-top: 8px;
  }
  }
  }
`;


const Navbar = styled.div`
  display: flex;
  justify-content: space-around;
  position: relative;
  padding-top: 40px;
  position:static;
  @media (max-width:500px) {
    display: none;
  }
`;
const Logo = styled.div`
  color: black;
  margin-right: 20px;
  > h1 {
    font-family: romon;
  }
`;
const Login = styled.div`
  color: black;
  > h1 > a {
    font-size: 20px;
    text-decoration: none;
    color:#ffa500;
    font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  }
`;
const Heading = styled.div`
  text-align: center;
  margin-top: 260px;
  position: relative;
  color:#FFA500; 
  @media (max-width:500px) {
    display: none;
  }
`;
const Nav = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  justify-items: center;
  flex-wrap: wrap;
  background-color:black;
  padding: 4px;
  padding-bottom:28px;
  margin: 58px 90px 18px 100px;
  opacity: 0.9;
  @media (max-width: 675px) {
    display: flex;
    justify-content: start;
    justify-items: center;
    flex-wrap: wrap;
    padding: 2px;
    margin: 11px 10px 18px 10px;
  }
  @media (max-width:500px) {
    display: none;
  }
`;
const Look = styled.div`
  margin: 4px;
  h1 {
    font-size: 1em;
    font-weight: 400;
    line-height: 1em;
    color: #fff;
    margin-top: 0.7rem;
    margin-bottom: 0.3rem;
  }
  select {
    width: 200px;
    position: relative;
    overflow: hidden;
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 2px;
    box-sizing: border-box;
    color: #333;
    cursor: default;
    outline: none;
    padding: 5px 5px 5px 5px;
    transition: all 0.2s ease;
  }
  @media (max-width: 675px) {
    select {
      width: 180px;
      position: relative;
      overflow: hidden;
      background-color: #fff;
      border: 1px solid #ccc;
      border-radius: 2px;
      box-sizing: border-box;
      color: #333;
      cursor: default;
      outline: none;
      padding: 5px 5px 5px 5px;
      transition: all 0.2s ease;
    }
  }
`;

const Age = styled.div`
  margin: 4px;
  h1 {
    font-size: 1em;
    font-weight: 400;
    line-height: 1em;
    color: #f5f5f5;
    margin-top: 0.7rem;
    margin-bottom: 0.3rem;
  }
  select {
    width: 120px;
    position: relative;
    overflow: hidden;
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 2px;
    box-sizing: border-box;
    color: #333;
    cursor: default;
    outline: none;
    padding: 5px 5px 5px 5px;
    transition: all 0.2s ease;
  }
  @media (max-width: 675px) {
    select {
      width: 100px;
      position: relative;
      overflow: hidden;
      background-color: #fff;
      border: 1px solid #ccc;
      border-radius: 2px;
      box-sizing: border-box;
      color: #333;
      cursor: default;
      outline: none;
      padding: 5px 5px 5px 5px;
      transition: all 0.2s ease;
    }
  }
`;
const Religion = styled.div`
  margin: 4px;
  h1 {
    font-size: 1em;
    font-weight: 400;
    line-height: 1em;
    color: #f5f5f5;
    margin-top: 0.7rem;
    margin-bottom: 0.3rem;
  }
  select {
    width: 200px;
    position: relative;
    overflow: hidden;
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 2px;
    box-sizing: border-box;
    color: #333;
    cursor: default;
    outline: none;
    padding: 5px 5px 5px 5px;
    transition: all 0.2s ease;
  }
`;
const Mother = styled.div`
  margin: 4px;
  h1 {
    font-size: 1em;
    font-weight: 400;
    line-height: 1em;
    color: #f5f5f5;
    margin-top: 0.7rem;
    margin-bottom: 0.3rem;
  }
  select {
    width: 260px;
    position: relative;
    overflow: hidden;
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 2px;
    box-sizing: border-box;
    color: #333;
    cursor: default;
    outline: none;
    padding: 5px 5px 5px 5px;
    transition: all 0.2s ease;
  }
`;
const Let = styled.div`
  margin: 4px;
  > h1 {
    font-size: 1em;
    visibility: visible;
    font-weight: 400;
    line-height: 1em;
    color: black;
    margin-top: 0.7rem;
    margin-bottom: 0.3rem;
  }
  > a {
    text-decoration:none;  
  }
  >a  Button {
    width: 150px;
    background-color:#FFA500;
    height:32px;
    position: relative;
    overflow: hidden;
    border: 1px solid #FFA500;
    border-radius: 2px;
    box-sizing: border-box;
    color:white;
    cursor: default;
    outline: none;
    padding: 5px 5px 5px 5px;
    transition: all 0.2s ease;
  }
`;
