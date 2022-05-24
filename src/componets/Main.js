import React from 'react'
import styled from "styled-components";
import first from '../image/home-icon-sprite.png';
import secand from '../image/home-icon-sprite-p.png';
import third from '../image/home-icon-sprite-c.png';
import { Link } from "react-router-dom";

const Main = () => {
  const array = [
    {
      "img": first,
      "name": "Sign up",
      "detail": "Register for free & put up your Profile"
    },
    {
      "img": secand,
      "name": "Connect",
      "detail": "Select & Connect with Matches you like"
    },
    {
      "img":third,
      "name": "Interact",
      "detail": "Become a Premium Member & Start"
    }
  ]
  return (
    <>
    <MainContainer>
      <h1 style={{ textAlign: "center", marginTop: "5rem", color: "#FFA500", fontWeight: "500" }}>Find your Special Someone</h1>
      <Selection>
        {array.map((ele,i) => {
          return (
            <React.Fragment key={i}>
              <SingDiv >
                <Image>
                {/* <Link to="/signup"> */}
                <img alt=""  src={ele.img} />
                {/* </Link> */}
                </Image>
               
                <Span>
                  <p>{ele.detail}</p>
                </Span>

                <Title>
                <Link to="/signup">
                {ele.name}
                </Link>
                </Title>
              </SingDiv>
            </React.Fragment>
          )
        })}

      </Selection>
      </MainContainer>
    </>
  )

}

export default Main;

const MainContainer = styled.div`
@media (min-width: 300px) and (max-width:600px) {
    padding-top:150px;
}
@media (min-width:600px) and (max-width:830px) {
    padding-top:60px;
}`

const Selection = styled.div`
  display:flex;
  justify-content:center;
  flex-wrap: wrap;
  margin-top:3rem;
  margin-bottom:4rem;
  `
const SingDiv = styled.div`
  align-content: center;
  margin:2rem
  `
const Image = styled.div`
  display:flex;
  justify-content:center;
  margin-bottom:2rem;
  transition: 0.5s;

  >img{
    width: 140px;
    border-radius: 50%;
    transition: 1s;
    border: 2px solid #FF0000;
  }
  >img:hover{
  /* transform: scale(1.1); */
  transform: rotate(360deg);
  }
  

`


const Title = styled.p`
  text-align:center;
  color: #00bcd5;
  font-size: 24px;
  font-weight: 400;
 
  > a {
    text-decoration:none;
    text-align:center;
    color:red;
    font-size: 24px;
    font-weight: 400;
    /* background: #000; */
    /* margin: 35px; */
    padding: 5px 25px;
    border-radius: 15px;
    position: relative;
    
  }
  > a::before {
    position: absolute;
    content: '';
    width: 0%;
    top: 100%;
    left: 15%;
    transition:0.5s ;
  }
  > a:hover::before{
    width: 70%;
    border-bottom: 3px solid #000;  
  }
 
  `
const Span = styled.p`
  text-align:center;
  font-size: 16px;
  font-weight: normal;
  color: #72727d;`
  