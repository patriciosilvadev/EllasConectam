import React from 'react';

import { Container, Header, Logo ,Burguer, Footer} from './styles';

const UniqueOverlay: React.FC = () => {
  return (
    <Container>
      <Header>
        <Logo/>
        <Burguer/>
      </Header>

      <Footer>
        <ul>
          <li>
            <a href="#"></a>
          </li>
          <li>
            <a href="#"></a>
          </li>
          <li>
            <a href="#"></a>
          </li>
          <li>
            <a href="#"></a>
          </li>
        </ul>
      </Footer>
    </Container>
  );
};

export default UniqueOverlay;
