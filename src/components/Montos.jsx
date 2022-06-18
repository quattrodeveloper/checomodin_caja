import React from "react";
import "../styles/Montos.scss";

const Montos = () => {
  return (
    <div className="app_align">
        <><div className="titulo">
              <h2 className="titulo_valor">Valor Gs.</h2>
              <h2 className="titulo_cantidad">Cantidad</h2>
              <h2 className="titulo_monto">Monto</h2>
          </div><div className="container">
                  <div className="cell valor">100</div>
                  <input
                      type="number"
                      name=""
                      className="cell cantidad"
                      id="cantidad-100" />
                  <input
                      type="number"
                      name=""
                      className="cell monto"
                      id="monto-100"
                      readonly disabled />
                  <div className="cell valor">500</div>
                  <input
                      type="number"
                      name=""
                      className="cell cantidad"
                      id="cantidad-500" />
                  <input
                      type="number"
                      name=""
                      className="cell monto"
                      id="monto-500"
                      readonly disabled />
                  <div className="cell valor">1000</div>
                  <input type="number" name="" className="cell cantidad" id="cantidad-1k" />
                  <input
                      type="number"
                      name=""
                      className="cell monto"
                      id="monto-1k"
                      readonly disabled />
                  <div className="cell valor">2.000</div>
                  <input type="number" name="" className="cell cantidad" id="cantidad-2k" />
                  <input
                      type="number"
                      name=""
                      className="cell monto"
                      id="monto-2k"
                      readonly disabled />
                  <div className="cell valor">5.000</div>
                  <input type="number" name="" className="cell cantidad" id="cantidad-5k" />
                  <input
                      type="number"
                      name=""
                      className="cell monto"
                      id="monto-5k"
                      readonly disabled />
                  <div className="cell valor">10.000</div>
                  <input
                      type="number"
                      name=""
                      className="cell cantidad"
                      id="cantidad-10k" />
                  <input
                      type="number"
                      name=""
                      className="cell monto"
                      id="monto-10k"
                      readonly disabled />
                  <div className="cell valor">20.000</div>
                  <input
                      type="number"
                      name=""
                      className="cell cantidad"
                      id="cantidad-20k" />
                  <input
                      type="number"
                      name=""
                      className="cell monto"
                      id="monto-20k"
                      readonly disabled />
                  <div className="cell valor">50.000</div>
                  <input
                      type="number"
                      name=""
                      className="cell cantidad"
                      id="cantidad-50k" />
                  <input
                      type="number"
                      name=""
                      className="cell monto"
                      id="monto-50k"
                      readonly disabled />
                  <div className="cell valor">100.000</div>
                  <input
                      type="number"
                      name=""
                      className="cell cantidad"
                      id="cantidad-100k" />
                  <input
                      type="number"
                      name=""
                      className="cell monto"
                      id="monto-100k"
                      readonly disabled />
        </div></>
    </div>
  );
};

export default Montos;
