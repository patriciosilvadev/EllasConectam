import React from 'react';
import DefaultOverlayContent from '../DefaultOverlayContent';
import {ModelsWrapper, ModelSection} from '../Model';
import { Container } from './styles';
import UniqueOverlay from '../UniqueOverlay'

const Page: React.FC = () => {
  
  function Subject(name: string) {

    switch(name){
      case'Proposito':
          return "O Programa Ellas Conectam nasceu com o propósito da Conexão. Queremos ser mais que apenas um programa de empreendedorismo. Nós queremos contar histórias com um olhar sensível e ao mesmotempo aguçado de quem vive essa desafiante realidade de ser empreendedor em nosso país. Queremos trazer lições reais e altamente práticas sobre negócios, por meio de convidados com lindas e também duras trajetórias de sucesso por meio de uma curadoria de conteúdos de valor e que façam a diferença na vida dos espectadores.O Programa tem um time formado por quatro apresentadoras que também são empresárias de São Caetano do Sul."
      case'Responsabilidade Social':
        return 'Além do Empreendedorismo o nosso foco é também na Responsabilidade Social. Seguindo o nosso propósito, queremos conectar também a visão empreendedora com a educação empreendedora. Ambos serão os pilares do programa ELLAS. Por meio de nossas plataformas de comunicação, conseguiremos alcançar e dar voz a todas as empresas que, de alguma forma fazem ou querem fazer a diferença na vida dos empresários e de futuros empreendedores da região do ABC .'
      case'Programa multi plataforma':
          return '  Exibido semanalmente pela TV Empirus/ VOX TV - Canal 3 da NET, o programa também pode ser acompanhado por meio das redes sociais - Instagram e Facebook @ellasconectam e pelo Canal no YouTube - Ellas Conectam. Com o programa disponível nas principais plataformas digitais é possível ter acesso ao conteúdo exibido originalmente ao vivo qualquer hora do dia e em qualquer lugar (On-Demand).'
      case'O que podemos fazer pela sua marca?': 
          
      return name

      default: return 'text'    
    }
  }

  
  return (
    <Container>
      <ModelsWrapper>
        <div>
          {[
            'Proposito',
            'Responsabilidade Social',
            'Programa multi plataforma',
            'O que podemos fazer pela sua marca?'
          ].map((modelName) => (
            <ModelSection
              key={modelName}
              className='colored'
              modelName={modelName}
              overlayNode={
                <DefaultOverlayContent label={modelName}
                description={Subject(modelName)}/>
              }
            />
          ))}
        </div>
        <UniqueOverlay/>
      </ModelsWrapper>
      
    </Container>
  );
};

export default Page;
