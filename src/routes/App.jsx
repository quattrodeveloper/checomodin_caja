import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Layout from "../containers/Layout";
import Login from "../pages/Login";
import Inicio from "../pages/Inicio";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import "../styles/global.css";
import Apertura from "../pages/Apertura";
import Principal from "../pages/Principal";
import Ingreso_din from "../pages/Ingreso_din";
import Cierre from "../pages/Cierre";
import Ingreso_fic from "../pages/Ingreso_fic";
import Corte_caja from "../pages/Corte_caja";
import Corte_fic from "../pages/Corte_fic";
import Ayuda from "../pages/Ayuda";
import Mensajes from "../pages/Mensajes";
import Configuracion from "../pages/Configuracion";


const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/inicio" element={<Inicio />} />
          <Route exact path="/apertura" element={<Apertura />} />
          <Route exact path="/principal" element={<Principal />} />
          <Route exact path="/ingreso-dinero" element={<Ingreso_din />} />
          <Route exact path="/ingreso-fichas" element={<Ingreso_fic />} />
          <Route exact path="/corte-caja" element={<Corte_caja />} />
          <Route exact path="/corte-fichas" element={<Corte_fic />} />
          <Route exact path="/cierre" element={<Cierre />} />
          <Route exact path="/mensajes" element={<Mensajes />} />
          <Route exact path="/ayuda" element={<Ayuda />} />
          <Route exact path="/configuracion" element={<Configuracion />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
