import React from 'react';
import '../styles/Cierre.scss'
import Montos from '../components/Montos'
import Navbar from '../components/Navbar';
import Header from '../components/Header';

const Cierre = () => {
    return (
        <><><><Header /><Montos /></>
        <div className='totales_align'>
            <div className="totales">
                <h2>Total Gs.</h2>
                <input type="number" name="" id="cie-total-gs" readonly disabled />
                <h2>Fichas</h2>
                <input type="number" name="" id="cie-total-fichas" readonly disabled />
            </div>
        </div>
            <div className='btn_conf'><input type="button" value="Confirmar" /></div></><Navbar /></>
    );
}

export default Cierre;