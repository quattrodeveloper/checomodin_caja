import React from "react";
import "../styles/Principal.scss";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import iconIngreso from "../assets/icons/ingreso.svg";
import iconCorte from "../assets/icons/corte.svg";

const Principal = () => {
  return (
    <>
      <Header title="CAJA"/>
      <section className="app">
        <div id="resumen-ppal">
          <h2>Resumen</h2>
          <input
            type="datetime"
            name=""
            id="fecha-ppal"
            readonly
            placeholder="27/05/22 00:40"
          />
        </div>
        <div id="container-info-ppal">
          <h2 className="container-info-ppal-titulo">Dinero</h2>
          <input type="number" name="" id="total-gs" readonly disabled />
          <h2 className="container-info-ppal-titulo">Fichas</h2>
          <input type="number" name="" id="total-fichas" readonly disabled />
        </div>
        <div className="registrar">
          <h2>Registrar movimiento</h2>
          <div className="reg_cont">
            <div className="reg_cont_sec">
              <h2>DINERO</h2>
              <div className="ingreso">
                <button className="boton_circular">
                  <a href="#">
                    <img src={iconIngreso} alt="" />
                  </a>
                </button>
                <h3>Ingreso</h3>
              </div>
              <div className="corte">
                <button className="boton_circular">
                  <a href="#">
                    <img src={iconCorte} alt="" />
                  </a>
                </button>
                <h3>Corte</h3>
              </div>
            </div>
          </div>
          <div className="fichas_cont">
            <div className="fichas_cont_sec">
              <h2>FICHAS</h2>
              <div className="ingreso">
                <button className="boton_circular">
                  <a href="#">
                    <img src={iconIngreso} alt="" />
                  </a>
                </button>
                <h3>Ingreso</h3>
              </div>
              <div className="corte">
                <button className="boton_circular">
                  <a href="#">
                    <img src={iconCorte} alt="" />
                  </a>
                </button>
                <h3>Corte</h3>
              </div>
            </div>
          </div>
        </div>
        <input type="button" value="Cerrar Caja" id="boton_cerrar" />
      </section>
      <Navbar />
    </>
  );
};

export default Principal;
