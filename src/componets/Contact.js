import React from 'react'
import UseNav from './UseNav';
import Footer from './Footer';
import styled from 'styled-components';
import style from 'radium/lib/components/style';


const Contact = () => {
  return (
    <>
    <UseNav/>
    <Head>
        <h3>Contact Us</h3>
        <h5>contact us if you have any query or concern.</h5>
    </Head>
    <Feed>
        <Address>
            <button>TruShaadi</button>
            <span>Address</span>
            <h4>A-11/F-2, Block-A Dilshad Garden Delhi-110095 New Delhi. India</h4>
            <span>Email Id</span>
            <h4>trushaadi@gmail.com</h4>
            <span>Contact No</span>
            <h4>+918898699498</h4>
        </Address>
        <FeedBack>
            <span>Fill form for enquiry or concern.</span>
            <input placeholder='Enter Your Name'/>
            <input placeholder='Enter Your Email Id'/>
            <input placeholder='Enter Your Mobile No'/>
            <input placeholder='Enter Subject'/>
            <input placeholder='Enter Message Here'/>
            <button>Submit</button>
        </FeedBack>
    </Feed>
    <Footer/>
    </>
  )
}

export default Contact;

const Head = styled.div`
text-align:center;
> h3 {
    font-size: 22px;
    font-family: 'Poppins', sans-serif;
    margin:30px;
}
> h5 {
    font-size: 16px;
    font-family: 'Poppins', sans-serif;
    margin:30px;
}`;
const Feed = styled.div`
display:flex;
justify-content:space-evenly;
flex-wrap:wrap;`
const Address = styled.div`
display:flex;
justify-content:start;
flex-direction:column;

button {
    padding:4px;
    margin-bottom: 12px;
    font-size:24px;
    height: calc(2.5rem);
    width:435px;
    border: 1px solid #ffa500;
    background-color:#ffa500;
    color:white;

}
> span {
    font-size: 13px;
    margin-bottom: 5px;

}
> h4 {
    font-size: 1.1rem;
    margin-bottom: 1rem;
    margin-top: 0px;
    color: #FFA500;
    word-break: break-word;
}
`
const FeedBack = styled.div`
display:flex;
justify-content:start;
flex-direction:column;
> span {
    margin-top: 0px;
    margin-bottom: 5px;
    text-align: center;
    font-family: 'Poppins', sans-serif;
    color: #525252;
}
> input {
    margin:12px;
    padding:4px;
    font-size: 0.9rem;
    border-radius: 0.15rem;
    height: calc(2.5rem);
    width:435px;
    border: 1px solid #ffa500;
    outline:none;
}
> button {
    margin:12px;
    padding:4px;
    font-size: 0.9rem;
    border-radius: 0.15rem;
    height: calc(2.5rem);
    width:435px;
    border: 1px solid #ffa500;
    background-color:#ffa500;
    color:white;

}`