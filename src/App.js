import React from 'react';

import Routes from './routes';
import Menu from './menu';
import Status from './status';

function App() {
  return (
    <div className="container">
        <Menu />
        <Routes />
        <Status status="Quinto Projeto - Configuração de Paginação" />
    </div>
  );
}

export default App;
