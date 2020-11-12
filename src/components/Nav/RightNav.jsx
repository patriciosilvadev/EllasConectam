import React from 'react';
import styled from 'styled-components';

import {useHistory} from 'react-router-dom';

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;

  li {
    padding: 18px 10px;
    > button{
      border-radius:10px;
      font-size: 20px;
      color: black;
      background-color: transparent;
      border: none;
      padding: 10px 10px;
    }
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #0D2538;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;

    li {
      color: #fff;
      > button{
        color: white;
      }
    }
  }
`;

const RightNav = ({ open }) => {
  const history = useHistory();
  return (
    <Ul open={open}>
      <li><button onClick={() => history.push('/')}>Home</button></li>
      <li><button onClick={() => history.push('/equipe')}>Equipe</button></li>
      <li><button onClick={() => history.push('/Lives')}>Lives</button></li>
      <li><button onClick={() => history.push('/Patrocinadores')}>Patrocinadores</button></li>
    </Ul>
  )
}

export default RightNav
