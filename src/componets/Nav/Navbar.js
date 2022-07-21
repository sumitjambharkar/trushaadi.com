import React from 'react';
import styled from 'styled-components';
import Burger from './Burger';

const Nav = styled.nav`
  background-color: #FFA500;
  width: 100%;
  height: 55px;
  border-bottom: 2px solid #f1f1f1;
  padding: 0 20px;
`

const Navbar = () => {
  return (
    <Nav>
      <Burger />
    </Nav>
  )
}

export default Navbar