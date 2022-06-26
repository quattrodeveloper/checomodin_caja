import React from "react";
import "../styles/Mensajes_cont.scss";

const Mensajes_cont = () => {
  return (
    <div className="mensajes">
        <div className="mensaje_cont">
          <div className="estado_mensaje"></div>
          <div className="texto_mensaje">
            <div className="fecha_mensaje">22-06-2022</div>
            <div className="mensaje">
              Los lunes de julio regalamos un combo de chipa + café a los primeros
              20 clientes en todas nuestras salas.
            </div>
          </div>
        </div>
    </div>
  );
};

export default Mensajes_cont;
