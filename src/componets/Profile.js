import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';


const Profile = () => {
  return (
    <>
    <Header>
        <h1>Trushaddi.com</h1>
    </Header>
    <CreateSection>
        <Card>
         <Form>
             <h1>Let's Create Your Profile Now</h1>
             <label>City you live in *</label>
             <input placeholder='Enter the city you live in' type="text" />
             <label>you live with your family</label>
             <select>
                 <option value="">Yes</option>
                 <option value="">No</option>
             </select>
             <label>your Marital Status</label>
             <select>
                 <option value="">Neverd</option>
             </select>
             <label>your diet</label>
             <select>
                 <option value="">veg</option>
             </select>
             <label>your height</label>
             <select>
                 <option value="">your height</option>
             </select>
             <button><Link to="/profile/step/2">Continue</Link></button>
             
         </Form>
        </Card>
    </CreateSection>
    <Footer>
        <h1>© 1996-2022 TruShaadi.com, The World's Leading Matchmaking Service™</h1>
        <h1>Created By Sumit Jambharkar</h1>
    </Footer>
    </>
  )
}

export default Profile;
const Header = styled.div`
display:flex;
justify-content:space-around;
margin:12px;
> h1 {
    font-family:romon
}`
const CreateSection = styled.div`
background-color:aqua;
display:flex;
justify-content:center;
padding-top:24px;`
const Card = styled.div`
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
background-color:white;
border-radius:6px;
margin-bottom:24px;
`
const Form = styled.div`
padding: 20px 20px 20px 20px;
display:flex;
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
}
>select {
    margin-bottom:8px;
    padding:5px;
}
>button {
    margin-top:8px;
    height:40px;
    background-color:aqua;
    border:1px solid aqua;
    color:white;
    font-weight:700;

}
>button a {
    text-decoration:none;
    color:white;
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
