import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Cadastro from './pages/Cadastro';
import Login from './pages/Login';
import Sobre from './pages/Sobre';
import ComoUsar from './pages/ComoUsar'
import Produtos from './pages/Produtos'
import Referencias from './pages/Referencias';
import Jogo from './pages/Jogo';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/comousar" element={<ComoUsar />} />
        <Route path="/produtos" element={<Produtos />} />
        <Route path="/referencias" element={<Referencias />} />
        <Route path="/jogo" element={<Jogo />} />
      </Routes>
    </Router>
  );
}

export default App;
