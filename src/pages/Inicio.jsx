import React from "react";
import "../styles/Inicio.css";
import Navbar from '../components/Navbar';
import Header from '../components/Header';

const Inicio = () => {
  return (
    <><Header title="CAJA"/>
    <div className="Inicio">
      <section className="app">
        <div className="resumen">
          <h2>Resumen</h2>
          <div className="resumen_info">
            <input type="datetime" name="" id="resumen_fecha" placeholder="Fecha Hora" disabled />
            <input
              type="number"
              name=""
              id="resumen_monto" placeholder="Monto Gs."
              readonly disabled />
          </div>
        </div>
        <div>
          <input type="button" value="Abrir Caja" />
        </div>
      </section>
      <Navbar />
    </div></>
  );
};

export default Inicio;
