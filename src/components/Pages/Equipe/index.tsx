import React from 'react';
import UniqueOverlay from '../../UniqueOverlay'
import { Container, Content } from './styles';

const Equipe: React.FC = () => {
  return (
    <Container>
      <Content>
        <h1>Equipe</h1>
        <img src='img/FOTO PARA O ENCERRAMENTO.png' alt='Foto da equipe ellasconectam'/>
        <div className='subscrib'>
          <div className='change'>
            <img src='img/Daniela Reigado.jpg' alt=''/>
            <h1>Daniela U. Reigado</h1>
            <h2>Consultora e Mentora em gestão empresarial com foco em treinamento e
                desenvolvimento de pessoas e inovação estratégica de negócios.
            </h2>
          </div>
          <div className='change1'>
            <img src='img/Juma Amorim.jpg' alt=''/>
            <h1>Juma Amorim</h1>
            <h2>Empresária e Executiva
              com forte atuação nas áreas de Controladoria, Finanças, Contábil,
              Impostos, Sistemas e Projetos, Diretora do Grupo FFC.
            </h2>
          </div>
          <div className='change2'>
            <img src='img/Eleonora Seidel.jpg' alt=''/>
            <h1>Eleonora Ch. Seidel</h1>
            <h2>Jornalista, Diretora da ECS Comunicação Integrada é especialista no
                Gerenciamento de Redes Sociais e Assessoria de Imprensa. Sócia da A Casa Delas Home Décor.
            </h2>
          </div>
          <div className='change3'>
            <img src='img/Karyn Paiva.jpg' alt=''/>
            <h1>Karyn Paiva</h1>
            <h2>Jornalista, Colunista e Apresentadora também atua como mediadora em
              eventos corporativos. Como Influenciadora Digital antecipa as tendências de mercado.
            </h2>
          </div>
        </div>
      </Content>
      <UniqueOverlay/>
    </Container>
  );
};

export default Equipe;
