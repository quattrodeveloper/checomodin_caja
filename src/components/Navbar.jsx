import React from "react";
import "../styles/Navbar.scss";

const Navbar = () => {
  return (
    <nav className="nav_bottom">
      <a href="" className="nav_bottom_inicio">
        <i className="bi bi-house"></i>
        <p>Inicio</p>
      </a>
      <a href="" className="nav_bottom_novedades">
        <i className="bi bi-book"></i>
        <p>Novedades</p>
      </a>
      <a href="" className="nav_bottom_contactos">
        <i className="bi bi-telephone"></i>
        <p>Contactos</p>
      </a>
    </nav>
  );
};

export default Navbar;
