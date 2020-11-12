import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Page from './components/Page';
import Equipe from './components/Pages/Equipe'
import Lives from './components/Pages/Lives'
import Investidores from './components/Pages/Investidores'
import { GlobalStyles } from './styles/GlobalStyles';

function App() {
  return (
    <>
    <BrowserRouter>
      <Route exact path='/' component={Page}/>
      <Route path='/equipe' component={Equipe}/>
      <Route path='/lives' component={Lives}/>
      <Route path='/Patrocinadores' component={Investidores}/>
    </BrowserRouter>
      <GlobalStyles/>
    </>
  );
}

export default App;
