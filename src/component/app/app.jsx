import React from 'react'

import { StyledRouter } from "./app.style";
import Home from '../home/home';

const App = () => {
  return (
    <StyledRouter>
      <Home path='/'/>
    </StyledRouter>
  );
};

export default App;
