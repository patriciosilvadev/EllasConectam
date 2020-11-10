import React from 'react';

import { Container, Header} from './styles';

import Navbar from '../Nav/Navbar';




const UniqueOverlay: React.FC = () => {
  return (
    <Container>
      <Header>
        <Navbar></Navbar>
      </Header>
    </Container>
  );
};

export default UniqueOverlay;
