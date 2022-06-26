import React from 'react';
import "../styles/Menu.scss";

const Menu = () => {
    return (
        <div className='top-menu'>
            <a href="#"><h5>CONFIGURACIÓN</h5></a>
            <a href="#"><h5>¿Cómo se usa?</h5></a>
            <input type="button" value="Cerrar Sesión" id="boton_cerrar" />
        </div>
    );
}

export default Menu;