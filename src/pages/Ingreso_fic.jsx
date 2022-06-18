import React from "react";
import "../styles/Ingreso_fic.css"
import Navbar from '../components/Navbar';
import Header from '../components/Header';

const IngresoFichas = () => {
  return (
    <div className="Inicio">
      <Header />
      <section className="app">
        <h2>Ingreso de Fichas</h2>
        <div className="ingreso_fichas">
          <h2>Cantidad de fichas</h2>
          <input type="text" name="" id=""/>
        </div>
        <input type="button" value="Confirmar" />
      </section>
      <Navbar />
    </div>
  );
};

export default IngresoFichas;
