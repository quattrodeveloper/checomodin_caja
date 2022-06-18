import React, { useState } from "react";
import '../styles/Header.scss';

const Header = () => {
  const [name, setName] = useState('Caja');
  return (
    <nav className="nav_top">
      <i className="bi bi-list"></i>
      <h1>{name}</h1>
      <i className="bi bi-bell-fill"></i>
    </nav>
  );
};

export default Header;
