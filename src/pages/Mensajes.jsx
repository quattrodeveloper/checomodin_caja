import React from "react";
import "../styles/Mensajes.scss";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Mensajes_cont from "../components/Mensajes_cont"

const Mensajes = () => {
  return (
    <>
      <Header title="MENSAJES" />
      <div className="seccion_mensajes">
        <Mensajes_cont />
      </div>
      <Navbar />
    </>
  );
};

export default Mensajes;
