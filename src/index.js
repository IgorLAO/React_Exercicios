import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Compras from './pages/listadeCompras';
import ListaAluno from './pages/alunosPerfis';
import Calc from './pages/calculadoraJurosComposto/calc';
import Sorveteria from './pages/sorvete/sorv';
import Instagram from './pages/instagram/insta';
import Cinema from './pages/cine/App';
import Netflix from './pages/netflix/netflix';
import Marvel from './pages/marvel/marvel';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<App/>}/>
    <Route path='/compras' element={<Compras/>} />
    <Route path='/alunos' element={<ListaAluno/>} />
    <Route path='/IMDB' element={<Cinema/>} />
    <Route path='/calc' element={<Calc/>} />
    <Route path='/sorv' element={<Sorveteria/>} />
    <Route path='/insta' element={<Instagram/>} />
    <Route path='/netflix' element={<Netflix/>} />
    <Route path='/marvel' element={<Marvel/>} />
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

