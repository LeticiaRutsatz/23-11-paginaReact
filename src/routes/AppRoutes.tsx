import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from '../pages/Home';
import {ThemeProvider} from 'styled-components'
import meuTema from '../config/theme';

function AppRoutes(){
    return(
        <ThemeProvider theme={meuTema.dark}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
    );
};

export default AppRoutes