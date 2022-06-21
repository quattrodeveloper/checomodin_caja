import React from 'react';
import '../styles/Apertura.scss'
import Montos from '../components/Montos'
import Navbar from '../components/Navbar';
import Header from '../components/Header';

const Apertura = () => {
    return (
        <>
            <Header />
            <Montos />
            <div className='totales_align'>
                <div className="totales">
                    <h2>Total Gs.</h2>
                    <input type="number" name="" id="ap-total-gs" disabled />
                    <h2>Fichas</h2>
                    <input type="number" name="" id="ap-total-fichas" disabled />
                </div>
            </div>
            <div className='btn_conf'><input type="button" value="Confirmar" /></div>
            <Navbar />
        </>
    );
}

export default Apertura;