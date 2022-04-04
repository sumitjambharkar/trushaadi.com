import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Footer from './Footer';

const Steptwo = () => {
  return (
    <>
    <Header>
        <h1>Trushaddi.com</h1>
    </Header>
    <CreateSection>
        <Card>
         <Form>
             <h1>Just a few questions your about education & career</h1>
             <label>Your highest qaulification *</label>
             <input placeholder='Enter the city you live in' type="text" />
             <label>Your collage name</label>
             <input placeholder='Enter your collage' type="text" />
             <label>Your work with</label>
             <select>
                 <option value="">Bussiness</option>
                 <option value="">Self Employed</option>
             </select>
             <label>Your monthly income</label>
             <input placeholder='Enter your income' type="text" />
             <button><Link to="/top-matches">Continue</Link></button>
             
         </Form>
        </Card>
    </CreateSection>
    <Footer/>
    </>
  )
}

export default Steptwo;
const Header = styled.div`
display:flex;
justify-content:space-around;
margin:12px;
> h1 {
    font-family:romon
}`
const CreateSection = styled.div`
background-color:#E8E8E8;
display:flex;
justify-content:center;
padding-top:24px;`
const Card = styled.div`
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
background-color:white;
margin-bottom:24px;
border-radius:6px;
`
const Form = styled.div`
padding: 20px 20px 20px 20px;
display:flex;
height:auto;
flex-direction:column;
> h1 {
    font-size:28px;
    font-weight:400;
}
>label {
    margin-bottom:8px;
    padding:5px;
}
>input {
    margin-bottom:8px;
    padding:5px;
    border:1px solid #FFA500;
}
> input:focus {
    outline:none;
}
>select {
    margin-bottom:8px;
    padding:5px;
    border:1px solid #FFA500;
    outline:none;
}
>button {
    margin-top:8px;
    height:40px;
    background-color:#FFA500;
    border:1px solid #FFA500;
    color:white;
    font-weight:700;

}
>button a {
    text-decoration:none;
    color:white;
}`