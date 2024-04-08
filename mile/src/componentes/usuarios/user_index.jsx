import React from 'react';
import Navbar from '../navbar';
import Footer from '../footer';
import Tabla from './user_table';
function Inicio() {
    return (
        <div>
            <Navbar />
            <Tabla />
            <Footer />
        </div>
    );
}
export default Inicio;