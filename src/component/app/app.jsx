import React from 'react'

import { StyledRouter } from "./app.style";
import Home from '../home/home';
import Postcode from '../postcode/postcode';

const App = () => {
  return (
    <StyledRouter>
      <Home path='/'/>
      <Postcode path='/find/:postcode'/>
    </StyledRouter>
  );
};

export default App;
