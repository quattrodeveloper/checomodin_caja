import React from "react";
import "../styles/Corte_caja.css"
import Navbar from '../components/Navbar';
import Header from '../components/Header';

const CorteCaja = () => {
  return (
    <div className="Inicio">
      <Header />
      <section className="app">
        <h2>Corte de Caja</h2>
        <div className="corte_caja">
          <h2>Monto</h2>
          <input type="number" name="" id="corte-monto"/>
          <h2>Retirado por</h2>
          <input type="text" name="" id=""/>
        </div>
        <input type="button" value="Confirmar" />
      </section>
      <Navbar />
    </div>
  );
};

export default CorteCaja;
