import React from 'react';
import '../styles/Ingreso_din.scss'
import Montos from '../components/Montos'
import Navbar from '../components/Navbar';
import Header from '../components/Header';

const IngresoDinero = () => {
    return (
        <><><><Header /><Montos /></>
        <div className='totales_align'>
            <div className="totales">
                <h2>Total Gs.</h2>
                <input type="number" name="" id="total-gs" readonly disabled />
            </div>
        </div>
            <div className='btn_conf'><input type="button" value="Confirmar" /></div></><Navbar /></>
    );
}

export default IngresoDinero;