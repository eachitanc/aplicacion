import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './componentes/login';
import Inicio from './componentes/inicio';
import Usuarios from './componentes/usuarios/user_index';
import Actividades from './componentes/actividades/act_index';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/inicio" element={<Inicio />} />
                <Route path="/usuarios" element={<Usuarios />} />
                <Route path="/actividades" element={<Actividades />} />
                <Route path="/" element={<Login />} />
            </Routes>
        </Router>
    );
}

export default App;
