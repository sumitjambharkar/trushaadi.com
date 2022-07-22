import React from 'react';
import Head from './Head';
import Abouts from './Abouts';
import Story from './Story';
import Main from './Main';
import Footer from './Footer';
import styled from '@emotion/styled';
<<<<<<< HEAD

=======
>>>>>>> a9ae8bd70ff8c46d04dec21ad049f5e345aadb4d

const Home = () => {
  return (
    <>
    <Head/>
    <Section>
    <Main/>
    <Story/>
    <Abouts/>
    <Footer/>
    </Section>
    </>
  )
}

export default Home;

const Section = styled.div`
@media (max-width:500px) {
  
}`