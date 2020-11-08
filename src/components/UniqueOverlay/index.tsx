import React from 'react';

import { Container, Header, Logo ,Burguer, Footer} from './styles';

const UniqueOverlay: React.FC = () => {
  return (
    <Container>
      <Header>
        <Logo>
          <img src="img/ELLAS_SEMFUNDO.png" alt="Logo EllasConectam"/>
        </Logo>
        <Burguer/>
      </Header>

      <Footer>
        <ul>
          <li>
            <a href="#">teste</a>
          </li>
          <li>
            <a href="#">teste</a>
          </li>
          <li>
            <a href="#">teste</a>
          </li>
          <li>
            <a href="#">teste</a>
          </li>
        </ul>
      </Footer>
    </Container>
  );
};

export default UniqueOverlay;
