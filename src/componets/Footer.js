import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <>
    <FooterSection>
        <h1>
          © 1996-2022 TruShaadi.com, The World's Leading Matchmaking Service™
        </h1>
        <h1>Created By Sumit Jambharkar</h1>
      </FooterSection>
    </>
  )
}

export default Footer;
const FooterSection = styled.div`
  background-color:#00004F;
  display: flex;
  justify-content: space-around;
  > h1 {
    font-size: 16px;
    padding: 24px 24px;
    color: white;
  }
`;