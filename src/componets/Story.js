import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { db } from "./firebase"
import { Button } from '@mui/material';
import AOS from "aos";
import "aos/dist/aos.css";
import Loginn from './Loginn'
AOS.init();

const Story = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        db.collection("success").onSnapshot((snapshot)=>{
            setData(snapshot.docs.map((doc)=>({
                id : doc.id,
                data : doc.data()
            })))
        })
    }, [])

    return (
        <>
            <Title>
                <h2>Matrimony Service with Millions of Success Stories</h2>
            </Title>
            <StorySection className='container'>
                {data.map((ele,i) => {
                    return (
                        <React.Fragment key={i}>
                            <StoryDiv>
                                <StoryImage >
                                    <span>
                                    </span>
                                    <img alt='img'  src={ele.data.image} />
                                   
                                </StoryImage>
                                
                                <StoryDetails data-aos="flip-up" data-aos-duration="1800">
                                    <p></p>
                                    <h3>{ele.data.name}</h3>
                                    <p>
                                        {" "}<Link to={`/couple/${ele.id}`}>...Read more</Link>
                                    </p>
                                </StoryDetails>
                            </StoryDiv>

                        </React.Fragment>
                    )
                })}
            </StorySection>
            <SectionButton>
                <span>Your story is waiting to happen!</span>
                <Button data-aos="zoom-in-down" data-aos-duration="1500"><Link><span style={{position:'absolute',opacity:0}}><Loginn/></span>Get Started</Link></Button>
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
    color:#FFA500;

}
`
const StorySection = styled.div`
   display:flex;
   justify-content:space-around;
   flex-wrap:wrap;`

const StoryDiv = styled.div`
   width:330px;
   height:380px;
   margin: 24px;
   padding:4px;
   box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

   
   `

const StoryImage = styled.div`
   > img {
       
       width: 320px;
       height:285px;
       position: relative;
       overflow: hidden !important;
       
   }

   span{
       content: '';
       position: absolute;
       width: 293px;
       height:260px;
       margin: 12px;
       background: #0008;
       z-index: 1;
       opacity: 0;
       transition: 0.5s;
   }


   span:hover{
     opacity: 100%;
     transform: scale(1.1);
   }

   

`

const StoryDetails = styled.div`
  width:330;
  height:250px;
  
  >h3{
    margin-top: 15px;
    font-size: 22px;
    line-height: 22px;
    text-align:center;
    color:#FFA500;
  }
   >p{
    font-size: 15px;
    font-weight:500;
    color: #72727d;
    text-align:center;
    margin:4px;
   }
   >p >a {
       text-decoration:none;
       text-align:center;
       
   }`

const SectionButton = styled.div`
   background-color:#FFA500;
   display:flex;
   min-height: 113px;
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
   >Button {
    font-size:24px;
    color:white;
    margin-top: 0;
    margin-bottom: 0;
    padding:6px;
    border:2px solid white;
    border-radius:4px;

   }

   > Button a {
       text-decoration:none;
       color:white;
   }
   @media (max-width:575px) {
    padding-bottom:20px;
   }
  
   `
export default Story;