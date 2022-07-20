import React from 'react';
import Head from './Head';
import Story from './Story';
import Main from './Main';
import Footer from './Footer';
import styled from '@emotion/styled';
import Navbar from './Nav/Navbar';


const Home = () => {
  return (
    <>
    <Head/>
    <Section>
      <Navbar/>
    <Main/>
    <Story/>
    <Footer/>
    </Section>
    </>
  )
}

export default Home;

const Section = styled.div`
@media (max-width:500px) {
  
}`