import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';




const Story = () => {
    return (
        <>
            <Title>
                <h2>Matrimony Service with Millions of Success Stories</h2>
            </Title>
            <StorySection>
                <StoryDiv>
                    <StoryImage>
                        <img alt='img' style={{width:"320px",height:"250px"}} src="https://img.shaadi.com/success-story/2SH09514809-hSH27371565-big.jpg" />
                    </StoryImage>
                    <StoryDetails>
                        <h3>VAIBHAV AND ALKA</h3>
                        <p>
                            {" "}<Link to="couple">...Read more</Link>
                        </p>
                    </StoryDetails>
                </StoryDiv>
                <StoryDiv>
                    <StoryImage>
                        <img alt='img' style={{width:"320px",height:"250px"}} src="https://img.shaadi.com/success-story/2SH09514809-hSH27371565-big.jpg" />
                    </StoryImage>
                    <StoryDetails>
                        <h3>VAIBHAV AND ALKA</h3>
                        <p>
                            {" "}<Link to="couple">...Read more</Link>
                        </p>
                    </StoryDetails>
                </StoryDiv>
                <StoryDiv>
                    <StoryImage>
                        <img alt='img' style={{width:"320px",height:"250px"}} src="https://img.shaadi.com/success-story/2SH09514809-hSH27371565-big.jpg" />
                    </StoryImage>
                    <StoryDetails>
                        <h3>VAIBHAV AND ALKA</h3>
                        <p>
                            {" "}<Link to="couple">...Read more</Link>
                        </p>
                    </StoryDetails>
                </StoryDiv>
            </StorySection>
            <SectionButton>
            <span>Your story is waiting to happen!</span>
            <p><Link to='/signup'>Get Started</Link></p>
            </SectionButton>
        </>
    )


}
const Title = styled.div`
>h2 {
    font-size: 35px;
    text-align:center;
    margin-top:70px;
    margin-bottom:70px;
    color:red;

}
`
const StorySection = styled.div`
   display:flex;
   justify-content:space-around;
   flex-wrap:wrap;`

const StoryDiv = styled.div`
   width:330px;
   height:320px;
   margin: 24px;
   padding:4px;
   box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;`

const StoryImage = styled.div``

const StoryDetails = styled.div`
  width:330;
  height:250px;
  
  >h3{
    font-size: 22px;
    line-height: 22px;
    text-align:center;
  }
   >p{
    font-size: 15px;
    font-weight:500;
    color: #72727d;
    text-align:center;
   }
   >p >a {
       text-decoration:none;
       text-align:center;
       
   }`

   const SectionButton = styled.div`
   background-color:red;
   display:flex;
   justify-content:center;
   justify-items:center;
   flex-wrap:wrap;
   align-items:center;
   margin-top:36px;
   >span {
       font-size:24px;
       padding:28px;
       color:white;
   }
   >p {
    font-size:24px;
    color:white;
    margin-top: 0;
    margin-bottom: 0;
    padding:8px;
    border:2px solid white;
    border-radius:4px;
    transition:padding 2s;
   }
   > p a {
       text-decoration:none;
       color:white;
   }
    >p :hover {
    
    color:white;
    padding:4px;
    cursor:pointer;
  }
  
   `
export default Story;