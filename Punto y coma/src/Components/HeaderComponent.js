import React, { Component } from 'react';
import logo from '../Images/Logo.png'
import $ from 'jquery'
import '../css/HeaderComponent.css'

class HeaderComponent extends Component {

    componentDidMount(){
        $(document).ready(function () {
            var flag = false;
            var scroll;
            $(window).scroll(function () {
                scroll = $(window).scrollTop();
                if (scroll > 569) {
                    if (!flag) {
                        $("nav").css({ "transition": " 0.2s", "background": "rgba(10,10,10,.9)"});
                        $(".floatButton").css({ "z-index": "-1" });
                        flag = true;
                    }
                } else {
                    if (flag) {
                        $("nav").css({ "background-color": "transparent", "opacity": "1" });
                        $(".floatButton").css({ "z-index": "1" });
                        flag = false;
                    }
                }

            });
        });
    }

    render(){
        return(
            
            <nav className="menu">
                <div className="Titulo-menu">
                    <img src={logo} className="logo" alt="logo"/>
                    <span>Punto y coma</span>
                </div>

                <div className="enlaces-menu-container">
                    <div className="enlaces-menu">
                        <a >Inicio</a>
                        <a >Post</a>
                        <a >Off topic</a>
                        <a onClick={this.openLoginModal}>Iniciar sesion</a>
                        <a onClick={this.openSignUpModal}>Registrarse</a>
                    </div>
                </div>
            </nav>
        )
    }
    openLoginModal() {
        let modal = document.getElementById("LogInModal");
        modal.setAttribute("open", true)
    }
    openSignUpModal(){
        let modal = document.getElementById("SignUpModal");
        modal.setAttribute("open", true)
    }
}

export default HeaderComponent