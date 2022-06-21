import React, { useState } from "react";
import "../styles/Header.scss";

const Header = (props) => {
  console.log(props);
  const { title = "", color = "red" } = props;

  const titulo = props.title ? props.title : "Sin Titulo";
  const colores = props.color ? props.color : "red";
  //const [name, setName] = useState('Caja');
  return (
    <nav className="nav_top">
      <i className="bi bi-list"></i>
      {/* { title ? <h1 style={{ color: colores }}>{titulo}</h1> : "" } */}
      <h1 style={{ color: color }}>{title}</h1>
      <i className="bi bi-bell-fill"></i>
    </nav>
  );
};

export default Header;
