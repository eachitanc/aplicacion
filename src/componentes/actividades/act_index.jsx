import React, { Fragment } from 'react';
import Navbar from '../navbar';
import Act_Table from './act_table';
import Footer from '../footer';
function Inicio() {
    return (
        <Fragment>
            <Navbar />
            <Act_Table />
            <Footer />
        </Fragment>
    );
}
export default Inicio;