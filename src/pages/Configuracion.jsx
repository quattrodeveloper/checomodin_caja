import React from "react";
import "../styles/Configuracion.scss";
import Header from "../components/Header";
import Navbar from "../components/Navbar";

const Configuracion = () => {
  return (
    <>
      <Header title="CONFIGURACIÓN" />
      <div className="config_title">CUENTA</div>
      <div className="configuracion">
        <div className="config">
          <h6>Nombre de usuario</h6>
          <div className="nombre">Nombre Apellido</div>
          
        </div>
        <div className="config">
          <h6>Teléfono</h6>
          <div className="telefono">555 444</div>
          
        </div>
        <div className="config">
          <h6>Contraseña</h6>
          <div className="contrasena">********</div>
          
        </div>
      </div>
      <div className="sala_title">SALA</div>
      <div className="configuracion">
        <div className="config">
          <h6>Nombre de sala</h6>
          <div className="nombre_sala">Sala Tal</div>
          
        </div>
        <div className="config">
          <h6>Ciudad</h6>
          <div className="ciudad">Luque</div>
          
        </div>
        <div className="config">
          <h6>Dirección</h6>
          <div className="direccion">Av. Tal N 1.234</div>
          
        </div>
      </div>
      <div className="margin_config"></div>
      <Navbar />
    </>
  );
};

export default Configuracion;
