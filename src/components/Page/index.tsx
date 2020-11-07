import React from 'react';
import DefaultOverlayContent from '../DefaultOverlayContent';
import {ModelsWrapper, ModelSection} from '../Model';
import { Container } from './styles';
import UniqueOverlay from '../UniqueOverlay'

const Page: React.FC = () => {
  return (
    <Container>
      <ModelsWrapper>
        <div>
          {[
            'Proposito',
            'Responsabilidade Social',
            'Programa multi plataforma',
          ].map(modelName => (
            <ModelSection
              key={modelName}
              className='colored'
              modelName={modelName}
              overlayNode={
                <DefaultOverlayContent label={modelName}
                description="tt"/>
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
