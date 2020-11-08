import React from 'react';

import { Container, Heading, Buttons, Img } from './styles';

function Selection(descript: string){
    if(descript === 'O que podemos fazer pela sua marca?'){
      return <div className='DivSubjectAll'>
        <div className="Divs">
          <h1>Ellas 1</h1>
          <h2>Intervalo de 30“ 1 inserção por programa (4 inserções por mês)</h2>
          <h2>----------*----------</h2>
        </div>
        <div className="Divs">
          <h1>Ellas 2</h1>
          <h2>Intervalo de 30“ 2 inserções por programa (8 inserções por mês)</h2>
          <h2>----------*----------</h2>
        </div>
        <div className="Divs">
          <h1>Ellas 3</h1>
          <h2>1 Entrevista de 25 min + Intervalo de 30“ 1 inserção por programa (4 inserções por mês)</h2>
          <h2>----------*----------</h2>
          <h2>Todas as cotas são trimestrais e estão inclusas: 1 post em todas as redes sociais + 1 vídeo* no canal do Youtube</h2>
        </div>
        
      </div>
    }else{

      return <h2>{descript}</h2>
    }
}

function SrcImg(descript: string){
  switch(descript){
    case 'Proposito':
        return <img src='img/Karyn Paiva.jpg' alt='Karyn Paiva'></img>
    case 'Responsabilidade Social':
      return <img src='img/Daniela Reigado.jpg' alt='Daniela Reigado'></img>
    case 'Programa multi plataforma':
      return  <img src='img/Eleonora Seidel.jpg'alt='Eleonora Seidel'></img>
    case'O que podemos fazer pela sua marca?': 
      return  <img src='img/Juma Amorim.jpg'alt='Juma Amorim'></img>
  }
}

interface Props{
  label: string,
  description: string
}


const DefaultOverlayContent: React.FC<Props> = ({
  label, description
}) => {
  return (
    <Container>
      <Heading>
        <Img>
          {SrcImg(label)}
        </Img>
        <h1>{label}</h1>
        {Selection(description)}
      </Heading>
      <Buttons>
        <button className='black'>Entrar em contato</button>
        <button className='white'>Conhecer a equipe</button>
      </Buttons>
    </Container>
  );
};

export default DefaultOverlayContent;
