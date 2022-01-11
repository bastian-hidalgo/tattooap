import React from 'react';
import ReactDOM from 'react-dom';
import { TattooApp } from './TattooApp';
import './styles/styles.scss'
import { StoreProvider } from './store/Store';

//Método render que se encarga de renderizar la aplicación <TattooApp />

ReactDOM.render(
  <StoreProvider>
    <TattooApp />
  </StoreProvider>,
  document.getElementById('root')
);
