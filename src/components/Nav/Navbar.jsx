import React from 'react';
import styled from 'styled-components';
import Burger from './Burger';

const Nav = styled.nav`
  width: 100%;
  height: 90px;
  border-bottom: 2px solid #f1f1f1;
  padding: 0 5px;
  display: flex;
  justify-content: space-between;

  .logo {
    >img{
      max-height:120px;
      max-width:120px;
      top:0;
    }
  }
  @media (max-width: 900px){
    height: 90px;
    .logo {
      >img{
        max-height:90px;
        max-width:90px;
      }
    }
  }
  @media (max-width: 500px){
    border-bottom: 0;
    .logo {
      
      >img{
        padding: 0 0;
        max-height:100px;
        max-width:100px;
      }
    }
  }

`

const Navbar = () => {
  return (
    <Nav>
      <div className="logo">
          <img src="img/ELLAS_SEMFUNDO.png" alt="Logo EllasConectam"/>
      </div>
      <Burger />
    </Nav>
  )
}

export default Navbar
