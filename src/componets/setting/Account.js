import React from 'react';
import Footer from '../Footer';
import UseNav from '../UseNav';
import Setting from './Setting';
import styled from 'styled-components';


const Email = () => {
  return (
    <>
    <UseNav/>
    <Section>
    <Setting />
    <EmailId>
    <p style={{color:"black",fontWeight:"600"}}>My Account</p>
    <label>Email</label>
    <input placeholder='Email' />
    <label>Password</label>
    <input placeholder='Password' />
    </EmailId>
    </Section>
    <Footer/>
    </>
  )
}

export default Email;

const Section = styled.div`
display:flex`

const EmailId = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
margin:20px;
> label {
    color:gray;
}
> input {
    margin: 4px;
    padding: 6px;
    width: 250px;
    border: 1px solid #dfe0e3;
}`