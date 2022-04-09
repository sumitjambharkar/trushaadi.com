import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import UseNav from './UseNav';

const Tellus = () => {

  return (
    <>
    <UseNav/>
    <Details className='container'>
    <Link to="/">Featured Success Stories</Link>
    <Link to="/video">Videos Stories</Link>
    <Link to="/tellus">Tell Us Your Story</Link>
    </Details>
    <Welcome className='container'>
     <h1>Thank you for sharing your Story with us!</h1>
     <TellUsCard>
      <p>Lorem ipsum do Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione ad magni voluptatum aliquam? Placeat quas, quasi animi saepe nulla tempore deserunt ducimus deleniti optio, inventore assumenda est maiores, omnis quae? lor sit amet consectetur, adipisicing elit. Totam reiciendis ullam possimus enim quas repellendus nihil? Rem unde sapiente reiciendis ab! Repellat est facere, aliquam vitae officia fugit sed a.</p>
     <hr />
     <Company>
         <img style={{width:"100px",marginRight:"24px"}} src="https://img.shaadi.com/success-story/2SH09514809-hSH27371565-big.jpg" alt="" />
         <pre>
         <p>Best Wishes</p>
         <span>Founder TruShaddi.com</span>
         <p>Anupan Vittal</p>
         </pre>
     </Company>
     <p>Give us Detail of you and your partner</p>
     <Input>
     <input placeholder='Your Name' type="text" />
     <input placeholder='Your Partner Name' type="text" />
     </Input>
     <Input>
     <input placeholder='Your Email Id' type="text" />
     <input placeholder='Your Partner Email Id' type="text" />
     </Input>
     <Input>
     <input placeholder='When did you first meet ?' type="text" />
     <input placeholder='Your Wedding Date' type="text" />
     </Input>
     <Input>
     <input placeholder='Tell us how you meet each other on TruShaddhi.com' type="text" />
     </Input>
     <Input>
     <label>Your Couple or Weddding Photos</label>
     <input type="file" />
     </Input>
     <Checkbox>
     <input type="checkbox" /> I agree to Teams & Conditions.
     </Checkbox>
     <h3><button>Submit</button></h3>
     </TellUsCard> 
    </Welcome>
    <Footer>
        <h1>© 1996-2022 TruShaadi.com, The World's Leading Matchmaking Service™</h1>
        <h1>Created By Sumit Jambharkar</h1>
    </Footer>
    </>
  )
}

export default Tellus;

const Details = styled.div`
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
display:flex;
justify-content:start;
margin-top:24px;
a{
    color:black;
    text-decoration:none;
    padding:16px;
    display:flex;
    font-weight:700;
    font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif

}
a:active{
    color:red;
}`
const Welcome = styled.div`
padding:24px;
> h1 {
    text-align:center;
    color:#72727D;
    margin-bottom:12px;
}
> p {
    text-align:center;
    color:#72727D;
}`
const Footer = styled.div`
background-color:gray;
display:flex;
justify-content:space-around;
> h1 {
    font-size:16px;
    padding:24px 24px;
    color:white;
}`
const TellUsCard = styled.div`
background-color:white;
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
padding:12px;
> p {
    text-align:center;
}
> h3 {
    text-align:center;
    
}
> h3 > button {
    background-color:aqua;
    color:white;
    padding:4px;
    width:150px;
    border:1px solid aqua;
    border-radius:8px;
    margin:12px;
}`
const Company = styled.div`
display:flex;
justify-content:center;
margin:12px;
align-items:center;`
const Input = styled.div`
display:flex;
justify-content:center;
margin:12px;
align-items:center;
> input {
    width:300px;
    margin:6px;
    padding:2.5px;
    border-radius:4px;
    border:0.2px solid gray;
}
input:focus {
    outline: none !important;
} 
@media (min-width:430px) {
    >input {
    margin:6px;
    padding:2.5px;
    border-radius:4px;
    border:0.2px solid gray;
}   
}
`
const Checkbox = styled.div`
display:flex;
justify-content:center;
align-items:center;
> input {
    margin:6px;
}`