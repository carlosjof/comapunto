import React, { Component } from 'react';
import logo from '../Images/Logo.png'
import '../css/HeaderComponent.css'
class HeaderComponent extends Component {

    render(){
        return(
            <nav className="menu">
                <div className="Titulo-menu">
                    <img src={logo} className="logo"/>
                    <span>Punto y coma</span>
                </div>
                <div className="enlaces-menu-container">
                    <div className="enlaces-menu">
                        <a href="#">Inicio</a>
                        <a href="#">Post</a>
                        <a href="#">Off topic</a>
                        <a href="#">Iniciar sesion</a>
                        <a href="#">Registrarse</a>
                    </div>
                </div>
            </nav>
        )
    }

}

export default HeaderComponent