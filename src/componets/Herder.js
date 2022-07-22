import React from 'react';
import styled from 'styled-components';
import images2 from "../image/logos.png";

const Herder = () => {
  return (
    <>
    <Head>
    <div class="logoS"><img src={images2}/></div>
     <p style={{paddingLeft:"15px"}}>Free Membership</p>
    </Head>
    </>
  )
}

export default Herder;
const Head = styled.div`
display:flex;
justify-content:space-around;
margin:12px;
> h1 {
    font-family:romon
}
`