import React from "react";
import "../styles/Ayuda.scss";
import Header from "../components/Header";
import Navbar from "../components/Navbar";

const Ayuda = () => {
  return (
    <>
      <Header title="AYUDA" />
      <div className="container_llamar">
        <h2>Solicitar</h2>
        <a href="tel:#"><buton className="boton_stecnico">SERVICIO TÉCNICO</buton></a>
        <a href="tel:#"><buton className="boton_bomberos">BOMBEROS</buton></a>
        <a href="tel:#"><buton className="boton_policia">POLICÍA</buton></a>
      </div>
      <Navbar />
    </>
  );
};

export default Ayuda;
