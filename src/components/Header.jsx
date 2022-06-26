import React, { useState } from "react";
import "../styles/Header.scss";
import Menu from "../components/Menu";

const Header = (props) => {
  console.log(props);
  const { title = "" } = props;

  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
};

    return (
      <nav className="nav_top">
        <i className="bi bi-list" onClick={handleToggle}></i>
        {/* { title ? <h1 style={{ color: colores }}>{titulo}</h1> : "" } */}
        <h1>{title}</h1>
        {toggle && <Menu />}
      </nav>
    );
  };

export default Header;
