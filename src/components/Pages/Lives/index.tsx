import React, { useState } from 'react';
import Iframe from 'react-iframe';
import { Container,Iframes } from './styles';
import UniqueOverlay from '../../UniqueOverlay'


const Lives: React.FC = () => {

  const [Lives, setLives] = useState([
    {live:"https://www.youtube.com/embed/tSVJWRh-xLM",desc:'21/10 - ELLAS CONECTAM COM IRINEU DOS SANTOS'},
    {live:"https://www.youtube.com/embed/r0Vmj9hRjXM",desc:'14/10 - ELLAS CONECTAM COM MARCO AURÉLIO'},
    {live:"https://www.youtube.com/embed/CqllMMh9TRA",desc:'07/10 - ELLAS CONECTAM COM HENRIQUE AKIBA'},
    {live:"https://www.youtube.com/embed/2Bb4J0crBNo",desc:'30/09  - PRIMEIRO PROGRAMA ELLAS CONECTAM'},
    {live:"https://www.youtube.com/embed/3S_fpWCnJ98",desc:'CHAMADA EMPYRUS TV'},
    {live:"https://www.youtube.com/embed/96Gt1EC9TD",desc:'VINHETA ELLAS CONECTAM'},
    
    
    
   
  ]);

  return (
    <Container>
      <Iframes>
        {Lives.map((modelName) => (
        <div className='teste'>
          <Iframe url={modelName.live}
            width="200px"
            height="200px"
            id="MyIframe"
            className="MyIframe"
            display='inline'
            position="relative" 
            allowFullScreen />
           <h1>{modelName.desc}</h1>
        </div>
          ))}
        </Iframes>
      <UniqueOverlay/>
    </Container>
  );
};

export default Lives;
