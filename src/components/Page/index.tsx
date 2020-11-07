import React from 'react';
import DefaultOverlayContent from '../DefaultOverlayContent';
import {ModelsWrapper, ModelSection} from '../Model';

import { Container } from './styles';

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
                description="teste"/>
              }
            />
          ))}
          
        </div>
      </ModelsWrapper>
    </Container>
  );
};

export default Page;
