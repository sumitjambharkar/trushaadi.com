import React from 'react';
import Head from './Head';
import Story from './Story';
import Main from './Main';
import Footer from './Footer';
import styled from '@emotion/styled';


const Home = () => {
  return (
    <>
    <Head/>
    <Section>
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