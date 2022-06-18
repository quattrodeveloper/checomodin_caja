import React from "react";
import '../styles/Login.scss';

import Logo from '../assets/logo.png';

const Login = () => {
  return (
    <section className="app">
      <div className="logo">
        <img src={Logo} alt="" />
      </div>
      <div className="container_login">
        <h3>Usuario</h3>
        <input type="email" name="" id="user" required />
        <h3>Contraseña</h3>
        <input type="password" name="" id="password" required />
        <p>
          <a href="#">¿Olvidaste tu contraseña?</a>
        </p>
      </div>
      <input type="button" value="Ingresar" />
    </section>
  );
};

export default Login;
