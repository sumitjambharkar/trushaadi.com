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
      "detail": "Become a Premium Member & Start a Conversation"
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
                <Link to="/signup">
                <img alt="" style={{ width: "140px", borderRadius: "50%", backgroundColor: "aqua" }} src={ele.img} />
                </Link>
                </Image>
                <Title>
                <Link to="/signup">
                <p>{ele.name}</p>
                </Link>
                </Title>
                <Span>
                  <p>{ele.detail}</p>
                </Span>
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
  }`
const Span = styled.p`
  text-align:center;
  font-size: 16px;
  font-weight: normal;
  color: #72727d;`