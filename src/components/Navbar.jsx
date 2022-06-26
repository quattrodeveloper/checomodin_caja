import React from "react";
import "../styles/Navbar.scss";

const Navbar = () => {
  return (
    <nav className="nav_bottom">
      <a href="" className="nav_bottom_inicio">
        <i className="bi bi-house"></i>
        <p>Inicio</p>
      </a>
      <a href="" className="nav_bottom_mensajes">
        <i className="bi bi-chat-left-dots"></i>
        <p>Mensajes</p>
      </a>
      <a href="" className="nav_bottom_ayuda">
        <i className="bi bi-exclamation-triangle"></i>
        <p>Ayuda</p>
      </a>
    </nav>
  );
};

export default Navbar;
